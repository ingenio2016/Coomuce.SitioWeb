Ext.define('CoomuceMod.view.Reportes.Interfaces.FichaIdentificacionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-fichaidentificacion',

    onBotonGenerarReporteClick: function () {
        var opcional = "&fechaInicio=" + Ext.getCmp("FDI-ParamFechaInicio").getSubmitValue() +
            "&fechaFin=" + Ext.getCmp("FDI-ParamFechaFin").getSubmitValue() +
            "&idCiudad=" + Ext.getCmp("FDI-ParamCiudad").getValue();

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
