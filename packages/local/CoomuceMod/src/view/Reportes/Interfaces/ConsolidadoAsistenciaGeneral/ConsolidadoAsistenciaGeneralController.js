Ext.define('CoomuceMod.view.Reportes.Interfaces.ConsolidadoAsistenciaGeneralController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-consolidadoasistenciageneral',

    //onToolbarBeforeRender: function (tool, eOpts) {
    //    var barra = Coomuce.Util.barraFiltroReportes([
    //        ["a.fechaAsistenciaGeneral", "Fecha", "date"]
    //    ], this, { idReporte: this.getView().idReporte });

    //    tool.add(barra.items);
    //}
    onBotonGenerarReporteClick: function () {
        var opcional = "&fechaInicio=" + Ext.getCmp("CAG-ParamFechaInicio").getSubmitValue() +
            "&fechaFin=" + Ext.getCmp("CAG-ParamFechaFin").getSubmitValue() +
            "&idCiudad=" + Ext.getCmp("CAG-ParamCiudad").getValue();

        console.log(opcional);
        Coomuce.Util.lanzarReporte(this.getView(), {
            idReporte: this.getView().idReporte,
            optional: opcional
        });
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;

        if (combo.ubicacion !== undefined) {
            var idCiudad = Ext.getCmp(combo.ciudadReference);
            console.log(idCiudad);
            idCiudad.getStore().load({ params: { idDepartamento: record.get("idDepartamento") } });
        }
    }

});
