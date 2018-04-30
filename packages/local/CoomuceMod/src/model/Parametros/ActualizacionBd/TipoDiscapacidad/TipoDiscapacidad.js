Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.TipoDiscapacidad", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoDiscapacidad", type: "int" },
        { name: 'codigoTipoDiscapacidad', type: 'string' },
        { name: 'nombreTipoDiscapacidad', type: 'string' },
        {
            name: "compTipoDiscapacidad", convert: function (v, record) {
                return "(" + record.get("codigoTipoDiscapacidad") + ") " + record.get("nombreTipoDiscapacidad");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoDiscapacidad" },
        { type: "presence", allowEmpty: false, field: "nombreTipoDiscapacidad" }
    ]

});