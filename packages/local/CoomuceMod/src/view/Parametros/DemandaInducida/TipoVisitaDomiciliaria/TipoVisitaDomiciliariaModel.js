Ext.define('CoomuceMod.view.Parametros.DemandaInducida.TipoVisitaDomiciliariaModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-demandainducida-tipovisitadomiciliaria',

    stores: {
        getTipoVisitaDomiciliaria: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.TipoVisitaDomiciliaria",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoVisitaDomiciliariaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
