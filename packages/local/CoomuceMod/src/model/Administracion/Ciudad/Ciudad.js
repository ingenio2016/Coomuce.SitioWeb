Ext.define("CoomuceMod.model.Administracion.Ciudad", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idDepartamento", type: "int" },
        { name: "idCiudad", type: "int" },
        { name: 'codigoCiudad', type: 'string' },
        { name: 'nombreCiudad', type: 'string' },
        {
            name: "compCiudad", convert: function (v, record) {
                return "(" + record.get("codigoCiudad") + ") " + record.get("nombreCiudad");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoCiudad" },
        { type: "presence", allowEmpty: false, field: "nombreCiudad" }
    ]

});