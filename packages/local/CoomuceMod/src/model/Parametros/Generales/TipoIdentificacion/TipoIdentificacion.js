Ext.define("CoomuceMod.model.Parametros.Generales.TipoIdentificacion", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoIdentificacion", type: "int" },
        { name: 'codigoTipoIdentificacion', type: 'string' },
        { name: 'nombreTipoIdentificacion', type: 'string' },
        {
            name: "compTipoIdentificacion", convert: function (v, record) {
                return "(" + record.get("codigoTipoIdentificacion") + ") " + record.get("nombreTipoIdentificacion");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoIdentificacion" },
        { type: "presence", allowEmpty: false, field: "nombreTipoIdentificacion" }
    ]

});