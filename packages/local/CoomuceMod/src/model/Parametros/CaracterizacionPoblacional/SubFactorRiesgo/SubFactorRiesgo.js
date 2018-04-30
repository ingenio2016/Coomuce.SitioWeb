Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.SubFactorRiesgo", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idSubFactorRiesgo", type: "int" },
        { name: "idSubFactorRiesgo", type: "int" },
        { name: 'codigoSubFactorRiesgo', type: 'string' },
        { name: 'nombreSubFactorRiesgo', type: 'string' },
        {
            name: "compSubFactorRiesgo", convert: function (v, record) {
                return "(" + record.get("codigoSubFactorRiesgo") + ") " + record.get("nombreSubFactorRiesgo");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoSubFactorRiesgo" },
        { type: "presence", allowEmpty: false, field: "nombreSubFactorRiesgo" }
    ]

});