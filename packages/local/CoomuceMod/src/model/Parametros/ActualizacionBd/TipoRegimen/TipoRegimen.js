Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.TipoRegimen", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoRegimen", type: "int" },
        { name: 'codigoTipoRegimen', type: 'string' },
        { name: 'nombreTipoRegimen', type: 'string' },
        {
            name: "compTipoRegimen", convert: function (v, record) {
                return "(" + record.get("codigoTipoRegimen") + ") " + record.get("nombreTipoRegimen");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoRegimen" },
        { type: "presence", allowEmpty: false, field: "nombreTipoRegimen" }
    ]

});