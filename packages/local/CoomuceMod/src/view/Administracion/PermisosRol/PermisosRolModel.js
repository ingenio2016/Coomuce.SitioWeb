Ext.define('CoomuceMod.view.Administracion.PermisosRolModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.administracion-permisosrol',

    stores: {
        getRol: {
            autoLoad: true,
            fields: [
                { name: "idRol", type: "int" },
                { name: "nombreRol", type: "string" }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetRolAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getMenu: {
            autoLoad: true,
            fields: [
                "idMenu", "nombreMenu"
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetMenuAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getPermisos: {
            autoLoad: false,
            model: "CoomuceMod.model.Administracion.PermisosRol",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetPermisoRolAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }

    }
});
