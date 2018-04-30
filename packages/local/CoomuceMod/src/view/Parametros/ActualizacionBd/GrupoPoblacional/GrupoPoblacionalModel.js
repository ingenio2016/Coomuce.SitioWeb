Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.GrupoPoblacionalModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-grupopoblacional',

    stores: {
        getGrupoPoblacional: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.GrupoPoblacional",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetGrupoPoblacionalAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
