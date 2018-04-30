Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.NivelEducativo", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idNivelEducativo", type: "int" },
        { name: 'codigoNivelEducativo', type: 'string' },
        { name: 'nombreNivelEducativo', type: 'string' },
        {
            name: "compNivelEducativo", convert: function (v, record) {
                return "(" + record.get("codigoNivelEducativo") + ") " + record.get("nombreNivelEducativo");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoNivelEducativo" },
        { type: "presence", allowEmpty: false, field: "nombreNivelEducativo" }
    ]

});