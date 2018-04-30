Ext.define("Coomuce.view.login.LoginController", {
    extend: "Ext.app.ViewController",
    alias: "controller.main-login",

    windowClaveTemporal: function () {
        var me = this;

        function fnFormBotonGuardar() {
            if (!form.getForm().isValid()) {
                Ext.Msg.alert("Error", "Todos los campos obligatorios deben ser diligenciados.");

                return false;
            }

            var df = form.getForm().getValues();

            var conf = {
                url: Coomuce.Url.Seguridad + "CambiarContraseña",
                data: {
                    username: df.username,
                    password: df.password,
                    newpassword: df.newpassword
                },
                msgMask: "Guardando nueva contraseña",
                targetMask: form,
                fnSuccess: function (response) {
                    win.close();
                }
            };

            Coomuce.Util.EnviarPost(conf);
        };

        var form = Ext.create("Ext.form.Panel", {
            bodyPadding: 5,
            buttons: [
                { text: "Guardar", iconCls: "x-fa fa-save", handler: fnFormBotonGuardar }
            ],
            defaults: {
                anchor: "100%"
            },
            defaultType: "textfield",
            items: [
                {
                    allowBlank: false,
                    emptyText: "Usuario",
                    fieldLabel: "Usuario",
                    name: "username"
                },
                {
                    allowBlank: false,
                    emptyText: "Contraseña actual",
                    fieldLabel: "Contraseña",
                    inputType: "password",
                    name: "password"
                },
                {
                    allowBlank: false,
                    emptyText: "Nueva contraseña",
                    fieldLabel: "Nueva contraseña",
                    inputType: "password",
                    name: "newpassword"
                }
            ],
            layout: "anchor"
        });

        var win = Ext.create("Ext.window.Window", {
            items: form,
            modal: true,
            title: "Cambiar contraseña",
            width: 400
        });

        win.show();
    },

    onBotonIniciarClick: function () {
        var me = this;

        var form = me.getView().lookupReference("formAutenticacion");

        var df = form.getForm().getValues();

        var conf = {
            url: Coomuce.Url.Seguridad + "Autenticar",
            data: {
                username: df.username,
                password: df.password
            },
            targetMask: me.getView(),
            msgMask: "Conectando con servidor...",
            showMsgConfirm: false,
            fnSuccess: function (response) {
                if (response.esTemporal !== undefined && response.esTemporal) {
                    Coomuce.Util.ShowMessage({
                        type: "WARNING", title: "COOMUCE", msg: response.message, fn: function (btn, text, opt) {
                            if (btn === "ok") {
                                me.windowClaveTemporal();
                            }
                        }
                    });

                    return false;
                }

                Coomuce.Util.DatosUsuario = response.data;

                // Remove Login Window
                me.getView().destroy();

                // Add the main view to the viewport
                Ext.create({
                    xtype: 'main-main'
                });
            }
        };

        Coomuce.Util.EnviarPost(conf);
    },

    onLinkOlvidoContraseñaClick: function () {
        function fnFormBotonEnviar() {
            if (!form.getForm().isValid()) {
                Ext.Msg.alert("Error", "Todos los campos obligatorios deben ser diligenciados.");

                return false;
            }

            var df = form.getForm().getValues();

            var conf = {
                url: Coomuce.Url.Seguridad + "OlvidoContraseña",
                data: {
                    username: df.username
                },
                targetMask: form,
                msgMask: "Enviando contraseña",
                fnSuccess: function (response) {
                    win.close();
                }
            };

            Coomuce.Util.EnviarPost(conf);
        };

        var form = Ext.create("Ext.form.Panel", {
            bodyPadding: 5,
            buttons: [
                { text: "Enviar", iconCls: "x-fa fa-envelope", handler: fnFormBotonEnviar }
            ],
            defaults: {
                anchor: "100%"
            },
            defaultType: "textfield",
            items: [
                {
                    allowBlank: false,
                    emptyText: "Usuario",
                    fieldLabel: "Usuario",
                    name: "username"
                }
            ],
            layout: "anchor"
        });

        var win = Ext.create("Ext.window.Window", {
            items: form,
            modal: true,
            title: "Recordar contraseña",
            width: 400
        });

        win.show();
    }

});