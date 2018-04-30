Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.CondicionesVivienda.DisposicionBasuraController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.parametros-caracterizacionpoblacional-condicionesvivienda-disposicionbasura',
    
    getTitleView: function () {
        return this.getView().getTitle();
    },

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonAdicionarClick: function () {
        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-DisposicionBasura-Principal').getStore();
        var nextId = storeGrid.max("idDisposicionBasura");

        var row = [
            {
                idDisposicionBasura: (nextId == undefined ? 1 : nextId + 1),
                codigoDisposicionBasura: "",
                nombreDisposicionBasura: ""
            }
        ];

        storeGrid.insert(0, row);
    },

    onBotonCancelarClick: function () {
        Ext.Msg.confirm(this.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-DisposicionBasura-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomuceDisposicionBasura");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var titleView = this.getTitleView();

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-DisposicionBasura-Principal');
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
                        Coomuce.Util.ShowMessage({ type: "ERROR", title: titleView, msg: validator.msg });

                        return false;
                    }
                }

                var conf = {
                    url: Coomuce.Url.Parametros + "DisposicionBasuraCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load();
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-DisposicionBasura-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    }

});
