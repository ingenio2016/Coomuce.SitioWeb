Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.TipoNovedad", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoNovedad", type: "int" },
        { name: 'codigoTipoNovedad', type: 'string' },
        { name: 'nombreTipoNovedad', type: 'string' },
        { name: "tipoValorCampoTipoNovedad", type: "string" },
        { name: "valorCampoTipoNovedad", type: "string" },
        {
            name: "compTipoNovedad", convert: function (v, record) {
                return record.get("codigoTipoNovedad") + ". " + record.get("nombreTipoNovedad");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoNovedad" },
        { type: "presence", allowEmpty: false, field: "nombreTipoNovedad" }
    ]

});