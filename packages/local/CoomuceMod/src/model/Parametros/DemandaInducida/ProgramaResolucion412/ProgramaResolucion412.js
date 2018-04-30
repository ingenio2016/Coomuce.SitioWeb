Ext.define("CoomuceMod.model.Parametros.DemandaInducida.ProgramaResolucion412", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idProgramaResolucion412", type: "int" },
        { name: 'codigoProgramaResolucion412', type: 'string' },
        { name: 'descripcionProgramaResolucion412', type: 'string' },
        {
            name: "compProgramaResolucion412", convert: function (v, record) {
                return "(" + record.get("codigoProgramaResolucion412") + ") " + record.get("descripcionProgramaResolucion412");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoProgramaResolucion412" },
        { type: "presence", allowEmpty: false, field: "descripcionProgramaResolucion412" }
    ]

});