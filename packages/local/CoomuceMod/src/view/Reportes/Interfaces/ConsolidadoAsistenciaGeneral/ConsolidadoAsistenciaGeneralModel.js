Ext.define('CoomuceMod.view.Reportes.Interfaces.ConsolidadoAsistenciaGeneralModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.reportes-interfaces-consolidadoasistenciageneral',

    stores: {
        getUsuario: {
            autoLoad: true,
            fields: [
                { name: "idUsuario", type: "int" },
                { name: "idTipoIdentificacion", type: "int" },
                { name: "nombreTipoIdentificacion", type: "string" },
                { name: "identificacionUsuario", type: "string" },
                { name: "primerApellidoUsuario", type: "string" },
                { name: "segundoApellidoUsuario", type: "string" },
                { name: "primerNombreUsuario", type: "string" },
                { name: "segundoNombreUsuario", type: "string" },
                {
                    name: "nombreCompletoGestor", convert: function (v, record) {
                        return record.get("primerApellidoUsuario") + " " +
                            record.get("segundoApellidoUsuario") + " " +
                            record.get("primerNombreUsuario") + " " +
                            record.get("segundoNombreUsuario");
                    }
                }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetUsuarioAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getCiudad: {
            autoLoad: false,
            model: "CoomuceMod.model.Administracion.Ciudad",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetCiudadAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getDepartamento: {
            autoLoad: true,
            model: "CoomuceMod.model.Administracion.Departamento",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetDepartamentoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }

});
