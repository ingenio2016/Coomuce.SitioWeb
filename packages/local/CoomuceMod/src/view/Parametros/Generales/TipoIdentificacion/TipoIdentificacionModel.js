Ext.define('CoomuceMod.view.Parametros.Generales.TipoIdentificacionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-generales-tipoidentificacion',

    stores: {
        getTipoIdentificacion: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.Generales.TipoIdentificacion",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoIdentificacionAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
