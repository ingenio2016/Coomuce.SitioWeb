Ext.define('CoomuceMod.view.ReportesIndividuales.Interfaces.FichaIdentificacionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.reportes-individuales-interfaces-fichaidentificacion',
    stores: {
        getFichas: {
        	storeId: "getFichasStore",
            autoLoad: true,
            fields: [
                "IdFicha","fechaFicha"
            ],
            data: [
            	
            ]
        }
    }
});
