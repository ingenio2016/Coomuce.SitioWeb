Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.MotivoTraslado", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idMotivoTraslado", type: "int" },
        { name: 'codigoMotivoTraslado', type: 'string' },
        { name: 'descripcionMotivoTraslado', type: 'string' },
        {
            name: "compMotivoTraslado", convert: function (v, record) {
                return "(" + record.get("codigoMotivoTraslado") + ") " + record.get("descripcionMotivoTraslado");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoMotivoTraslado" },
        { type: "presence", allowEmpty: false, field: "descripcionMotivoTraslado" }
    ]

});