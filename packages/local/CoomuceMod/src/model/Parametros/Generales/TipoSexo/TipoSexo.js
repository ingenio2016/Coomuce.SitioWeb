Ext.define("CoomuceMod.model.Parametros.Generales.TipoSexo", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoSexo", type: "int" },
        { name: 'codigoTipoSexo', type: 'string' },
        { name: 'nombreTipoSexo', type: 'string' },
        {
            name: "compTipoSexo", convert: function (v, record) {
                return "(" + record.get("codigoTipoSexo") + ") " + record.get("nombreTipoSexo");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoSexo" },
        { type: "presence", allowEmpty: false, field: "nombreTipoSexo" }
    ]

});