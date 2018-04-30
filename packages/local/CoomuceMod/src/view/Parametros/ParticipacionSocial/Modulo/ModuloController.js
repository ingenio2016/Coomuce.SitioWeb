Ext.define('CoomuceMod.view.Parametros.ParticipacionSocial.ModuloController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.parametros-participacionsocial-modulo',

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonAdicionarClick: function () {
        var me = this;

        var eje = me.lookupReference("eje");
        var unidad = me.lookupReference("unidad");

        if (Ext.isEmpty(eje.getValue())) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: me.getTitleView(), msg: "Debe seleccionar un eje." });

            return false;
        }

        if (Ext.isEmpty(unidad.getValue())) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: me.getTitleView(), msg: "Debe seleccionar una unidad." });

            return false;
        }

        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-Modulo-Principal').getStore();
        var max = storeGrid.max("idModulo");
        var nextId = storeGrid.identity;

        if (max > nextId) {
            nextId = max;
        }

        var row = [
            {
                idModulo: (nextId == undefined ? 1 : nextId + 1),
                idUnidad: unidad.getValue(),
                codigoModulo: "",
                nombreModulo: ""
            }
        ];

        storeGrid.insert(0, row);
    },

    onBotonCancelarClick: function () {
        var me = this;

        Ext.Msg.confirm(me.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-Modulo-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomuceModulo");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();
        var unidad = me.lookupReference("unidad");

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-Modulo-Principal');
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
                    url: Coomuce.Url.Parametros + "ModuloCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load({ params: { idUnidad: unidad.getValue() } });
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-Modulo-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;

        if (combo.unidadField !== undefined) {
            var unidad = me.lookupReference("unidad");
            unidad.getStore().load({ params: { idEje: record.data.idEje } });
        }
        else if (combo.gridField !== undefined) {
            var grid = Ext.getCmp("Grid-Modulo-Principal");
            grid.getStore().load({ params: { idUnidad: record.data.idUnidad } });
        }
    }

});
