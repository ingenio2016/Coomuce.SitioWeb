Ext.define('CoomuceMod.view.Parametros.DemandaInducida.GrupoInteresModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-demandainducida-grupointeres',

    stores: {
        getGrupoInteres: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.GrupoInteres",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetGrupoInteresAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
