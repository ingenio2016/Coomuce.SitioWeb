Ext.define("CoomuceMod.model.Parametros.Generales.Ips", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idIps", type: "int" },
        { name: 'codigoIps', type: 'string' },
        { name: 'razonIps', type: 'string' },
        { name: "idTipoIdentificacion", type: "int" }, 
        { name: "compTipoIdentificacion", type: "string" },
        { name: "identificacionIps", type: "string" }, 
        { name: "direccionIps", type: "string" }, 
        { name: "telefonoIps", type: "string" }, 
        { name: "idDepartamento", type: "int" },
        { name: "compDepartamento", type: "string" },
        { name: "idCiudad", type: "int" }, 
        { name: "compCiudad", type: "string" },
        { name: "representanteIps", type: "string" }, 
        { name: "nivelIps", type: "string" }, 
        { name: "contactoIps", type: "string" }, 
        { name: "emailIps", type: "string" }
    ],

    validators: [
        { type: "presence", allowEmpty: false, field: "codigoIps" },
        { type: "presence", allowEmpty: false, field: "razonIps" },
        { type: "presence", allowEmpty: false, field: "idTipoIdentificacion" },
        { type: "presence", allowEmpty: false, field: "compTipoIdentificacion" },
        { type: "presence", allowEmpty: false, field: "identificacionIps" },
        { type: "presence", allowEmpty: false, field: "direccionIps" },
        { type: "presence", allowEmpty: false, field: "idDepartamento" },
        { type: "presence", allowEmpty: false, field: "compDepartamento" },
        { type: "presence", allowEmpty: false, field: "idCiudad" },
        { type: "presence", allowEmpty: false, field: "compCiudad" }
    ]

});