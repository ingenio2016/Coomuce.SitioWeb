Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.CondicionesVivienda.CondicionViviendaModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-caracterizacionpoblacional-condicionesvivienda-condicionvivienda',

    stores: {
        getCondicionVivienda: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.CondicionVivienda",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetCondicionViviendaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
