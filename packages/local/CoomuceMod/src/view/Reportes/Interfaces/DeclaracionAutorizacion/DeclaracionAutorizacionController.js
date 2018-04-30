Ext.define('CoomuceMod.view.Reportes.Interfaces.DeclaracionAutorizacionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-declaracionautorizacion',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoDeclaracionAutorizacion", "Código", "string"],
            ["descripcionDeclaracionAutorizacion", "Descripción", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
