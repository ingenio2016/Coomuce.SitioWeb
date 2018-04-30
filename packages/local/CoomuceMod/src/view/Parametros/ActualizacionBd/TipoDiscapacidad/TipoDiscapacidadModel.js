Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.TipoDiscapacidadModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-tipodiscapacidad',

    stores: {
        getTipoDiscapacidad: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoDiscapacidad",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoDiscapacidadAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
