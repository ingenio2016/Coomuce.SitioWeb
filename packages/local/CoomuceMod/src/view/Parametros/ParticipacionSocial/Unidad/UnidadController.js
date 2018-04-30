Ext.define('CoomuceMod.view.Parametros.ParticipacionSocial.UnidadController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.parametros-participacionsocial-unidad',

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonAdicionarClick: function () {
        var me = this;

        var eje = me.lookupReference("eje");

        if (Ext.isEmpty(eje.getValue())) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: me.getTitleView(), msg: "Debe seleccionar un eje." });

            return false;
        }

        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-Unidad-Principal').getStore();
        var max = storeGrid.max("idUnidad");
        var nextId = storeGrid.identity;

        if (max > nextId) {
            nextId = max;
        }

        var row = [
            {
                idUnidad: (nextId == undefined ? 1 : nextId + 1),
                idEje: eje.getValue(),
                codigoUnidad: "",
                nombreUnidad: ""
            }
        ];

        storeGrid.insert(0, row);
    },

    onBotonCancelarClick: function () {
        var me = this;

        Ext.Msg.confirm(me.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-Unidad-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomuceUnidad");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();
        var eje = me.lookupReference("eje");

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-Unidad-Principal');
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
                    url: Coomuce.Url.Parametros + "UnidadCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load({ params: { idEje: eje.getValue() } });
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-Unidad-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;

        var grid = Ext.getCmp("Grid-Unidad-Principal");
        grid.getStore().load({ params: { idEje: record.data.idEje } });
    }

});
