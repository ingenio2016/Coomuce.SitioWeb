Ext.define('CoomuceMod.view.Administracion.CiudadModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.administracion-ciudad',

    stores: {
        getDepartamento: {
            autoLoad: true,
            model: "CoomuceMod.model.Administracion.Departamento",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetDepartamentoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getCiudad: {
            autoLoad: false,
            model: "CoomuceMod.model.Administracion.Ciudad",
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
                url: Coomuce.Url.Administracion + "GetCiudadAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }

    }
});
