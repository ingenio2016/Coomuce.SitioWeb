Ext.define("CoomuceMod.view.Administracion.ConfiguracionGeneralModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.administracion-configuraciongeneral",

    stores: {
        getConfiguracionGeneral: {
            storeId: "configuracionGeneralStore",
            autoLoad: false,
            fields: [
                "idConfiguracionGeneral", "tiempoInactividadConfiguracionGeneral", "salarioConfiguracionGeneral", "emailSalienteConfiguracionGeneral",
                "pswEmailConfiguracionGeneral", "ccConfiguracionGeneral", "csConfiguracionGeneral", "hostConfiguracionGeneral",
                "portConfiguracionGeneral", "sslConfiguracionGeneral"
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetConfiguracionGeneralAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});