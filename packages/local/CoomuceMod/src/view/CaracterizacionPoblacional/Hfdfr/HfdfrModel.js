Ext.define('CoomuceMod.view.CaracterizacionPoblacional.HfdfrModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.caracterizacionpoblacional-hfdfr',

    stores: {
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

        getProcedencia: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.Procedencia",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetProcedenciaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getNivelEducativo: {
            autoLoad: true,
            fields: [
                { name: "idNivelEducativo", type: "int" },
                { name: "compNivelEducativo", type: "string" },
                { name: "padreNivelEducativo", type: "bool" },
                { name: "madreNivelEducativo", type: "bool" }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetNivelEducativoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getCondicionVivienda: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.CondicionVivienda",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetCondicionViviendaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTenencia: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.Tenencia",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTenenciaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoCombustible: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.TipoCombustible",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoCombustibleAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoVivienda: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.TipoVivienda",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTipoViviendaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTratamientoAgua: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.TratamientoAgua",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetTratamientoAguaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getDisposicionExcreta: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.DisposicionExcreta",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetDisposicionExcretaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getDisposicionBasura: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.CaracterizacionPoblacional.CondicionesVivienda.DisposicionBasura",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetDisposicionBasuraAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getTipoAnimal: {
            autoLoad: true,
            fields: [
                { name: "idTipoAnimal", type: "int" },
                { name: "compTipoAnimal", type: "string" },
                { name: "activarTipoAnimal", type: "bool" },
                { name: "numeroTipoAnimal", type: "int" }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetTipoAnimalAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        //getAfiliado: {
        //    autoLoad: false,
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

        getOpciones: {
            fields: [
                "id", "nombre"
            ],
            data: [
                ["SI", "A - SI"],
                ["NO", "B - NO"],
                ["AVECES", "C - A VECES"]
            ]
        },

        setPregunta28: {
            fields: [
                "numCarnet", "nombre", "edad", "codDiscapacidad"
            ]
        },

        setPregunta31: {
            fields: [
                "numCarnet", "nombre"
            ]
        },

        setPregunta32: {
            fields: [
                "numCarnet", "nombre"
            ]
        },

        setPregunta33: {
            fields: [
                "numCarnet", "nombre"
            ]
        }

    }
});
