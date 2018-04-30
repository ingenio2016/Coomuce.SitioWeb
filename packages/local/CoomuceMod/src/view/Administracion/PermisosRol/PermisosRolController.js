Ext.define('CoomuceMod.view.Administracion.PermisosRolController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.administracion-permisosrol',

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonAdicionarClick: function () {
        var me = this;

        var rol = me.lookupReference("rol");

        if (Ext.isEmpty(departamento.getValue())) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: me.getTitleView(), msg: "Debe seleccionar un rol." });

            return false;
        }

        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-PermisosRol-Principal').getStore();

        var row = [
            {
                idRol: rol.getValue(),
                idMenu: 0,
                nombreMenu: ""
            }
        ];

        storeGrid.insert(0, row);
    },

    onBotonCancelarClick: function () {
        Ext.Msg.confirm(this.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-PermisosRol-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomucePermisosRol");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();
        var rol = me.lookupReference("rol");

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-PermisosRol-Principal');
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
                    url: Coomuce.Url.Administracion + "PermisosRolCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load({
                            params: {
                                idRol: rol.getValue()
                            }
                        });
                        var tabPanel = Ext.getCmp("CoomucePermisosRol");
                        tabPanel.destroy();
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-PermisosRol-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onSelectRol: function (combo, record, eOpts) {
        var grid = Ext.getCmp("Grid-PermisosRol-Principal");

        //grid.getStore().proxy.setUrl(Coomuce.Url.Administracion + "GetCiudadAll?idDepartamento=" + record.data.idDepartamento);
        grid.getStore().load({
            params: {
                idRol: record.get("idRol")
            }
        });
    },

    onSelectCombo: function (combo, rec, eOpts) {
        var record = Ext.getCmp("Grid-PermisosRol-Principal").selModel.getSelection();

        record[0].set(combo.campoId, rec.get(combo.campoId));
    }

});
