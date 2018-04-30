Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.TipoCombustible", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoCombustible", type: "int" },
        { name: 'codigoTipoCombustible', type: 'string' },
        { name: 'nombreTipoCombustible', type: 'string' },
        {
            name: "compTipoCombustible", convert: function (v, record) {
                return "(" + record.get("codigoTipoCombustible") + ") " + record.get("nombreTipoCombustible");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoCombustible" },
        { type: "presence", allowEmpty: false, field: "nombreTipoCombustible" }
    ]

});