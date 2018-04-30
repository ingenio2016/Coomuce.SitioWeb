Ext.define("CoomuceMod.model.Administracion.Usuario", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idUsuario", type: "int" },
        { name: "idTipoIdentificacion", type: "int" },
        { name: "nombreTipoIdentificacion", type: "string" },
        { name: "identificacionUsuario", type: "string" },
        { name: "primerApellidoUsuario", type: "string" },
        { name: "segundoApellidoUsuario", type: "string" },
        { name: "primerNombreUsuario", type: "string" },
        { name: "segundoNombreUsuario", type: "string" },
        { name: "emailUsuario", type: "string" },
        { name: "celularUsuario", type: "string" },
        { name: "idRol", type: "int" },
        { name: "nombreRol", type: "string" },
        { name: "esTemporalUsuario", type: "bool" },
        { name: "estaHabilitadoUsuario", type: "bool" }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "nombreTipoIdentificacion" },
        { type: "presence", allowEmpty: false, field: "identificacionUsuario" },
        { type: "presence", allowEmpty: false, field: "primerApellidoUsuario" },
        { type: "presence", allowEmpty: false, field: "primerNombreUsuario" },
        { type: "presence", allowEmpty: false, field: "emailUsuario" },
        { type: "presence", allowEmpty: false, field: "nombreRol" }
    ]

});