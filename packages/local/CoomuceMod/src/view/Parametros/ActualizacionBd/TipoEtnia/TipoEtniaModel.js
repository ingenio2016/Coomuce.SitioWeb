Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.TipoEtniaModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-tipoetnia',

    stores: {
        getTipoEtnia: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoEtnia",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoEtniaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
