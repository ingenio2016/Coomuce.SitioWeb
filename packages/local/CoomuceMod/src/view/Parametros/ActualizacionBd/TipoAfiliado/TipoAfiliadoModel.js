Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.TipoAfiliadoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-tipoafiliado',

    stores: {
        getTipoAfiliado: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoAfiliado",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoAfiliadoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
