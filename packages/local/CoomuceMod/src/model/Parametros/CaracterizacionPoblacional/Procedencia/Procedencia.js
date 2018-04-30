Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.Procedencia", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idProcedencia", type: "int" },
        { name: 'codigoProcedencia', type: 'string' },
        { name: 'nombreProcedencia', type: 'string' },
        {
            name: "compProcedencia", convert: function (v, record) {
                return "(" + record.get("codigoProcedencia") + ") " + record.get("nombreProcedencia");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoProcedencia" },
        { type: "presence", allowEmpty: false, field: "nombreProcedencia" }
    ]

});