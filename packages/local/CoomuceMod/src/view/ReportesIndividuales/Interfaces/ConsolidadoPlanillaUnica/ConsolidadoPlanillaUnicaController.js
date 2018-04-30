Ext.define('CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoPlanillaUnicaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-individuales-interfaces-consolidadoplanillaunica',

    //onToolbarBeforeRender: function (tool, eOpts) {
    //    var barra = Coomuce.Util.barraFiltroReportes([
    //        ["a.fechaAtencionPurisu", "Fecha Atención", "date"]
    //    ], this, { idReporte: this.getView().idReporte });

    //    tool.add(barra.items);
    //}
    onBotonGenerarReporteClick: function () {
        var opcional = "&documento=" + Ext.getCmp("CPU-ParamDocumento").getValue();

        console.log(opcional);
        Coomuce.Util.lanzarReporte(this.getView(), {
            idReporte: this.getView().idReporte,
            optional: opcional
        });
    }

});
