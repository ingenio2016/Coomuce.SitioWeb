Ext.define("CoomuceMod.model.Parametros.DemandaInducida.TipoVisitaDomiciliaria", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoVisitaDomiciliaria", type: "int" },
        { name: 'codigoTipoVisitaDomiciliaria', type: 'string' },
        { name: 'nombreTipoVisitaDomiciliaria', type: 'string' },
        {
            name: "compTipoVisitaDomiciliaria", convert: function (v, record) {
                return "(" + record.get("codigoTipoVisitaDomiciliaria") + ") " + record.get("nombreTipoVisitaDomiciliaria");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoVisitaDomiciliaria" },
        { type: "presence", allowEmpty: false, field: "nombreTipoVisitaDomiciliaria" }
    ]

});