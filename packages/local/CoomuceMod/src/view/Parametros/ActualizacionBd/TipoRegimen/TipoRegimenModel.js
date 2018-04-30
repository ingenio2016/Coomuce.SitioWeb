Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.TipoRegimenModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-tiporegimen',

    stores: {
        getTipoRegimen: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoRegimen",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoRegimenAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
