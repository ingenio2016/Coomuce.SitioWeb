Ext.define("CoomuceMod.model.Parametros.ActualizacionBd.TipoCotizante", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoCotizante", type: "int" },
        { name: 'codigoTipoCotizante', type: 'string' },
        { name: 'nombreTipoCotizante', type: 'string' },
        {
            name: "compTipoCotizante", convert: function (v, record) {
                return "(" + record.get("codigoTipoCotizante") + ") " + record.get("nombreTipoCotizante");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoCotizante" },
        { type: "presence", allowEmpty: false, field: "nombreTipoCotizante" }
    ]

});