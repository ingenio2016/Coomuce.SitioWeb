Ext.define("CoomuceMod.view.Parametros.Generales.IpsModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.parametros-generales-ips",

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

        getIps: {
            autoLoad: true,
            model: "CoomuceMod.model.Parametros.Generales.Ips",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Parametros + "GetIpsAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        },

        getNivel: {
            fields: [
                "nivelIps"
            ],
            data: [
                ["I"], ["II"], ["III"], ["IV"]
            ]
        }

    }

});