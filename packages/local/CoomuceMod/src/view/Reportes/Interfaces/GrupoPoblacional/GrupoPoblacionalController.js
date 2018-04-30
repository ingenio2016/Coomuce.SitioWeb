Ext.define('CoomuceMod.view.Reportes.Interfaces.GrupoPoblacionalController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-grupopoblacional',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoGrupoPoblacional", "Código", "string"],
            ["nombreGrupoPoblacional", "Nombre", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
