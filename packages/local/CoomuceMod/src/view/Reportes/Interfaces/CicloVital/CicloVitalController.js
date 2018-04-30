Ext.define('CoomuceMod.view.Reportes.Interfaces.CicloVitalController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-ciclovital',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["edadMinCicloVital", "Edad Min.", "int"],
            ["edadMaxCicloVital", "Edad Max.", "int"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
