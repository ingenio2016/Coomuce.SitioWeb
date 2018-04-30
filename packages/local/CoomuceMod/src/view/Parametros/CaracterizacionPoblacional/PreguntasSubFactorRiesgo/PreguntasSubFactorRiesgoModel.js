Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.PreguntasSubFactorRiesgoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-caracterizacionpoblacional-preguntassubfactorriesgo',

    stores: {
        getFactorRiesgo: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.FactorRiesgo",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetFactorRiesgoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getSubFactorRiesgo: {
            autoLoad: false,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.SubFactorRiesgo",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetSubFactorRiesgoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getPreguntasSubFactorRiesgo: {
            autoLoad: false,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.PreguntasSubFactorRiesgo",
            listeners: {
                load: function (store, records, successful, operation, eOpts) {
                    if (operation._response != null) {
                        // este proceso se realiza para obtener la ultima entidad generada y agregarla en una propiedad del store
                        var res = Ext.decode(operation._response.responseText);
                        store.identity = res.identity;
                    }
                }
            },
            identity: 0,
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetPreguntasSubFactorRiesgoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }

    }
});
