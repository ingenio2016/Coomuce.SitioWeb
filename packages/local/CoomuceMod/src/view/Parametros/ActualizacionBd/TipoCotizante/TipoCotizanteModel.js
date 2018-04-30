Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.TipoCotizanteModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-tipocotizante',

    stores: {
        getTipoCotizante: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoCotizante",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoCotizanteAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
