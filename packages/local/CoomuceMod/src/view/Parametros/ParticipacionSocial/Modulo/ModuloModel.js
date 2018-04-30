﻿Ext.define('CoomuceMod.view.Parametros.ParticipacionSocial.ModuloModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-participacionsocial-modulo',

    stores: {
        getEje: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ParticipacionSocial.Eje",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetEjeAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getUnidad: {
            autoLoad: false,
            model: "CoomuceMod.model.Parametros.ParticipacionSocial.Unidad",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetUnidadAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getModulo: {
            autoLoad: false,
            model: "CoomuceMod.model.Parametros.ParticipacionSocial.Modulo",
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
                url: Coomuce.Url.Parametros + "GetModuloAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }

    }
});
