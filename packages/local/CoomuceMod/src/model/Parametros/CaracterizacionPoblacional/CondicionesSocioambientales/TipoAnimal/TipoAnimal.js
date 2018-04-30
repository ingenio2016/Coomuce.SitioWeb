Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesSocioambientales.TipoAnimal", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idTipoAnimal", type: "int" },
        { name: 'codigoTipoAnimal', type: 'string' },
        { name: 'nombreTipoAnimal', type: 'string' },
        {
            name: "compTipoAnimal", convert: function (v, record) {
                return "(" + record.get("codigoTipoAnimal") + ") " + record.get("nombreTipoAnimal");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoTipoAnimal" },
        { type: "presence", allowEmpty: false, field: "nombreTipoAnimal" }
    ]

});