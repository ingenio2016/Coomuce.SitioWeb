Ext.define('CoomuceMod.view.Reportes.Interfaces.FactorRiesgoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-factorriesgo',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoFactorRiesgo", "Código Factor", "string"],
            ["nombreFactorRiesgo", "Factor", "string"],
            ["codigoSubFactorRiesgo", "Código Sub Factor", "string"],
            ["nombreSubFactorRiesgo", "Sub Factor", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
