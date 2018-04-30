Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.CondicionesSocioambientales.TipoAnimalModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-caracterizacionpoblacional-condicionessocioambientales-tipoanimal',

    stores: {
        getTipoAnimal: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesSocioambientales.TipoAnimal",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoAnimalAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
