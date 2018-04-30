Ext.define('CoomuceMod.view.Parametros.DemandaInducida.ProgramaResolucion412Model', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-demandainducida-programaresolucion412',

    stores: {
        getProgramaResolucion412: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.ProgramaResolucion412",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetProgramaResolucion412All",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
