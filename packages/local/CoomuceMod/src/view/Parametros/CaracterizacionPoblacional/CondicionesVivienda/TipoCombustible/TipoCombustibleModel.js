Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.CondicionesVivienda.TipoCombustibleModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-caracterizacionpoblacional-condicionesvivienda-tipocombustible',

    stores: {
        getTipoCombustible: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.TipoCombustible",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoCombustibleAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
