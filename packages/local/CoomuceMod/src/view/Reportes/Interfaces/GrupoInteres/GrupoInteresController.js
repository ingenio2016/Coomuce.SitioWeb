Ext.define('CoomuceMod.view.Reportes.Interfaces.GrupoInteresController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-grupointeres',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoGrupoInteres", "Código", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
