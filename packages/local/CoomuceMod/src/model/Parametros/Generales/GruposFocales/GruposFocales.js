Ext.define("CoomuceMod.model.Parametros.Generales.GruposFocales", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idGruposFocales", type: "int" },
        { name: 'codigoGruposFocales', type: 'string' },
        { name: 'nombreGruposFocales', type: 'string' },
        {
            name: "compGruposFocales", convert: function (v, record) {
                return "(" + record.get("codigoGruposFocales") + ") " + record.get("nombreGruposFocales");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoGruposFocales" },
        { type: "presence", allowEmpty: false, field: "nombreGruposFocales" }
    ]

});