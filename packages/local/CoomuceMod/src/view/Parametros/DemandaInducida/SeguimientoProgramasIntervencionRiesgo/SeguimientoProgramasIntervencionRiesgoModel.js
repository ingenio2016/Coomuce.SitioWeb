Ext.define('CoomuceMod.view.Parametros.DemandaInducida.SeguimientoProgramasIntervencionRiesgoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-demandainducida-seguimientoprogramasintervencionriesgo',

    stores: {
        getSeguimientoProgramasIntervencionRiesgo: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.SeguimientoProgramasIntervencionRiesgo",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetSeguimientoProgramasIntervencionRiesgoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
