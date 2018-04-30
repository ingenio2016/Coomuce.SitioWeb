Ext.define("CoomuceMod.view.ParticipacionSocial.ListadoAsistenciaGeneralModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.participacionsocial-listadoasistenciageneral",

    stores: {
        getGruposFocales: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.Generales.GruposFocales",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetGruposFocalesAll",
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

        getEje: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ParticipacionSocial.Eje",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetEjeAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getUnidad: {
            autoLoad: false,
            model: "CoomuceMod.model.Parametros.ParticipacionSocial.Unidad",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetUnidadAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getModulo: {
            autoLoad: false,
            model: "CoomuceMod.model.Parametros.ParticipacionSocial.Modulo",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetModuloAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        //getAfiliado: {
        //    autoLoad: true,
        //    model: "CoomuceMod.model.ActualizacionBd.FuanAfiliado",
        //    proxy: {
        //        timeout: 600000,
        //        useDefaultXhrHeader: false,
        //        type: 'ajax',
        //        url: Coomuce.Url.Funciones + "GetFuanAfiliadoAll",
        //        reader: {
        //            type: 'json',
        //            rootProperty: 'data',
        //            totalProperty: "total"
        //        }
        //    }
        //},

        setListadoAsistencia: {
            fields: [
                "idListaAsistenciaGeneral", "idFuanAfiliado", "nombreCompletoAfiliado", "codigoTipoIdentificacion", "identificacionFuanAfiliado",
                "direccionFuanAfiliado", "telefonoFuanAfiliado", "areaEntidadListaAsistenciaGeneral", "firmaListaAsistenciaGeneral"
            ]
        },

        getAsistenciaGeneral: {
            autoLoad: false,
            fields: [
                "idAsistenciaGeneral", { name: "fechaAsistenciaGeneral", convert: Coomuce.Util.parseDate },
                "idDepartamento", "compDepartamento", "idCiudad", "compCiudad",
                "idGruposFocales", "idEje", "idUnidad", "idModulo", "temaAsistenciaGeneral", "formadorAsistenciaGeneral", "listaAsistencia"
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetAsistenciaGeneralAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }

});