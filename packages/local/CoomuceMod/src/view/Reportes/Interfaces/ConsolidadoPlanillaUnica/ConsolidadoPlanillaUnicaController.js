Ext.define('CoomuceMod.view.Reportes.Interfaces.ConsolidadoPlanillaUnicaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-consolidadoplanillaunica',

    //onToolbarBeforeRender: function (tool, eOpts) {
    //    var barra = Coomuce.Util.barraFiltroReportes([
    //        ["a.fechaAtencionPurisu", "Fecha Atención", "date"]
    //    ], this, { idReporte: this.getView().idReporte });

    //    tool.add(barra.items);
    //}
    onBotonGenerarReporteClick: function () {
        var opcional = "&fechaInicio=" + Ext.getCmp("CPU-ParamFechaInicio").getSubmitValue() +
            "&fechaFin=" + Ext.getCmp("CPU-ParamFechaFin").getSubmitValue() +
            "&idCiudad=" + Ext.getCmp("CPU-ParamCiudad").getValue();

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
