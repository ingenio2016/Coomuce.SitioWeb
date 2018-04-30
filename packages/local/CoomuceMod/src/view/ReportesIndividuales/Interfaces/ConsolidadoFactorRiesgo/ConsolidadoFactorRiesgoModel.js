Ext.define('CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoFactorRiesgoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.reportes-individuales-interfaces-consolidadofactorriesgo',
    stores: {
        getHistorias: {
        	storeId: "getHistoriasStore",
            autoLoad: true,
            fields: [
                "IdHistoria","fechaHistoria"
            ],
            data: [
            	
            ]
        }
    }
});
