Ext.define('CoomuceMod.view.Parametros.DemandaInducida.MotivoContactoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-demandainducida-motivocontacto',

    stores: {
        getMotivoContacto: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.MotivoContacto",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetMotivoContactoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
