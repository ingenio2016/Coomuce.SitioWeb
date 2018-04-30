Ext.define("CoomuceMod.model.Parametros.ParticipacionSocial.Eje", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idEje", type: "int" },
        { name: "codigoEje", type: "string" },
        { name: 'nombreEje', type: 'string' },
        {
            name: "compEje", convert: function (v, record) {
                return "(" + record.get("codigoEje") + ") " + record.get("nombreEje");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoEje" },
        { type: "presence", allowEmpty: false, field: "nombreEje" }
    ]

});