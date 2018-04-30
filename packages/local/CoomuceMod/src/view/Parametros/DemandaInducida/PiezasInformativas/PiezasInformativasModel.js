Ext.define('CoomuceMod.view.Parametros.DemandaInducida.PiezasInformativasModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-demandainducida-piezasinformativas',

    stores: {
        getPiezasInformativas: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.PiezasInformativas",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetPiezasInformativasAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
