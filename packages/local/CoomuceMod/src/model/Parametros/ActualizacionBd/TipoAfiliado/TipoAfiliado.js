Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.TipoAfiliado", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoAfiliado", type: "int" },
        { name: 'codigoTipoAfiliado', type: 'string' },
        { name: 'nombreTipoAfiliado', type: 'string' },
        {
            name: "compTipoAfiliado", convert: function (v, record) {
                return "(" + record.get("codigoTipoAfiliado") + ") " + record.get("nombreTipoAfiliado");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoAfiliado" },
        { type: "presence", allowEmpty: false, field: "nombreTipoAfiliado" }
    ]

});