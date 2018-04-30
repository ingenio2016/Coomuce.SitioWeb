Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.PreguntasSubFactorRiesgo", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idPreguntasSubFactorRiesgo", type: "int" },
        { name: "idSubFactorRiesgo", type: "int" },
        { name: 'codigoPreguntasSubFactorRiesgo', type: 'string' },
        { name: 'descripcionPreguntasSubFactorRiesgo', type: 'string' },
        {
            name: "compPreguntasSubFactorRiesgo", convert: function (v, record) {
                return "(" + record.get("codigoPreguntasSubFactorRiesgo") + ") " + record.get("descripcionPreguntasSubFactorRiesgo");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoPreguntasSubFactorRiesgo" },
        { type: "presence", allowEmpty: false, field: "nombrePreguntasSubFactorRiesgo" }
    ]

});