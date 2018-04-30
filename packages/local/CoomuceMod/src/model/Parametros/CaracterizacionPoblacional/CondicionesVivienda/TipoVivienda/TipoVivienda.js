Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.TipoVivienda", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoVivienda", type: "int" },
        { name: 'codigoTipoVivienda', type: 'string' },
        { name: 'nombreTipoVivienda', type: 'string' },
        {
            name: "compTipoVivienda", convert: function (v, record) {
                return "(" + record.get("codigoTipoVivienda") + ") " + record.get("nombreTipoVivienda");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoVivienda" },
        { type: "presence", allowEmpty: false, field: "nombreTipoVivienda" }
    ]

});