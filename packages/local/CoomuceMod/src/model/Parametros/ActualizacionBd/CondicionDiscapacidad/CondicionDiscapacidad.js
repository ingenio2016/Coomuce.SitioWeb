Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.CondicionDiscapacidad", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idCondicionDiscapacidad", type: "int" },
        { name: 'codigoCondicionDiscapacidad', type: 'string' },
        { name: 'nombreCondicionDiscapacidad', type: 'string' },
        {
            name: "compCondicionDiscapacidad", convert: function (v, record) {
                return "(" + record.get("codigoCondicionDiscapacidad") + ") " + record.get("nombreCondicionDiscapacidad");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoCondicionDiscapacidad" },
        { type: "presence", allowEmpty: false, field: "nombreCondicionDiscapacidad" }
    ]

});