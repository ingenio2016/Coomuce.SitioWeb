Ext.define('CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaLiteralModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-informacionorientacion-encuestaliteral',

    stores: {
        getVista: {
            fields: [
                { name: "id", type: "string" },
                { name: "nombre", type: "string" }
            ],
            data: [
                ["CoomuceEncuestaIPS", "Encuesta de Satisfacción de usuario de la I.P.S de primer Nivel"],
                ["CoomuceEncuestaEPS", "Encuesta de Satisfacción de usuario de la EPS-S"]
            ]
        },

        getEncuestaCategoria: {
            autoLoad: false,
            model: "CoomuceMod.model.Parametros.InformacionOrientacion.EncuestaCategoria",
            listeners: {
                load: function (store, records, successful, operation, eOpts) {
                    // este proceso se realiza para obtener la ultima entidad generada y agregarla en una propiedad del store
                    var res = Ext.decode(operation._response.responseText);
                    store.identity = res.identity;
                }
            },
            identity: 0,
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetEncuestaCategoriaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getEncuestaPregunta: {
            autoLoad: false,
            model: "CoomuceMod.model.Parametros.InformacionOrientacion.EncuestaPregunta",
            listeners: {
                load: function (store, records, successful, operation, eOpts) {
                    // este proceso se realiza para obtener la ultima entidad generada y agregarla en una propiedad del store
                    var res = Ext.decode(operation._response.responseText);
                    store.identity = res.identity;
                }
            },
            identity: 0,
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetEncuestaPreguntaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getEncuestaLiteral: {
            autoLoad: false,
            model: "CoomuceMod.model.Parametros.InformacionOrientacion.EncuestaLiteral",
            listeners: {
                load: function (store, records, successful, operation, eOpts) {
                    // este proceso se realiza para obtener la ultima entidad generada y agregarla en una propiedad del store
                    var res = Ext.decode(operation._response.responseText);
                    store.identity = res.identity;
                }
            },
            identity: 0,
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetEncuestaLiteralAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }

    }
});
