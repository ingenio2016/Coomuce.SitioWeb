Ext.define('CoomuceMod.view.Reportes.Interfaces.ProgramasResolucion412Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-programasresolucion412',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoProgramaResolucion412", "Código", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
