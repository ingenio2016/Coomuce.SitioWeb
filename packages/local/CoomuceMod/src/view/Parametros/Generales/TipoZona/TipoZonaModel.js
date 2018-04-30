Ext.define('CoomuceMod.view.Parametros.Generales.TipoZonaModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-generales-tipozona',

    stores: {
        getTipoZona: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.Generales.TipoZona",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoZonaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
