Ext.define('CoomuceMod.view.Parametros.ActualizacionBd.TipoNovedadModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-actualizacionbd-tiponovedad',

    stores: {
        getTipoNovedad: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoNovedad",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoNovedadAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoValorCampoNovedad: {
            fields: [
                "nombre"
            ],
            data: [
                ["Texto"],
                ["Lista"]
            ]
        }
    }
});
