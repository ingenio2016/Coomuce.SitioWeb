Ext.define("CoomuceMod.model.Parametros.ParticipacionSocial.Unidad", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idEje", type: "int" },
        { name: "idUnidad", type: "int" },
        { name: "codigoUnidad", type: "string" },
        { name: 'nombreUnidad', type: 'string' },
        {
            name: "compUnidad", convert: function (v, record) {
                return "(" + record.get("codigoUnidad") + ") " + record.get("nombreUnidad");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoUnidad" },
        { type: "presence", allowEmpty: false, field: "nombreUnidad" }
    ]

});