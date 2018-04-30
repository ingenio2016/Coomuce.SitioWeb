Ext.define("CoomuceMod.view.DemandaInducida.PurisuModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.demandainducida-purisu",

    stores: {
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

        //getTipoIdentificacion: {
        //    autoLoad: true,
        //    model: "CoomuceMod.model.Parametros.Generales.TipoIdentificacion",
        //    proxy: {
        //        timeout: 600000,
        //        useDefaultXhrHeader: false,
        //        type: 'ajax',
        //        url: Coomuce.Url.Parametros + "GetTipoIdentificacionAll",
        //        reader: {
        //            type: 'json',
        //            rootProperty: 'data',
        //            totalProperty: "total"
        //        }
        //    }
        //},

        getTipoVisitaDomiciliaria: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.TipoVisitaDomiciliaria",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoVisitaDomiciliariaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        //getTipoSexo: {
        //    autoLoad: true,
        //    model: "CoomuceMod.model.Parametros.Generales.TipoSexo",
        //    proxy: {
        //        timeout: 600000,
        //        useDefaultXhrHeader: false,
        //        type: 'ajax',
        //        url: Coomuce.Url.Parametros + "GetTipoSexoAll",
        //        reader: {
        //            type: 'json',
        //            rootProperty: 'data',
        //            totalProperty: "total"
        //        }
        //    }
        //},

        getProgramaResolucion412: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.ProgramaResolucion412",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetProgramaResolucion412All",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getGrupoInteres: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.GrupoInteres",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetGrupoInteresAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getSeguimientoProgramasIntervencionRiesgo: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.SeguimientoProgramasIntervencionRiesgo",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetSeguimientoProgramasIntervencionRiesgoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getMotivoConsulta: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.MotivoConsulta",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetMotivoConsultaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getMotivoContacto: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.MotivoContacto",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetMotivoContactoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

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

        getPiezasInformativas: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.DemandaInducida.PiezasInformativas",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetPiezasInformativasAll",
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

        setItemsPurisu: {
            fields: [
                "idInfoPurisu", "idPurisu", "idFuanAfiliado", "codigoTipoIdentificacion",
                "identificacionFuanAfiliado", "idTipoVisitaDomiciliaria", "compTipoVisitaDomiciliaria", "usisPurisu", "ipsPrimariaPurisu",
                "telefonicaPurisu", "cauPurisu", "actividadExtramuralPurisu", "edadFuanAfiliado", "nombreTipoSexo",
                "idProgramaResolucion412", "compProgramaResolucion412", "idGrupoInteres", "compGrupoInteres", "idSeguimientoProgramasIntervencionRiesgo",
                "compSeguimientoProgramasIntervencionRiesgo", "idMotivoConsulta", "compMotivoConsulta", "idMotivoContacto", "compMotivoContacto",
                "numAutorizacionPurisu", "idGruposFocales", "compGruposFocales", "idEje", "compEje", "idUnidad", "compUnidad", "idModulo", "compModulo",
                "idEje1", "compEje1", "idUnidad1", "compUnidad1", "idModulo1", "compModulo1", "idPiezasInformativas", "compPiezasInformativas", "firmaPurisu"
            ]
        }
    }
});