Ext.define('CoomuceMod.view.Parametros.DemandaInducida.MotivoConsultaModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-demandainducida-motivoconsulta',

    stores: {
        getMotivoConsulta: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.MotivoConsulta",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetMotivoConsultaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
