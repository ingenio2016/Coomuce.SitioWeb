Ext.define('CoomuceMod.view.CaracterizacionPoblacional.IfppirModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.caracterizacionpoblacional-ifppir',

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

        getPreguntasFactor: {
            autoLoad: false,
            fields: [
                { name: "idPregunta", type: "int" },
                { name: "factor", type: "string" },
                { name: "subfactor", type: "string" },
                { name: "codigoPregunta", type: "string" },
                { name: "descripcionPregunta", type: "string" },
                { name: "respuestaSiPregunta", type: "bool" },
                { name: "respuestaNoPregunta", type: "bool" }
            ],
            grouper: {
                groupFn: function(item) {
                    return "<b>" + item.get("factor") + "<br />" + item.get("subfactor") + "</b>";
                }
            },
            listeners: {
                load: function (store, records, successful, operation, eOpts) {
                    Ext.each(records, function (item, index, allItems) {
                        item.data.respuestaNoPregunta = true;
                        item.commit();
                    });
                }
            },
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetPreguntasFactorPorCicloAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }

    }
});
