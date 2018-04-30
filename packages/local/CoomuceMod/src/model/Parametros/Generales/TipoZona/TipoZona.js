Ext.define("CoomuceMod.model.Parametros.Generales.TipoZona", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoZona", type: "int" },
        { name: 'codigoTipoZona', type: 'string' },
        { name: 'nombreTipoZona', type: 'string' },
        {
            name: "compTipoZona", convert: function (v, record) {
                return "(" + record.get("codigoTipoZona") + ") " + record.get("nombreTipoZona");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoZona" },
        { type: "presence", allowEmpty: false, field: "nombreTipoZona" }
    ]

});