Ext.define("CoomuceMod.view.Administracion.UsuarioModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.administracion-usuario",

    stores: {
        getTipoIdentificacion: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.Generales.TipoIdentificacion",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoIdentificacionAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

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

        getUsuario: {
            autoLoad: true,
            model: "CoomuceMod.model.Administracion.Usuario",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetUsuarioAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});