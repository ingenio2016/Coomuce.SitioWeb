Ext.define("CoomuceMod.view.Administracion.ConfiguracionCuerpoCorreoModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.administracion-configuracioncuerpocorreo",

    stores: {
        getTipoConfiguracionCuerpoCorreo: {
            fields: [
                "id", "nombre"
            ],
            data: [
                [0, "Cuerpo Correo"],
                [1, "Reenvío Cuerpo Correo"]
            ]
        },

        getConfiguracionCuerpoCorreo: {
            autoLoad: false,
            fields: [
                "idConfiguracionCuerpoCorreo", "tipoConfiguracionCuerpoCorreo", "tituloConfiguracionCuerpoCorreo", "mensajeConfiguracionCuerpoCorreo"
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetConfiguracionCuerpoCorreoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});