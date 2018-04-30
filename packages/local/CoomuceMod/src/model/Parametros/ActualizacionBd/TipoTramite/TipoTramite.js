Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.TipoTramite", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoTramite", type: "int" },
        { name: 'codigoTipoTramite', type: 'string' },
        { name: 'nombreTipoTramite', type: 'string' },
        {
            name: "compTipoTramite", convert: function (v, record) {
                return "(" + record.get("codigoTipoTramite") + ") " + record.get("nombreTipoTramite");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoTramite" },
        { type: "presence", allowEmpty: false, field: "nombreTipoTramite" }
    ]

});