Ext.define("CoomuceMod.view.Administracion.ConfiguracionGeneral", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Administracion.ConfiguracionGeneralController",
        "CoomuceMod.view.Administracion.ConfiguracionGeneralModel"
    ],

    controller: "administracion-configuraciongeneral",
    viewModel: { type: "administracion-configuraciongeneral" },

    layout: "fit",
    listeners: {
        afterrender: "onAfterRender"
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'left'
            },
            items: [
                { minWidth: 80, text: 'Guardar', handler: 'onBotonGuardarClick' },
                { minWidth: 80, text: 'Cancelar', handler: 'onBotonCancelarClick' }
            ]
        }
    ],

    items: [
        {
            xtype: "form",
            bodyPadding: 10,
            defaults: {
                anchor: "50%"
            },
            id: "Form-ConfiguracionGeneral-Principal",
            items: [
                { xtype: "numberfield", hidden: true, name: "idConfiguracionGeneral" },
                {
                    xtype: "numberfield",
                    fieldLabel: "Tiempo inactividad (minutos)",
                    labelWidth: 150,
                    name: "tiempoInactividadConfiguracionGeneral"
                },
                {
                    xtype: "numberfield",
                    fieldLabel: "Salario minimo legal vigente",
                    hideTrigger: true,
                    labelWidth: 150,
                    name: "salarioConfiguracionGeneral"
                },
                {
                    xtype: "fieldset",
                    anchor: "60%",
                    defaults: {
                        xtype: "textfield",
                        anchor: "100%",
                        labelWidth: 150
                    },
                    height: 350,
                    items: [
                        {
                            allowBlank: false,
                            emptyText: "Dirección de correo eletrónico",
                            fieldLabel: "Dirección de correo eletrónico",
                            name: "emailSalienteConfiguracionGeneral",
                            vtype: "email"
                        },
                        {
                            allowBlank: false,
                            emptyText: "Contraseña correo",
                            fieldLabel: "Contraseña correo",
                            inputType: "password",
                            name: "pswEmailConfiguracionGeneral"
                        },
                        {
                            allowBlank: true,
                            emptyText: "Copia de correo saliente",
                            fieldLabel: "Copia de correo saliente",
                            name: "ccConfiguracionGeneral",
                            vtype: "email"
                        },
                        {
                            allowBlank: true,
                            emptyText: "Correo de soporte",
                            fieldLabel: "Correo de soporte",
                            name: "csConfiguracionGeneral"
                        },
                        {
                            allowBlank: false,
                            emptyText: "Host",
                            fieldLabel: "Host",
                            name: "hostConfiguracionGeneral"
                        },
                        {
                            xtype: "numberfield",
                            allowBlank: false,
                            emptyText: "Puerto",
                            fieldLabel: "Puerto",
                            hideTrigger: true,
                            name: "portConfiguracionGeneral"
                        },
                        {
                            xtype: "checkbox",
                            fieldLabel: "Usa ssl?",
                            name: "sslConfiguracionGeneral"
                        }
                    ],
                    title: "Configuración Correo Saliente"
                }
            ]
        }
    ]

});