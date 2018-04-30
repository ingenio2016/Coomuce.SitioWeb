Ext.define('Coomuce.view.menu.MenuModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-menu',

    stores: {
        menuItems: {
            type: "tree",
            autoLoad: true,
            listeners: {
                beforeload: function (store, operation, eOpts) {
                    store.proxy.setUrl(Coomuce.Url.Seguridad + "GetMenu?idRol=" + Coomuce.Util.DatosUsuario.idRol);
                }
            },
            params: {
                idRol: Coomuce.Util.DatosUsuario.idRol
            },
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: "ajax",
                reader: {
                    type: "json",
                    rootProperty: "children"
                }
            }
        }
    },
    rootVisible: true

});