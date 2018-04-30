Ext.define('CoomuceMod.view.Reportes.Interfaces.IpsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-interfaces-ips',

    onToolbarBeforeRender: function (tool, eOpts) {
        var barra = Coomuce.Util.barraFiltroReportes([
            ["codigoIps", "Código", "string"],
            ["razonIps", "Razón Social", "string"],
            ["identificacionIps", "Identificación", "string"],
            ["nombreDepartamento", "Departamento", "string"],
            ["nombreCiudad", "Ciudad", "string"]
        ], this, { idReporte: this.getView().idReporte });

        tool.add(barra.items);
    }

});
