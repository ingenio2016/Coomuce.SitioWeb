Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.CondicionVivienda", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idCondicionVivienda", type: "int" },
        { name: 'nombreCondicionVivienda', type: 'string' }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "idCondicionVivienda" },
        { type: "presence", allowEmpty: false, field: "nombreCondicionVivienda" }
    ]

});