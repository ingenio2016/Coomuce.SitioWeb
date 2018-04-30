Ext.define('CoomuceMod.view.Parametros.Generales.GruposFocalesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-generales-gruposfocales',

    stores: {
        getGruposFocales: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.Generales.GruposFocales",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetGruposFocalesAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
