Ext.define("CoomuceMod.model.Parametros.InformacionOrientacion.EncuestaPregunta", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idEncuestaPregunta", type: "int" },
        { name: "idEncuestaCategoria", type: "int" },
        { name: "codigoEncuestaPregunta", type: "string" },
        { name: 'textoEncuestaPregunta', type: 'string' },
        { name: 'tipoPreEncuestaPregunta', type: 'int' },
        { name: "valorEncuestaPregunta", type: "int" },
        {
            name: "compEncuestaPregunta", convert: function (v, record) {
                return "(" + record.get("codigoEncuestaPregunta") + ") " + record.get("textoEncuestaPregunta");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoEncuestaPregunta" },
        { type: "presence", allowEmpty: false, field: "textoEncuestaPregunta" }
    ]

});