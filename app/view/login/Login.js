Ext.define("Coomuce.view.login.Login", {
    extend: "Ext.container.Viewport",
    xtype: "main-login",
    requires: [
        "Coomuce.view.login.LoginController",
        "Coomuce.view.login.LoginModel"
    ],

    controller: "main-login",
    viewModel: { type: "main-login" },

    layout: {
        type: "vbox",
        align: "center",
        pack: "center"
    },

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            border: true,
            items: [
                { bodyStyle: "color:#03A397;font-size:30px;padding-top:20px;padding-bottom:10px;text-align:center;", html: "INICIAR SESIÓN" },
                { bodyStyle: "color:#03A397;font-size:22px;padding-bottom:10px;text-align:center;", html: "para acceder al sistema" },
                {
                    bodyStyle: "padding:50px 60px 10px 80px;text-align:center;", items: [
                        {
                            xtype: "textfield",
                            allowBlank: false,
                            emptyText: "Usuario",
                            fieldLabel: "<div class='x-fa fa-user' style='color:#03A397;font-size:18px;'></div>",
                            labelSeparator: "",
                            labelWidth: 30,
                            name: "username",
                            //value: "ezambranom",
                            width: 300
                        },
                        {
                            xtype: "textfield",
                            allowBlank: false,
                            emptyText: "Contraseña",
                            fieldLabel: "<div class='x-fa fa-lock' style='color:#03A397;font-size:18px;'></div>",
                            inputType: 'password',
                            labelSeparator: "",
                            labelWidth: 30,
                            name: "password",
                            //value: "Junior1011$$",
                            width: 300
                        }
                    ]
                },
                {
                    bodyStyle: "text-align:center;",
                    items: [
                        {
                            xtype: "button",
                            handler: "onBotonIniciarClick",
                            iconCls: "x-fa fa-arrow-right",
                            iconAlign: "right",
                            text: "<b>Iniciar Sesión</b>"
                        },
                        {
                            xtype: "component",
                            html: '<a href="#">¿Olvidaste tu contraseña?</a>',
                            listeners: {
                                click: "onLinkOlvidoContraseñaClick",
                                element: "el",
                                delegate: "a"
                            }
                        }
                    ]
                }
            ],
            reference: "formAutenticacion",
            width: 500
        }
    ]

});