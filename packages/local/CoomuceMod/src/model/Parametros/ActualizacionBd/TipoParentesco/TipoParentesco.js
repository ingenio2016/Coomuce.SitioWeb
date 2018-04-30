Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.TipoParentesco", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoParentesco", type: "int" },
        { name: 'codigoTipoParentesco', type: 'string' },
        { name: 'nombreTipoParentesco', type: 'string' },
        { name: "descripcionTipoParentesco", type: "string" },
        {
            name: "compTipoParentesco", convert: function (v, record) {
                return "(" + record.get("codigoTipoParentesco") + ") " + record.get("nombreTipoParentesco");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoParentesco" },
        { type: "presence", allowEmpty: false, field: "nombreTipoParentesco" }
    ]

});