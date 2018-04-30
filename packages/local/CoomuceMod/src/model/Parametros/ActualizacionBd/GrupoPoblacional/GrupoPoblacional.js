Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.GrupoPoblacional", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idGrupoPoblacional", type: "int" },
        { name: 'codigoGrupoPoblacional', type: 'string' },
        { name: 'nombreGrupoPoblacional', type: 'string' },
        {
            name: "compGrupoPoblacional", convert: function (v, record) {
                return "(" + record.get("codigoGrupoPoblacional") + ") " + record.get("nombreGrupoPoblacional");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoGrupoPoblacional" },
        { type: "presence", allowEmpty: false, field: "nombreGrupoPoblacional" }
    ]

});