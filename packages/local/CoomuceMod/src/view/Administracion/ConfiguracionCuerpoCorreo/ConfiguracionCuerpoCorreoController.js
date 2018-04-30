Ext.define("CoomuceMod.view.Administracion.ConfiguracionCuerpoCorreoController", {
    extend: "Ext.app.ViewController",
    alias: "controller.administracion-configuracioncuerpocorreo",

    cargarInformacion: function (value) {
        var me = this;

        var form = Ext.getCmp('Form-ConfiguracionCuerpoCorreo-Principal');

        var mask = new Ext.LoadMask({
            msg: "Cargando datos de configuración cuerpo de correo",
            target: form
        });
        mask.show();

        me.getViewModel().getStore("getConfiguracionCuerpoCorreo").load({ params: { tipo: value } });
        me.getViewModel().getStore("getConfiguracionCuerpoCorreo").on("load", function (store, records, successful, eOpts) {
            form.getForm().loadRecord(records[0]);
            mask.hide();
        });
    },

    onBotonCancelarClick: function () {
        //this.getReferences().formularioDatos.getForm().reset();
        var tabPanel = Ext.getCmp("CoomuceConfiguracionCuerpoCorreo");
        tabPanel.destroy();
    },

    onBotonGuardarClick: function () {
        var me = this;

        var form = Ext.getCmp('Form-ConfiguracionCuerpoCorreo-Principal');

        var datos = form.getForm().getValues();

        var conf = {
            url: Coomuce.Url.Administracion + "ConfiguracionCuerpoCorreoU",
            data: {
                datos: datos
            },
            targetMask: form,
            msgMask: "Guardando datos...",
            fnSuccess: function (response) {
                me.cargarInformacion(datos.tipoConfiguracionCuerpoCorreo);
                var tabPanel = Ext.getCmp("CoomuceConfiguracionCuerpoCorreo");
                tabPanel.destroy();
            }
        };

        Coomuce.Util.EnviarPost(conf);
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;

        me.cargarInformacion(record.get("id"));
    }

});