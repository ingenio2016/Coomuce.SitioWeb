Ext.define('CoomuceMod.view.Parametros.ParticipacionSocial.EjeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-participacionsocial-eje',

    stores: {
        getEje: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ParticipacionSocial.Eje",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetEjeAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }

    }
});
