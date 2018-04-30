Ext.define("CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.DisposicionBasura", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idDisposicionBasura", type: "int" },
        { name: 'codigoDisposicionBasura', type: 'string' },
        { name: 'nombreDisposicionBasura', type: 'string' },
        {
            name: "compDisposicionBasura", convert: function (v, record) {
                return "(" + record.get("codigoDisposicionBasura") + ") " + record.get("nombreDisposicionBasura");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoDisposicionBasura" },
        { type: "presence", allowEmpty: false, field: "nombreDisposicionBasura" }
    ]

});