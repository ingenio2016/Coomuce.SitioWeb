Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.TipoParentescoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-tipoparentesco',

    stores: {
        getTipoParentesco: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoParentesco",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoParentescoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
