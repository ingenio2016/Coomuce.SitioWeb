Ext.define('CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaPreguntaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.parametros-informacionorientacion-encuestapregunta',

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonAdicionarClick: function () {
        var me = this;

        var vista = me.lookupReference("vista");
        var categoria = me.lookupReference("categoria");

        if (Ext.isEmpty(vista.getValue())) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: me.getTitleView(), msg: "Debe seleccionar un formato de encuesta." });

            return false;
        }

        if (Ext.isEmpty(categoria.getValue())) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: me.getTitleView(), msg: "Debe seleccionar una categoria." });

            return false;
        }

        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-EncuestaPregunta-Principal').getStore();
        var max = storeGrid.max("idEncuestaPregunta");
        var nextId = storeGrid.identity;

        if (max > nextId) {
            nextId = max;
        }

        var row = [
            {
                idEncuestaPregunta: (nextId == undefined ? 1 : nextId + 1),
                idEncuestaCategoria: categoria.getValue(),
                codigoEncuestaPregunta: "",
                textoEncuestaPregunta: "",
                tipoPreEncuestaPregunta: 1,
                valorEncuestaPregunta: 0
            }
        ];

        storeGrid.insert(0, row);
    },

    onBotonCancelarClick: function () {
        var me = this;

        Ext.Msg.confirm(me.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-EncuestaPregunta-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomuceEncuestaPregunta");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();
        var categoria = me.lookupReference("categoria");

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-EncuestaPregunta-Principal');
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
                    url: Coomuce.Url.Parametros + "EncuestaPreguntaCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load({ params: { idEncuestaCategoria: categoria.getValue() } });
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-EncuestaPregunta-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;

        if (combo.categoriaField !== undefined) {
            var categoria = me.lookupReference("categoria");
            categoria.getStore().load({ params: { idDomVista: record.data.id } });
        }
        else if (combo.gridField !== undefined) {
            var grid = Ext.getCmp("Grid-EncuestaPregunta-Principal");
            grid.getStore().load({ params: { idEncuestaCategoria: record.data.idEncuestaCategoria } });
        }
    }

});
