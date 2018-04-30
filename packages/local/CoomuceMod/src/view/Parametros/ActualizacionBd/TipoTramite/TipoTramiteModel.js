Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.TipoTramiteModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-tipotramite',

    stores: {
        getTipoTramite: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoTramite",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoTramiteAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
