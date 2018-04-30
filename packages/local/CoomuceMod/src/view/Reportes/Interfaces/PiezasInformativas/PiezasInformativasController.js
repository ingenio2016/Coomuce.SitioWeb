Ext.define('CoomuceMod.view.Reportes.Interfaces.PiezasInformativasController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-piezasinformativas',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoPiezasInformativas", "Código", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
