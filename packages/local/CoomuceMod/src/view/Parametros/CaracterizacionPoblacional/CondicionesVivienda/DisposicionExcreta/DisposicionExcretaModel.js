Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.CondicionesVivienda.DisposicionExcretaModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-caracterizacionpoblacional-condicionesvivienda-disposicionexcreta',

    stores: {
        getDisposicionExcreta: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.DisposicionExcreta",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetDisposicionExcretaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
