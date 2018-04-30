Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.CicloVitalGestanteModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-caracterizacionpoblacional-ciclovitalgestante',

    stores: {
        getCicloVitalGestante: {
            autoLoad: true,
            fields: [
                { name: "idCicloVitalGestante", type: "int" },
                { name: "compFactorRiesgo", type: "string" },
                { name: "compSubFactorRiesgo", type: "string" },
                { name: "idPreguntasSubFactorRiesgo", type: "int" },
                { name: "compPreguntasSubFactorRiesgo", type: "string" }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetPreguntasCicloVitalGestanteAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getFactorRiesgo: {
            autoLoad: true,
            fields: [
                { name: "idFactorRiesgo", type: "int" },
                { name: 'codigoFactorRiesgo', type: 'string' },
                { name: 'nombreFactorRiesgo', type: 'string' },
                {
                    name: "compFactorRiesgo", convert: function (v, record) {
                        return "(" + record.get("codigoFactorRiesgo") + ") " + record.get("nombreFactorRiesgo");
                    }
                }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetFactorRiesgoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getSubFactorRiesgo: {
            autoLoad: false,
            fields: [
                { name: "idSubFactorRiesgo", type: "int" },
                { name: "idSubFactorRiesgo", type: "int" },
                { name: 'codigoSubFactorRiesgo', type: 'string' },
                { name: 'nombreSubFactorRiesgo', type: 'string' },
                {
                    name: "compSubFactorRiesgo", convert: function (v, record) {
                        return "(" + record.get("codigoSubFactorRiesgo") + ") " + record.get("nombreSubFactorRiesgo");
                    }
                }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetSubFactorRiesgoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getPreguntasSubFactorRiesgo: {
            autoLoad: false,
            fields: [
                { name: "idPreguntasSubFactorRiesgo", type: "int" },
                { name: "idSubFactorRiesgo", type: "int" },
                { name: 'codigoPreguntasSubFactorRiesgo', type: 'string' },
                { name: 'descripcionPreguntasSubFactorRiesgo', type: 'string' },
                {
                    name: "compPreguntasSubFactorRiesgo", convert: function (v, record) {
                        return "(" + record.get("codigoPreguntasSubFactorRiesgo") + ") " + record.get("descripcionPreguntasSubFactorRiesgo");
                    }
                }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetPreguntasSubFactorRiesgoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getPreguntasCicloVital: {
            autoLoad: false,
            fields: [
                { name: "idCicloVital", type: "int" },
                { name: 'compCicloVital', type: 'string' },
                { name: "idTipoSexo", type: "int" },
                { name: 'compTipoSexo', type: 'string' },
                { name: "idPreguntasSubFactorRiesgo", type: "int" },
                { name: 'compPreguntasSubFactorRiesgo', type: 'string' }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetPreguntasCicloVitalAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }

    }
});
