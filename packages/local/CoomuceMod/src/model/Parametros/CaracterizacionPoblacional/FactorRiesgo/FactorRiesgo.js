Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.FactorRiesgo", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idFactorRiesgo", type: "int" },
        { name: 'codigoFactorRiesgo', type: 'string' },
        { name: 'nombreFactorRiesgo', type: 'string' },
        {
            name: "compFactorRiesgo", convert: function (v, record) {
                return "(" + record.get("codigoFactorRiesgo") + ") " + record.get("nombreFactorRiesgo");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoFactorRiesgo" },
        { type: "presence", allowEmpty: false, field: "nombreFactorRiesgo" }
    ]

});