Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.CondicionDiscapacidadModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-condiciondiscapacidad',

    stores: {
        getCondicionDiscapacidad: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.CondicionDiscapacidad",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetCondicionDiscapacidadAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
