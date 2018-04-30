Ext.define('CoomuceMod.view.Parametros.CaracterizacionPoblacional.PreguntasCicloVitalModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.parametros-caracterizacionpoblacional-preguntasciclovital',

    stores: {
        getTipoSexo: {
            autoLoad: true,
            fields: [
                { name: "idTipoSexo", type: "int" },
                { name: 'codigoTipoSexo', type: 'string' },
                { name: 'nombreTipoSexo', type: 'string' },
                {
                    name: "compTipoSexo", convert: function (v, record) {
                        return "(" + record.get("codigoTipoSexo") + ") " + record.get("nombreTipoSexo");
                    }
                }
            ],
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

        getCicloVital: {
            autoLoad: true,
            fields: [
                { name: "idCicloVital", type: "int" },
                { name: 'edadMinCicloVital', type: 'int' },
                { name: 'edadMaxCicloVital', type: 'int' },
                {
                    name: "compCicloVital", convert: function (v, record) {
                        return record.get("edadMinCicloVital") + " - " + record.get("edadMaxCicloVital");
                    }
                }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetCicloVitalAll",
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
