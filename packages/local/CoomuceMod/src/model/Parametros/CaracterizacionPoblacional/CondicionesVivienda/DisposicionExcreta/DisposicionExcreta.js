Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.DisposicionExcreta", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idDisposicionExcreta", type: "int" },
        { name: 'codigoDisposicionExcreta', type: 'string' },
        { name: 'nombreDisposicionExcreta', type: 'string' },
        {
            name: "compDisposicionExcreta", convert: function (v, record) {
                return "(" + record.get("codigoDisposicionExcreta") + ") " + record.get("nombreDisposicionExcreta");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoDisposicionExcreta" },
        { type: "presence", allowEmpty: false, field: "nombreDisposicionExcreta" }
    ]

});