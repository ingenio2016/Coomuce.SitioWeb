Ext.define('CoomuceMod.view.ReportesIndividuales.GenerarModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.reportes-individuales-generar',

    stores: {
        getListaReportesIndividuales: {
            autoLoad: true,
            proxy: {
                type: "ajax",
                url: "../resources/ListaReportesIndividuales.json",
                reader: {
                    type: "json",
                    rootProperty: "data"
                }
            }
        }

    }
});
