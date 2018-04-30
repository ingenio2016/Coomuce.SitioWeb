Ext.define("CoomuceMod.view.InformacionOrientacion.EncuestaIps", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.InformacionOrientacion.EncuestaIpsController",
        "CoomuceMod.view.InformacionOrientacion.EncuestaIpsModel"
    ],

    controller: "informacionorientacion-encuestaips",
    viewModel: { type: "informacionorientacion-encuestaips" },

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
                { minWidth: 80, text: 'Guardar', handler: 'onBotonGuardarClick', reference: "botonGuardar" },
                { minWidth: 80, text: 'Cancelar', handler: 'onBotonCancelarClick', reference: "botonCancelar" }
            ]
        }
    ],

    items: [
        {
            xtype: "form",
            bodyPadding: 10,
            defaults: {
                anchor: "100%",
                labelWidth: 150
            },
            scrollable: true,
            id: "Form-EncuestaIps",
            items: [
                { xtype: "label", html: "ENCUESTA DE SATISFACCION DE USUARIO DE LA  I.P.S DE I NIVEL" },
                { xtype: "label", html: "ESTIMADO USUARIO SI USTED HA RECIBIDO EN ESTE MES LOS SERVICIOS DE INSTITUCIONES DE SALUD ( HOSPITAL, CENTRO DE SALUD, IPS) LO INVITAMOS A RESPONDER LAS SIGUIENTES PREGUNTAS SOBRE LA ATENCION" },
                {
                    layout: {
                        type: "table",
                        columns: 2
                    },
                    items: [
                        {
                            items: [
                                { xtype: "numberfield", hidden: true, name: "idFuanAfiliado" },
                                {
                                    xtype: "textfield",
                                    fieldLabel: "No. de identificación",
                                    labelWidth: 150,
                                    name: "compAfiliado",
                                    readOnly: true,
                                    reference: "compAfiliado",
                                    width: 700
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "button",
                                    componentReference: [
                                        "idFuanAfiliado", "compAfiliado"
                                    ],
                                    handler: Coomuce.Util.buscarAfiliado,
                                    iconCls: "x-fa fa-list-alt",
                                    reference: "botonBuscarAfiliado",
                                    tooltip: "Lista de Afiliados",
                                    width: 30
                                }
                            ]
                        }
                    ]
                },
                {
                    layout: {
                        type: "table",
                        columns: 2
                    },
                    items: [
                        {
                            items: [
                                { xtype: "numberfield", hidden: true, name: "idIps" },
                                {
                                    xtype: "textfield",
                                    fieldLabel: "Nombre de la institución donde fue atendido",
                                    labelWidth: 150,
                                    name: "nombreCompletoIps",
                                    readOnly: true,
                                    reference: "nombreCompletoIps",
                                    width: 700
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "button",
                                    componentReference: [
                                        "idIps", "nombreCompletoIps"
                                    ],
                                    handler: Coomuce.Util.buscarIps,
                                    iconCls: "x-fa fa-list-alt",
                                    reference: "botonBuscarIps",
                                    tooltip: "Lista de Ips",
                                    width: 30
                                }
                            ]
                        }
                    ]
                },
                //{
                //    xtype: "combo",
                //    allowBlank: false,
                //    bind: {
                //        store: "{getIps}"
                //    },
                //    displayField: "nombreCompletoIps",
                //    fieldLabel: "Nombre de la institución donde fue atendido",
                //    hideTrigger: true,
                //    name: "idIps",
                //    queryMode: "local",
                //    valueField: "idIps"
                //},
                { xtype: "label", html: "Su opinión es muy importante para nosotros porque nos permite organizar nuestros servicios para poder satisfacer sus expectativas por esto le solicitamos que responda con sinceridad marcando con una (X) solo una respuesta por pregunta" },
                {
                    bodyPadding: 10,
                    border: true,
                    height: 400,
                    id: "ContenidoEncuestaIps",
                    scrollable: true
                },
                {
                    xtype: "textarea",
                    fieldLabel: "Observaciones",
                    name: "observacionEncuestaIps"
                }
            ]
        }
    ]
});