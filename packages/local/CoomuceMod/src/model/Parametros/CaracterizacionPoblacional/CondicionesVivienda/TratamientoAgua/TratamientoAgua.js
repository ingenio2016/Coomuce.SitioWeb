Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.TratamientoAgua", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTratamientoAgua", type: "int" },
        { name: 'codigoTratamientoAgua', type: 'string' },
        { name: 'nombreTratamientoAgua', type: 'string' },
        {
            name: "compTratamientoAgua", convert: function (v, record) {
                return "(" + record.get("codigoTratamientoAgua") + ") " + record.get("nombreTratamientoAgua");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTratamientoAgua" },
        { type: "presence", allowEmpty: false, field: "nombreTratamientoAgua" }
    ]

});