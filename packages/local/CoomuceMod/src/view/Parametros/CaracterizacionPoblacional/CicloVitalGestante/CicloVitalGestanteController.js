Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.CicloVitalGestanteController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.parametros-caracterizacionpoblacional-ciclovitalgestante',

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonCancelarClick: function () {
        Ext.Msg.confirm(this.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-CicloVitalGestante-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomuceCicloVitalGestante");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var titleView = this.getTitleView();

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-CicloVitalGestante-Principal');
                var storeGrid = grid.getStore();

                var nuevos = [];

                Ext.each(storeGrid.data.items, function (ob, index, all) {
                    nuevos.push(ob.data);
                });

                var conf = {
                    url: Coomuce.Url.Parametros + "PreguntasCicloVitalGestanteCUD",
                    data: {
                        nuevos: nuevos
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
        var storeGrid = Ext.getCmp('Grid-CicloVitalGestante-Principal');
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
            var storeGrid = Ext.getCmp('Grid-PreguntasSubFactorRiesgo').getStore();

            storeGrid.load({ params: { idSubFactorRiesgo: record.get("idSubFactorRiesgo") } });
        }
    },

    onBotonAgregarItemListaClick: function () {
        var me = this;

        var storeGrid = Ext.getCmp('Grid-CicloVitalGestante-Principal').getStore();
        var nextId = storeGrid.max("idCicloVitalGestante");

        var factorRiesgo = me.lookupReference("factorRiesgo");
        var subFactorRiesgo = me.lookupReference("subFactorRiesgo");
        var grid = Ext.getCmp("Grid-PreguntasSubFactorRiesgo");

        var selection = grid.getSelectionModel().getSelection();

        var rows = [];

        Ext.each(selection, function (item, index, allItems) {
            nextId = (nextId == undefined ? 1 : nextId + 1);

            rows.push({
                idCicloVitalGestante: nextId,
                compFactorRiesgo: factorRiesgo.getRawValue(),
                compSubFactorRiesgo: subFactorRiesgo.getRawValue(),
                idPreguntasSubFactorRiesgo: item.data.idPreguntasSubFactorRiesgo,
                compPreguntasSubFactorRiesgo: item.data.compPreguntasSubFactorRiesgo
            });
        });

        storeGrid.add(rows);

        grid.getSelectionModel().deselectAll();
    }

});
