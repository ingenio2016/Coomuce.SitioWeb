Ext.define("CoomuceMod.model.Parametros.DemandaInducida.MotivoContacto", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idMotivoContacto", type: "int" },
        { name: 'codigoMotivoContacto', type: 'string' },
        { name: 'descripcionMotivoContacto', type: 'string' },
        {
            name: "compMotivoContacto", convert: function (v, record) {
                return "(" + record.get("codigoMotivoContacto") + ") " + record.get("descripcionMotivoContacto");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoMotivoContacto" },
        { type: "presence", allowEmpty: false, field: "descripcionMotivoContacto" }
    ]

});