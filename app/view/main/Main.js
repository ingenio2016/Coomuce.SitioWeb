Ext.define("Coomuce.view.main.Main", {
    extend: "Ext.container.Viewport",

    xtype: "main-main",
    requires: [
        "Coomuce.view.main.MainController",
        "Coomuce.view.main.MainModel",
        "Coomuce.view.menu.Menu"
    ],

    controller: "main-main",
    viewModel: {
        type: "main-main"
    },

    layout: "border",
    listeners: {
        afterrender: "onAfterRender"
    },

    items: [
        {
            bodyCls: "panelWest",
            border: true,
            collapsible: true,
            header: false,
            layout: "border",
            items: [
                {
                    height: 180,
                    items: [
                        {
                            bodyCls: "logo",
                            height: 100,
                            html: '<img src="./resources/images/logo-coomuce.png" width="100%" />',
                            region: "center"
                        },
                        {
                            bodyPadding: 20,
                            height: 80,
                            items: [
                                {
                                    xtype: "button",
                                    iconCls: "x-fa fa-user",
                                    id: "usuarioAutenticado",
                                    height: 50,
                                    menu: [
                                        { iconCls: "x-fa fa-sign-out", text: "Cerrar sesión", handler: "onBotonCerrarSesionClick", width: 220 }
                                    ],
                                    width: 250
                                }
                            ],
                            region: "south"
                        }
                    ],
                    region: "north"
                },
                {
                    items: [
                        {
                            xtype: "mainmenu"
                        }
                    ],
                    region: "center",
                    scrollable: "y"
                },
                {
                    height: 10,
                    region: "south"
                }
            ],
            region: "west",
            split: {
                xtype: 'splitter',
                style: {
                    backgroundColor: "#ffffff"
                }
            },
            width: 300
        },
        {
            items: [
                {
                    xtype: "tabpanel",
                    activeTab: 0,
                    id: "ContenedorModulo",
                    items: [
                        {
                            iconCls: "x-fa fa-home",
                            html: '<span style="text-aling: center;width: 100%;"><img src="./resources/images/Logo-Coomuce.png" /></span><br /><br/ ><span class="tituloSistema">Sistema de Administración de Riesgo en Salud</span>',
                            title: "INICIO"
                        }
                    ],
                    region: "center",
                    ui: "tabnav"
                },
                {
                    region: "south",
                    height: 10
                }
            ],
            layout: "border",
            region: "center"
        }
    ]
});