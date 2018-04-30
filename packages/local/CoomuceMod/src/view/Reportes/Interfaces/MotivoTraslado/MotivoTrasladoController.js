Ext.define('CoomuceMod.view.Reportes.Interfaces.MotivoTrasladoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-motivotraslado',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoMotivoTraslado", "Código", "string"],
            ["descripcionMotivoTraslado", "Descripción", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
