Ext.define("CoomuceMod.model.Parametros.DemandaInducida.MotivoConsulta", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idMotivoConsulta", type: "int" },
        { name: 'codigoMotivoConsulta', type: 'string' },
        { name: 'descripcionMotivoConsulta', type: 'string' },
        {
            name: "compMotivoConsulta", convert: function (v, record) {
                return "(" + record.get("codigoMotivoConsulta") + ") " + record.get("descripcionMotivoConsulta");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoMotivoConsulta" },
        { type: "presence", allowEmpty: false, field: "descripcionMotivoConsulta" }
    ]

});