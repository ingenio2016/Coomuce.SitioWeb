Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.TipoAfiliacion", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoAfiliacion", type: "int" },
        { name: 'codigoTipoAfiliacion', type: 'string' },
        { name: 'nombreTipoAfiliacion', type: 'string' },
        {
            name: "compTipoAfiliacion", convert: function (v, record) {
                return "(" + record.get("codigoTipoAfiliacion") + ") " + record.get("nombreTipoAfiliacion");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoAfiliacion" },
        { type: "presence", allowEmpty: false, field: "nombreTipoAfiliacion" }
    ]

});