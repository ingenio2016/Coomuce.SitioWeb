Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.MotivoTrasladoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-motivotraslado',

    stores: {
        getMotivoTraslado: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.MotivoTraslado",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetMotivoTrasladoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
