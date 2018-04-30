Ext.define('CoomuceMod.view.Reportes.Interfaces.ReporteGestantesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-reportegestantes',

    onBotonGenerarReporteClick: function () {
        var opcional = "&fechaInicio=" + Ext.getCmp("GES-ParamFechaInicio").getSubmitValue() +
            "&fechaFin=" + Ext.getCmp("GES-ParamFechaFin").getSubmitValue() +
            "&idCiudad=" + Ext.getCmp("GES-ParamCiudad").getValue();

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
