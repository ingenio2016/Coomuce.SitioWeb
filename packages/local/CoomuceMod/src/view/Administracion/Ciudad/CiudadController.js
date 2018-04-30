Ext.define('CoomuceMod.view.Administracion.CiudadController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.administracion-ciudad',

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonAdicionarClick: function () {
        var me = this;

        var departamento = me.lookupReference("departamento");

        if (Ext.isEmpty(departamento.getValue())) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: "Ciudad", msg: "Debe seleccionar un departamento." });

            return false;
        }

        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-Ciudad-Principal').getStore();
        var max = storeGrid.max("idCiudad");
        var nextId = storeGrid.identity;

        if (max > nextId) {
            nextId = max;
        }

        var row = [
            {
                idCiudad: (nextId == undefined ? 1 : nextId + 1),
                idDepartamento: departamento.getValue(),
                codigoCiudad: "",
                nombreCiudad: ""
            }
        ];

        storeGrid.insert(0, row);
    },

    onBotonCancelarClick: function () {
        Ext.Msg.confirm("Ciudad", "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-Ciudad-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomuceCiudad");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        Ext.Msg.confirm("Ciudad", "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-Ciudad-Principal');
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
                        Coomuce.Util.ShowMessage({ type: "ERROR", title: "Ciudad", msg: validator.msg });

                        return false;
                    }
                }

                var conf = {
                    url: Coomuce.Url.Administracion + "CiudadCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load();
                        var tabPanel = Ext.getCmp("CoomuceCiudad");
                        tabPanel.destroy();
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-Ciudad-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onSelectDepartamento: function (combo, record, eOpts) {
        var grid = Ext.getCmp("Grid-Ciudad-Principal");

        grid.getStore().proxy.setUrl(Coomuce.Url.Administracion + "GetCiudadAll?idDepartamento=" + record.data.idDepartamento);
        grid.getStore().load();
    }

});
