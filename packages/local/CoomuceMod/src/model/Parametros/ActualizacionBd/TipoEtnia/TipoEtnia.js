Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.TipoEtnia", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoEtnia", type: "int" },
        { name: 'codigoTipoEtnia', type: 'string' },
        { name: 'nombreTipoEtnia', type: 'string' },
        {
            name: "compTipoEtnia", convert: function (v, record) {
                return "(" + record.get("codigoTipoEtnia") + ") " + record.get("nombreTipoEtnia");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoEtnia" },
        { type: "presence", allowEmpty: false, field: "nombreTipoEtnia" }
    ]

});