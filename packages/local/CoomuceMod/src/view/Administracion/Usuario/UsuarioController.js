Ext.define("CoomuceMod.view.Administracion.UsuarioController", {
    extend: "Ext.app.ViewController",
    alias: "controller.administracion-usuario",

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
        this.getReferences().reenviarCredencialButton.setDisabled(selections.length === 0);
    },

    onBotonAdicionarClick: function () {
        var me = this;

        var grid = Ext.getCmp('Grid-Usuario-Principal');
        // Create a record instance
        var storeGrid = grid.getStore();
        var nextId = storeGrid.max("idUsuario");

        var row = [
            {
                idUsuario: (nextId == undefined ? 1 : nextId + 1),
                idTipoIdentificacion: 0,
                nombreTipoIdentificacion: "",
                primerApellidoUsuario: "",
                segundoApellidoUsuario: "",
                primerNombreUsuario: "",
                segundoNombreUsuario: "",
                emailUsuario: "",
                idRol: 0,
                nombreRol: "",
                esTemporalUsuario: true,
                estaHabilitadoUsuario: true
            }
        ];

        storeGrid.insert(0, row);
        var rec = storeGrid.getAt(0);
        grid.getView().select(rec);
    },

    onBotonCancelarClick: function () {
        Ext.Msg.confirm("Usuario", "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-Usuario-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomuceUsuario");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        Ext.Msg.confirm("Usuario", "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-Usuario-Principal');
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
                        Coomuce.Util.ShowMessage({ type: "ERROR", title: "Usuario", msg: validator.msg });

                        return false;
                    }
                }

                var conf = {
                    url: Coomuce.Url.Administracion + "UsuarioCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load();
                        var tabPanel = Ext.getCmp("CoomuceUsuario");
                        tabPanel.destroy();
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-Usuario-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onBotonReenviarCredencialClick: function () {
        var grid = Ext.getCmp("Grid-Usuario-Principal");
        var record = grid.selModel.getSelection();

        if (record.length == 0) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: "Usuario", msg: "Debe selecconar un registro." });

            return false;
        }

        Ext.Msg.confirm("Usuario", "¿Esta seguro de reenviar las credenciales del usuario seleccionado?", function (btn) {
            if (btn === "yes") {
                var conf = {
                    url: Coomuce.Url.Administracion + "UsuarioReenviarCredencial",
                    data: {
                        idUsuario: record[0].data.idUsuario
                    },
                    targetMask: grid,
                    msgMask: "Reenviando credenciales de usuario...",
                    fnSuccess: function (response) {
                        grid.getStore().load();
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onSelectCombo: function (combo, rec, eOpts) {
        var record = Ext.getCmp("Grid-Usuario-Principal").selModel.getSelection();

        record[0].set(combo.campoId, rec.data[combo.campoId]);
    }

});