Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.DeclaracionAutorizacionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-declaracionautorizacion',

    stores: {
        getDeclaracionAutorizacion: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.DeclaracionAutorizacion",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetDeclaracionAutorizacionAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
