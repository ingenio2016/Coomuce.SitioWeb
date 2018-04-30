Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.Tenencia", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTenencia", type: "int" },
        { name: 'codigoTenencia', type: 'string' },
        { name: 'nombreTenencia', type: 'string' },
        {
            name: "compTenencia", convert: function (v, record) {
                return "(" + record.get("codigoTenencia") + ") " + record.get("nombreTenencia");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTenencia" },
        { type: "presence", allowEmpty: false, field: "nombreTenencia" }
    ]

});