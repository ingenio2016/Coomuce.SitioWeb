Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.CicloVital", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idCicloVital", type: "int" },
        { name: 'edadMinCicloVital', type: 'int' },
        { name: 'edadMaxCicloVital', type: 'int' },
        {
            name: "compFactorRiesgo", convert: function (v, record) {
                return record.get("edadMinCicloVital") + " - " + record.get("edadMaxCicloVital");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "edadMinCicloVital" },
        { type: "presence", allowEmpty: false, field: "edadMaxCicloVital" }
    ]

});