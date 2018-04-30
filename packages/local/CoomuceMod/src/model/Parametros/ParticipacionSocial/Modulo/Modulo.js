Ext.define("CoomuceMod.model.Parametros.ParticipacionSocial.Modulo", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idUnidad", type: "int" },
        { name: "idModulo", type: "int" },
        { name: "codigoModulo", type: "string" },
        { name: 'nombreModulo', type: 'string' },
        {
            name: "compModulo", convert: function (v, record) {
                return "(" + record.get("codigoModulo") + ") " + record.get("nombreModulo");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoModulo" },
        { type: "presence", allowEmpty: false, field: "nombreModulo" }
    ]

});