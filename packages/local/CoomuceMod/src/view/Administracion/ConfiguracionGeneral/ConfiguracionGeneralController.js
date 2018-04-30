Ext.define("CoomuceMod.view.Administracion.ConfiguracionGeneralController", {
    extend: "Ext.app.ViewController",
    alias: "controller.administracion-configuraciongeneral",

    cargarInformacion: function () {
        var me = this;

        var form = Ext.getCmp('Form-ConfiguracionGeneral-Principal');

        var mask = new Ext.LoadMask({
            msg: "Cargando datos de configuración general",
            target: form
        });
        mask.show();

        me.getViewModel().getStore("getConfiguracionGeneral").load();
        me.getViewModel().getStore("getConfiguracionGeneral").on("load", function (store, records, successful, eOpts) {
            form.getForm().loadRecord(records[0]);
            mask.hide();
        });
    },

    onAfterRender: function (view, eOpts) {
        var me = this;

        me.cargarInformacion();
    },

    onBotonCancelarClick: function () {
        //this.getReferences().formularioDatos.getForm().reset();
        //me.cargarInformacion();
        var tabPanel = Ext.getCmp("CoomuceConfiguracionGeneral");
        tabPanel.destroy();
    },

    onBotonGuardarClick: function () {
        var me = this;

        var form = Ext.getCmp('Form-ConfiguracionGeneral-Principal');

        var datos = form.getForm().getValues();
        datos.sslConfiguracionGeneral = (datos.sslConfiguracionGeneral == "on")?true:false;
        console.log(datos);
        var conf = {
            url: Coomuce.Url.Administracion + "ConfiguracionGeneralU",
            data: {
                datos: datos
            },
            targetMask: form,
            msgMask: "Guardando datos...",
            fnSuccess: function (response) {
                me.cargarInformacion();
                var tabPanel = Ext.getCmp("CoomuceConfiguracionGeneral");
                tabPanel.destroy();
            }
        };

        Coomuce.Util.EnviarPost(conf);
    }

});