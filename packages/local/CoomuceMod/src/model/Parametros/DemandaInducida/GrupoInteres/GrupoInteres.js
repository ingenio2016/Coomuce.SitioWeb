Ext.define("CoomuceMod.model.Parametros.DemandaInducida.GrupoInteres", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idGrupoInteres", type: "int" },
        { name: 'codigoGrupoInteres', type: 'string' },
        { name: 'descripcionGrupoInteres', type: 'string' },
        {
            name: "compGrupoInteres", convert: function (v, record) {
                return "(" + record.get("codigoGrupoInteres") + ") " + record.get("descripcionGrupoInteres");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoGrupoInteres" },
        { type: "presence", allowEmpty: false, field: "descripcionGrupoInteres" }
    ]

});