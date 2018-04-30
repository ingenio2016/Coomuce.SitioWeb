Ext.define('CoomuceMod.view.Reportes.Interfaces.GestionFormatosController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-gestionformatos',

    onBotonGenerarReporteClick: function () {
        var opcional = "&nombreTabla=" + Ext.getCmp("ParamFormatos").getValue() +
            "&fechaInicio=" + Ext.getCmp("ParamFechaInicio").getSubmitValue() +
            "&fechaFin=" + Ext.getCmp("ParamFechaFin").getSubmitValue() +
            "&idUsuario=" + Ext.getCmp("ParamGestores").getValue();

        Coomuce.Util.lanzarReporte(this.getView(), {
            idReporte: this.getView().idReporte,
            optional: opcional
        });
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;

        if (combo.ubicacion !== undefined) {
            var idCiudad = Ext.getCmp(combo.ciudadReference);
            idCiudad.getStore().load({ params: { idDepartamento: record.get("idDepartamento") } });
        }
    }

});
