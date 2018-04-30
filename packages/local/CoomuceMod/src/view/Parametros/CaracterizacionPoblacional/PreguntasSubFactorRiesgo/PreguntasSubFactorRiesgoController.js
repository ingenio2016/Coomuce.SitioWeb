Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.PreguntasSubFactorRiesgoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.parametros-caracterizacionpoblacional-preguntassubfactorriesgo',
    
    getTitleView: function () {
        return this.getView().getTitle();
    },

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonAdicionarClick: function () {
        var me = this;

        var subFactorRiesgo = me.lookupReference("subFactorRiesgo");

        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-PreguntasSubFactorRiesgo-Principal').getStore();
        var max = storeGrid.max("idPreguntasSubFactorRiesgo");
        var nextId = storeGrid.identity;

        if (max > nextId) nextId = max;

        var row = [
            {
                idPreguntasSubFactorRiesgo: (nextId == undefined ? 1 : nextId + 1),
                idSubFactorRiesgo: subFactorRiesgo.getValue(), 
                codigoPreguntasSubFactorRiesgo: "",
                nombrePreguntasSubFactorRiesgo: ""
            }
        ];

        storeGrid.insert(0, row);
    },

    onBotonCancelarClick: function () {
        Ext.Msg.confirm(this.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-PreguntasSubFactorRiesgo-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomucePreguntasSubFactorRiesgo");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var me = this;

        var subFactorRiesgo = me.lookupReference("subFactorRiesgo");
        var titleView = me.getTitleView();

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-PreguntasSubFactorRiesgo-Principal');
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
                    url: Coomuce.Url.Parametros + "PreguntasSubFactorRiesgoCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load({ params: { idSubFactorRiesgo: subFactorRiesgo.getValue() } });
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-PreguntasSubFactorRiesgo-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;

        if (combo.loadCombo) {
            var subFactorRiesgo = me.lookupReference("subFactorRiesgo");
            var store = subFactorRiesgo.getStore();

            store.load({ params: { idFactorRiesgo: record.get("idFactorRiesgo") } });
        }
        else {
            var storeGrid = Ext.getCmp('Grid-PreguntasSubFactorRiesgo-Principal').getStore();

            storeGrid.load({ params: { idSubFactorRiesgo: record.get("idSubFactorRiesgo") } });
        }
    }

});
