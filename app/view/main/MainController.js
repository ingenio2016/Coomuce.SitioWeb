Ext.define('Coomuce.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-main',

    UserTimeIdle: 0,
    UserTimeout: 0, // esta configuración debe venir de BD

    onAfterRender: function (view, eOpts) {
        var me = this;

        me.UserTimeout = Coomuce.Util.DatosUsuario.tiempoInactividad;

        var textBoton = '<table><tr><td style="text-align: left;">Usuario:</td><td style="text-align: left;">' + Coomuce.Util.DatosUsuario.nombreUsuarioFormato +
            '</td></tr><tr><td style="text-align: left;">Rol:</td><td style="text-align: left;">' + Coomuce.Util.DatosUsuario.nombreRol + '</td></tr></table>';
        //var textBoton = "Usuario: " + Coomuce.Util.DatosUsuario.loginUsuario + "<br />" +
        //    "Rol: " + Coomuce.Util.DatosUsuario.nombreRol;

        Ext.getCmp("usuarioAutenticado").setText(textBoton);

        me.TimeOutHandler();
    },

    windowMessageInactivity: function () {
        var me = this;

        var msgbox = Ext.Msg.prompt("COOMUCE",
            "<b>Debido a un período de inactividad, su sesión ha expirado.</b><br />Ingrese nuevamente su contraseña y presione clic en el botón aceptar para poder continuar utilizando el sistema, tenga en cuenta que si la contraseña es incorrecta el sistema se reiniciara y todos los cambios no guardados se perderán.",
            function (btn, text) {
                if (btn === "ok") {
                    var conf = {
                        url: Coomuce.Url.Seguridad + "Reingresar",
                        data: {
                            username: Coomuce.Util.DatosUsuario.loginUsuario,
                            password: text
                        },
                        targetMask: me.getView(),
                        msgMask: "Conectando con servidor...",
                        showMsgConfirm: false,
                        fnSuccess: function (response) {
                            me.UserTimeIdle = 0;
                            me.TimeOutHandler();
                        },
                        fnFailure: function (response) {
                            me.windowMessageInactivity();
                        }
                    };

                    Coomuce.Util.EnviarPost(conf);
                }
                else {
                    window.location.reload();
                }
            }
        );
        msgbox.textField.inputEl.dom.type = 'password';
    },

    TimeOutHandler: function () {
        var me = this;

        var ObjInterValTimeOut = undefined;
        var Reloj = function () {
            me.UserTimeIdle += 1;

            if (me.UserTimeIdle >= me.UserTimeout) { // Tiempo a Comprobar viene de App predeterminados (BD)
                clearInterval(ObjInterValTimeOut);
                me.windowMessageInactivity();
            }
        };
        ObjInterValTimeOut = setInterval(Reloj, 60000); // 60000 = 1 minuto

        var elemento = me.getView().getEl();
        elemento.on('mousemove', function () {
            me.UserTimeIdle = 0;
        });
        elemento.on('keypress', function (e) {
            me.UserTimeIdle = 0;
        });
    },

    onBotonCerrarSesionClick: function () {
        var me = this;

        Ext.Msg.confirm("Cerrar Sesión", "Se cerrará su sesión. Cualquier información no guardada se perderá.<br /> ¿Desea Continuar?", function (btn) {
            if (btn === "yes") {
                // Remove Main View
                //me.getView().destroy();

                window.location.reload();
            }
        });
    }

});
