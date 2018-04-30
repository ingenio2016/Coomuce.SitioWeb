Ext.define("CoomuceMod.model.Parametros.InformacionOrientacion.EncuestaLiteral", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idEncuestaLiteral", type: "int" },
        { name: "idEncuestaPregunta", type: "int" },
        { name: "liteEncuestaLiteral", type: "string" },
        { name: 'textoEncuestaLiteral', type: 'string' },
        { name: "valorEncuestaLiteral", type: "int" },
        { name: "checkedEncuestaLiteral", type: "bool" },
        {
            name: "compEncuestaLiteral", convert: function (v, record) {
                return "(" + record.get("liteEncuestaLiteral") + ") " + record.get("textoEncuestaLiteral");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "liteEncuestaLiteral" },
        { type: "presence", allowEmpty: false, field: "textoEncuestaLiteral" },
        { type: "presence", allowEmpty: false, field: "valorEncuestaLiteral" }
    ]

});