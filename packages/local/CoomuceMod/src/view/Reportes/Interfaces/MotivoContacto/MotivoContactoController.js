Ext.define('CoomuceMod.view.Reportes.Interfaces.MotivoContactoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-motivocontacto',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoMotivoContacto", "Código", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
