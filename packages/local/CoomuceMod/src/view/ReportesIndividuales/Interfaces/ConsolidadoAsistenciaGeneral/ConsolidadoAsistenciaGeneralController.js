Ext.define('CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoAsistenciaGeneralController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-individuales-interfaces-consolidadoasistenciageneral',

    //onToolbarBeforeRender: function (tool, eOpts) {
    //    var barra = Coomuce.Util.barraFiltroReportes([
    //        ["a.fechaAsistenciaGeneral", "Fecha", "date"]
    //    ], this, { idReporte: this.getView().idReporte });

    //    tool.add(barra.items);
    //}
    onBotonGenerarReporteClick: function () {
        var opcional = "&documento=" + Ext.getCmp("CAG-ParamDocumento").getValue();

        console.log(opcional);
        Coomuce.Util.lanzarReporte(this.getView(), {
            idReporte: this.getView().idReporte,
            optional: opcional
        });
    }

});
