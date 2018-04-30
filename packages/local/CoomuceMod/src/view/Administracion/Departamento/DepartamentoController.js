Ext.define('CoomuceMod.view.Administracion.DepartamentoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.administracion-departamento',

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonAdicionarClick: function () {
        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-Departamento-Principal').getStore();
        var nextId = storeGrid.max("idDepartamento");

        var row = [
            {
                idDepartamento: (nextId == undefined ? 1 : nextId + 1),
                codigoDepartamento: "",
                nombreDepartamento: ""
            }
        ];

        storeGrid.insert(0, row);
    },

    onBotonCancelarClick: function () {
        Ext.Msg.confirm("Departamento", "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-Departamento-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomuceDepartamento");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        Ext.Msg.confirm("Departamento", "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-Departamento-Principal');
                var storeGrid = grid.getStore();

                var nuevos = [];
                var viejos = [];
                var eliminados = [];
                var itemsValidar = [];

                Ext.each(storeGrid.data.items, function (ob, index, all) {
                    if (ob.dirty) {
                        if (ob.phantom) {
                            nuevos.push(ob.data);
                        }
                        else {
                            viejos.push(ob.data);
                        }

                        itemsValidar.push(ob);
                    }
                });

                Ext.each(storeGrid.getRemovedRecords(), function (ob, index) {
                    if (!ob.phantom) {
                        eliminados.push(ob.getData());
                    }
                });

                // solo validar cuando se edita o adiciona registros
                if (itemsValidar.length > 0) {
                    var validator = Coomuce.Util.dataValidate(itemsValidar);

                    if (!validator.success) {
                        Coomuce.Util.ShowMessage({ type: "ERROR", title: "Departamento", msg: validator.msg });

                        return false;
                    }
                }

                var conf = {
                    url: Coomuce.Url.Administracion + "DepartamentoCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load();
                        var tabPanel = Ext.getCmp("CoomuceDepartamento");
                        tabPanel.destroy();
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-Departamento-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    }

});
