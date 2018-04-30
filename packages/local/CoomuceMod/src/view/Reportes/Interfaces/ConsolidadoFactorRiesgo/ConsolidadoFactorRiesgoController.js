Ext.define('CoomuceMod.view.Reportes.Interfaces.ConsolidadoFactorRiesgoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-consolidadofactorriesgo',

    onBotonGenerarReporteClick: function () {
        var opcional = "&fechaInicio=" + Ext.getCmp("CFR-ParamFechaInicio").getSubmitValue() +
            "&fechaFin=" + Ext.getCmp("CFR-ParamFechaFin").getSubmitValue() +
            "&idCiudad=" + Ext.getCmp("CFR-ParamCiudad").getValue();

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
