Ext.define('CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaLiteralController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.parametros-informacionorientacion-encuestaliteral',

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
        var pregunta = me.lookupReference("pregunta");

        if (Ext.isEmpty(vista.getValue())) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: me.getTitleView(), msg: "Debe seleccionar un formato de encuesta." });

            return false;
        }

        if (Ext.isEmpty(categoria.getValue())) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: me.getTitleView(), msg: "Debe seleccionar una categoria." });

            return false;
        }

        if (Ext.isEmpty(pregunta.getValue())) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: me.getTitleView(), msg: "Debe seleccionar una pregunta." });

            return false;
        }

        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-EncuestaLiteral-Principal').getStore();
        var max = storeGrid.max("idEncuestaLiteral");
        var nextId = storeGrid.identity;

        if (max > nextId) {
            nextId = max;
        }

        var row = [
            {
                idEncuestaLiteral: (nextId == undefined ? 1 : nextId + 1),
                idEncuestaPregunta: pregunta.getValue(),
                liteEncuestaLiteral: "",
                textoEncuestaLiteral: "",
                valorEncuestaLiteral: 0
            }
        ];

        storeGrid.insert(0, row);
    },

    onBotonCancelarClick: function () {
        var me = this;

        Ext.Msg.confirm(me.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-EncuestaLiteral-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomuceEncuentaLiteral");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();
        var pregunta = me.lookupReference("pregunta");

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-EncuestaLiteral-Principal');
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
                    url: Coomuce.Url.Parametros + "EncuestaLiteralCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load({ params: { idEncuestaPregunta: pregunta.getValue() } });
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-EncuestaLiteral-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;

        if (combo.categoriaField !== undefined) {
            var categoria = me.lookupReference("categoria");
            categoria.getStore().load({ params: { idDomVista: record.data.id } });
        }
        if (combo.preguntaField !== undefined) {
            var categoria = me.lookupReference("pregunta");
            categoria.getStore().load({ params: { idEncuestaCategoria: record.data.idEncuestaCategoria } });
        }
        else if (combo.gridField !== undefined) {
            var grid = Ext.getCmp("Grid-EncuestaLiteral-Principal");
            grid.getStore().load({ params: { idEncuestaPregunta: record.data.idEncuestaPregunta } });
        }
    }

});
