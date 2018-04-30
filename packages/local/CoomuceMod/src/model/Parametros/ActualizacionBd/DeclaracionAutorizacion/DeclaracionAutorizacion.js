Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.DeclaracionAutorizacion", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idDeclaracionAutorizacion", type: "int" },
        { name: 'codigoDeclaracionAutorizacion', type: 'string' },
        { name: 'descripcionDeclaracionAutorizacion', type: 'string' },
        {
            name: "compDeclaracionAutorizacion", convert: function (v, record) {
                return record.get("codigoDeclaracionAutorizacion") + ". " + record.get("descripcionDeclaracionAutorizacion");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoDeclaracionAutorizacion" },
        { type: "presence", allowEmpty: false, field: "descripcionDeclaracionAutorizacion" }
    ]

});