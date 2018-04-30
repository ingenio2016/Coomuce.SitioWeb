Ext.define("CoomuceMod.view.InformacionOrientacion.EncuestaIpsModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.informacionorientacion-encuestaips",

    stores: {
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

        //getIps: {
        //    autoLoad: true,
        //    fields: ["idIps", "nombreCompletoIps"],
        //    proxy: {
        //        timeout: 600000,
        //        useDefaultXhrHeader: false,
        //        type: 'ajax',
        //        url: Coomuce.Url.Funciones + "GetIpsAll",
        //        reader: {
        //            type: 'json',
        //            rootProperty: 'data',
        //            totalProperty: "total"
        //        }
        //    }
        //},

        getEncuesta: {
            autoLoad: false,
            fields: [
                "idEncuestaCategoria", "nombreEncuestaCategoria", "preguntas"
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetEncuestaAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }

});