Ext.define("CoomuceMod.model.Parametros.DemandaInducida.SeguimientoProgramasIntervencionRiesgo", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idSeguimientoProgramasIntervencionRiesgo", type: "int" },
        { name: 'codigoSeguimientoProgramasIntervencionRiesgo', type: 'string' },
        { name: 'nombreSeguimientoProgramasIntervencionRiesgo', type: 'string' },
        {
            name: "compSeguimientoProgramasIntervencionRiesgo", convert: function (v, record) {
                return "(" + record.get("codigoSeguimientoProgramasIntervencionRiesgo") + ") " + record.get("nombreSeguimientoProgramasIntervencionRiesgo");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoSeguimientoProgramasIntervencionRiesgo" },
        { type: "presence", allowEmpty: false, field: "nombreSeguimientoProgramasIntervencionRiesgo" }
    ]

});