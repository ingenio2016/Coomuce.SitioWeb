Ext.define("CoomuceMod.model.Administracion.PermisosRol", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idRol", type: "int" },
        { name: "nombreRol", type: "string" },
        { name: "idMenu", type: "int" },
        { name: "nombreMenu", type: "string" },
        { name: "habilitadoRolMenu", type: "bool" }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "nombreMenu" }
    ]

});