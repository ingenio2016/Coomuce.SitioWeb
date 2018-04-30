Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.TipoAfiliacionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-tipoafiliacion',

    stores: {
        getTipoAfiliacion: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoAfiliacion",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoAfiliacionAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
