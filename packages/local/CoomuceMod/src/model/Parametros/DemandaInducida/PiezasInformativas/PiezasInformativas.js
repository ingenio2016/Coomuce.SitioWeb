Ext.define("CoomuceMod.model.Parametros.DemandaInducida.PiezasInformativas", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idPiezasInformativas", type: "int" },
        { name: 'codigoPiezasInformativas', type: 'string' },
        { name: 'descripcionPiezasInformativas', type: 'string' },
        {
            name: "compPiezasInformativas", convert: function (v, record) {
                return "(" + record.get("codigoPiezasInformativas") + ") " + record.get("descripcionPiezasInformativas");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoPiezasInformativas" },
        { type: "presence", allowEmpty: false, field: "descripcionPiezasInformativas" }
    ]

});