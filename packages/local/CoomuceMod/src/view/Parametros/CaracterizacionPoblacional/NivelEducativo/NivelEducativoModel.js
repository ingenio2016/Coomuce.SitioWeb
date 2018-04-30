Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.NivelEducativoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-caracterizacionpoblacional-niveleducativo',

    stores: {
        getNivelEducativo: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.NivelEducativo",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetNivelEducativoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
