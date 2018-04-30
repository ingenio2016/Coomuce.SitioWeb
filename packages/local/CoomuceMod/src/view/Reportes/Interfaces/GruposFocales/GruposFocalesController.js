Ext.define('CoomuceMod.view.Reportes.Interfaces.GruposFocalesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-gruposfocales',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoGruposFocales", "Código", "string"],
            ["nombreGruposFocales", "Nombre", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
