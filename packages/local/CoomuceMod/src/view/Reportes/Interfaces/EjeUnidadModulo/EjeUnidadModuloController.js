Ext.define('CoomuceMod.view.Reportes.Interfaces.EjeUnidadModuloController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-ejeunidadmodulo',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoEje", "Código Eje", "string"],
            ["nombreEje", "Eje", "string"],
            ["codigoUnidad", "Código Unidad", "string"],
            ["nombreUnidad", "Unidad", "string"],
            ["codigoModulo", "Código Modulo", "string"],
            ["nombreModulo", "Modulo", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
