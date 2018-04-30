Ext.define("CoomuceMod.model.Administracion.Departamento", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idDepartamento", type: "int" },
        { name: 'codigoDepartamento', type: 'string' },
        { name: 'nombreDepartamento', type: 'string' },
        {
            name: "compDepartamento", convert: function (v, record) {
                return "(" + record.get("codigoDepartamento") + ") " + record.get("nombreDepartamento");
            }
        }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoDepartamento" },
        { type: "presence", allowEmpty: false, field: "nombreDepartamento" }
    ]

});