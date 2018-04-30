Ext.define("CoomuceMod.model.Parametros.InformacionOrientacion.EncuestaCategoria", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idEncuestaCategoria", type: "int" },
        { name: "idDomVista", type: "string" },
        { name: "codigoEncuestaCategoria", type: "string" },
        { name: 'nombreEncuestaCategoria', type: 'string' },
        { name: 'ordenEncuestaCategoria', type: 'int' },
        {
            name: "compEncuestaCategoria", convert: function (v, record) {
                return "(" + record.get("codigoEncuestaCategoria") + ") " + record.get("nombreEncuestaCategoria");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoEncuestaCategoria" },
        { type: "presence", allowEmpty: false, field: "nombreEncuestaCategoria" }
    ]

});