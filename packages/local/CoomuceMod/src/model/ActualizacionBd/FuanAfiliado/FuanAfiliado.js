Ext.define("CoomuceMod.model.ActualizacionBd.FuanAfiliado", {
    extend: "Ext.data.Model",

    fields: [
        { name: "idFuanAfiliado", type: "int" },
        { name: "primerApellidoFuanAfiliado", type: "string" },
        { name: 'segundoApellidoFuanAfiliado', type: 'string' },
        { name: 'primerNombreFuanAfiliado', type: 'string' },
        { name: "segundoNombreFuanAfiliado", type: "string" },
        { name: "codigoTipoIdentificacion", type: "string" },
        { name: "identificacionFuanAfiliado", type: "string" },
        { name: "fechaNacimientoFuanAfiliado", type: "date", convert: Coomuce.Util.parseDate },
        { name: "edadFuanAfiliado", type: "int" },
        { name: "compDepartamento", type: "string" },
        { name: "compCiudad", type: "string" },
        { name: "puntajeSisbenFuanAfiliado", type: "string" },
        { name: "direccionFuanAfiliado", type: "string" },
        { name: "telefonoFuanAfiliado", type: "string" },
        { name: "celularFuanAfiliado", type: "string" },
        { name: "emailFuanAfiliado", type: "string" },
        { name: "nombreTipoEtnia", type: "string" },
        { name: "nombreTipoZona", type: "string" },
        { name: "nombreTipoSexo", type: "string" },
        {
            name: "compAfiliado", convert: function (v, record) {
                return record.get("identificacionFuanAfiliado") + " - " +
                    record.get("primerApellidoFuanAfiliado") + " " + 
                    record.get("segundoApellidoFuanAfiliado") + " " +
                    record.get("primerNombreFuanAfiliado") + " " +
                    record.get("segundoNombreFuanAfiliado");
            }
        },
        {
            name: "nombreCompletoAfiliado", convert: function (v, record) {
                return record.get("primerApellidoFuanAfiliado") + " " +
                    record.get("segundoApellidoFuanAfiliado") + " " +
                    record.get("primerNombreFuanAfiliado") + " " +
                    record.get("segundoNombreFuanAfiliado");
            }
        }
    ]
});