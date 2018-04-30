Ext.define('CoomuceMod.view.Reportes.Interfaces.CondicionDiscapacidadController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-condiciondiscapacidad',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoCondicionDiscapacidad", "Código", "string"],
            ["nombreCondicionDiscapacidad", "Nombre", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
