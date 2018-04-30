Ext.define("CoomuceMod.view.ActualizacionBd.ImportarBaseAfiliadosController", {
    extend: "Ext.app.ViewController",
    alias: "controller.actualizacionbd-importarbaseafiliados",

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();

        Ext.Msg.confirm(titleView, "Desea guardar el archivo e importar los datos?", function (btn) {
            if (btn === "yes") {
                var form = Ext.getCmp("Form-ImportarBase");

                form.getForm().submit({
                    url: Coomuce.Url.Funciones + "ImportarBase",
                    waitMsg: 'Cargando el archivo...',
                    success: function (fp, o) {
                        var tpl = new Ext.XTemplate(
                            'Archivo procesado en el servidor.<br />',
                            'Nombre: {fileName}<br />',
                            'Tamaño: {fileSize:fileSize}'
                        );

                        Ext.Msg.alert('Success', tpl.apply(o.result));
                        var tabPanel = Ext.getCmp("CoomuceImportarBaseAfiliados");
                        tabPanel.destroy();
                    }
                });
            }
        });
    },

    onBotonCancelarClick: function () {
        Ext.getCmp("Form-ImportarBase").getForm().reset();
        var tabPanel = Ext.getCmp("CoomuceImportarBaseAfiliados");
        tabPanel.destroy();
    }

});