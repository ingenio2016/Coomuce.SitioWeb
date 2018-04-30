Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.PreguntasCicloVitalController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.parametros-caracterizacionpoblacional-preguntasciclovital',

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonCancelarClick: function () {
        Ext.Msg.confirm(this.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-PreguntasCicloVital-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomucePreguntasCicloVital");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var me = this;

        var titleView = me.getTitleView();

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var ciclo = me.lookupReference("idCicloVital");
                var sexo = me.lookupReference("idTipoSexo");

                var grid = Ext.getCmp('Grid-PreguntasCicloVital-Principal');
                var storeGrid = grid.getStore();

                var nuevos = [];

                Ext.each(storeGrid.data.items, function (ob, index, all) {
                    nuevos.push(ob.data);
                });

                var conf = {
                    url: Coomuce.Url.Parametros + "PreguntasCicloVitalCUD",
                    data: {
                        idCicloVital: ciclo.getValue(),
                        idTipoSexo: sexo.getValue(),
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
        var storeGrid = Ext.getCmp('Grid-PreguntasCicloVital-Principal');
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
            if (combo.gridCiclo) {
                var ciclo = me.lookupReference("idCicloVital");
                var sexo = me.lookupReference("idTipoSexo");

                var storeGrid = Ext.getCmp('Grid-PreguntasCicloVital-Principal').getStore();

                storeGrid.load({ params: { idCicloVital: ciclo.getValue(), idTipoSexo: sexo.getValue() } });
            }
            else {
                var storeGrid = Ext.getCmp('Grid-PreguntasSubFactorRiesgo').getStore();

                storeGrid.load({ params: { idSubFactorRiesgo: record.get("idSubFactorRiesgo") } });
            }
        }
    },

    onBotonAgregarSeleccionClick: function () {
        var me = this;

        var ciclo = me.lookupReference("idCicloVital");
        var sexo = me.lookupReference("idTipoSexo");

        var seleccion = Ext.getCmp('Grid-PreguntasSubFactorRiesgo').selModel.getSelection();
        
        var preg = [];

        Ext.each(seleccion, function (item, index, allItems) {
            preg.push({
                idCicloVital: ciclo.getValue(),
                compCicloVital: ciclo.getRawValue(),
                idTipoSexo: sexo.getValue(),
                compTipoSexo: sexo.getRawValue(),
                idPreguntasSubFactorRiesgo: item.data.idPreguntasSubFactorRiesgo,
                compPreguntasSubFactorRiesgo: item.data.compPreguntasSubFactorRiesgo
            });
        });

        Ext.getCmp('Grid-PreguntasCicloVital-Principal').getStore().insert(0, preg);
    }

});
