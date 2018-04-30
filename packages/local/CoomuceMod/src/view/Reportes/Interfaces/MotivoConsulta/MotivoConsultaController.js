Ext.define('CoomuceMod.view.Reportes.Interfaces.MotivoConsultaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-motivoconsulta',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoMotivoConsulta", "Código", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
