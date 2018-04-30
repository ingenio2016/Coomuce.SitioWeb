Ext.define('CoomuceMod.view.Reportes.Interfaces.SeguimientoProgramasIntervencionRiesgoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-seguimientoprogramasintervencionriesgo',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoSeguimientoProgramasIntervencionRiesgo", "Código", "string"],
            ["nombreSeguimientoProgramasIntervencionRiesgo", "Nombre", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
