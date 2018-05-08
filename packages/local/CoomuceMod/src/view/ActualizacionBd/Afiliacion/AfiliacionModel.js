Ext.define("CoomuceMod.view.ActualizacionBd.AfiliacionModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.actualizacionbd-afiliacion",

    stores: {
        getTipoTramite: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoTramite",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoTramiteAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoAfiliacion: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoAfiliacion",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoAfiliacionAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoRegimen: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoRegimen",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoRegimenAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoAfiliado: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoAfiliado",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoAfiliadoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoCotizante: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoCotizante",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoCotizanteAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoIdentificacion: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.Generales.TipoIdentificacion",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoIdentificacionAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoSexo: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.Generales.TipoSexo",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoSexoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoEtnia: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoEtnia",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoEtniaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoDiscapacidad: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoDiscapacidad",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoDiscapacidadAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getCondicionDiscapacidad: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.CondicionDiscapacidad",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetCondicionDiscapacidadAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getGrupoPoblacional: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.GrupoPoblacional",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetGrupoPoblacionalAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getArl: {
            autoLoad: true,
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetArlAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getAfp: {
            autoLoad: true,
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetAfpAll",
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
        },

        getTipoZona: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.Generales.TipoZona",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoZonaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoParentesco: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.TipoParentesco",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoParentescoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoNovedad: {
            autoLoad: true,
            fields: [
                "idFuan", "idTipoNovedad", "compTipoNovedad", "tipoValorCampoTipoNovedad", "valorCampoTipoNovedad",
                "selFuanTipoNovedad", "valorFuanTipoNovedad"
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetTipoNovedadAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getMotivoTraslado: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.ActualizacionBd.MotivoTraslado",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetMotivoTrasladoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getDeclaracionAutorizacion: {
            storeId: "declaracionAutorizacionStore",
            autoLoad: true,
            fields: [
                "idFuan", "idDeclaracionAutorizacion", "compDeclaracionAutorizacion", "valorFuanDeclaracionAutorizacion"
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetDeclaracionAutorizacionAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        setFuanBeneficiario: {
            fields: [
                "primerApellidoFuanBeneficiariosAfiliado", "segundoApellidoFuanBeneficiariosAfiliado", "primerNombreFuanBeneficiariosAfiliado",
                "segundoNombreFuanBeneficiariosAfiliado", "idTipoIdentificacion", "compTipoIdentificacion", "identificacionFuanBeneficiariosAfiliado",
                "idTipoSexo", "compTipoSexo", "fechaNacimientoFuanBeneficiariosAfiliado", "idTipoParentesco", "compTipoParentesco",
                "idTipoEtnia", "compTipoEtnia", "idTipoDiscapacidad", "compTipoDiscapacidad", "idCondicionDiscapacidad", "compCondicionDiscapacidad",
                "idDepartamento", "compDepartamento", "idCiudad", "compCiudad", "idTipoZona", "compTipoZona", "telefonoFuanBeneficiariosAfiliado",
                "upcFuanBeneficiariosAfiliado", "firmaBeneficiario"
            ]
        },

        setFuanIpsPrimaria: {
            storeId: "ipsAfiliadoStore",
            fields: [
                "tipoFuanIpsPrimariaAfiliado", "nombreCompletoIps", "nombreFuanIpsPrimariaAfiliado", "codigoFuanIpsPrimariaAfiliado"
            ]
        },
        getConfData: {
            storeId: "confDataStore",
            autoLoad: true,
            fields: [
                "idConfiguracionGeneral", "tiempoInactividadConfiguracionGeneral", "salarioConfiguracionGeneral", "emailSalienteConfiguracionGeneral",
                "pswEmailConfiguracionGeneral", "ccConfiguracionGeneral", "csConfiguracionGeneral", "hostConfiguracionGeneral",
                "portConfiguracionGeneral", "sslConfiguracionGeneral"
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetConfiguracionGeneralAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }

    }

});