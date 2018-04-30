Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.CondicionesVivienda.TipoViviendaModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-caracterizacionpoblacional-condicionesvivienda-tipovivienda',

    stores: {
        getTipoVivienda: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.TipoVivienda",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoViviendaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
