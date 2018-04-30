Ext.define('CoomuceMod.view.Reportes.GenerarModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.reportes-generar',

    stores: {
        getListaReportes: {
            autoLoad: true,
            proxy: {
                type: "ajax",
                url: "../resources/ListaReportes.json",
                reader: {
                    type: "json",
                    rootProperty: "data"
                }
            }
        }

    }
});
