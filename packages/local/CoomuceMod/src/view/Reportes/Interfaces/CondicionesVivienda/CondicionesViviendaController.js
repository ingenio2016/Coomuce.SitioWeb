Ext.define('CoomuceMod.view.Reportes.Interfaces.CondicionesViviendaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-condicionesvivienda',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["nombreCondicionVivienda", "Nombre", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
