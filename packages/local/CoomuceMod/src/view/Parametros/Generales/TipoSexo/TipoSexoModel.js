Ext.define('CoomuceMod.view.Parametros.Generales.TipoSexoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-generales-tiposexo',

    stores: {
        getTipoSexo: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.Generales.TipoSexo",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoSexoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
