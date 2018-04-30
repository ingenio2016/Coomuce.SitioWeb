Ext.define("CoomuceMod.view.InformacionOrientacion.EncuestaEps", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.InformacionOrientacion.EncuestaEpsController",
        "CoomuceMod.view.InformacionOrientacion.EncuestaEpsModel"
    ],

    controller: "informacionorientacion-encuestaeps",
    viewModel: { type: "informacionorientacion-encuestaeps" },

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
            id: "Form-EncuestaEps",
            items: [
                { xtype: "label", html: "ENCUESTA DE SATISFACCION DE USUARIO DE LA EPS-S" },
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
                                    fieldLabel: "Punto de Atención",
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
                //    fieldLabel: "Punto de Atención",
                //    hideTrigger: true,
                //    name: "idIps",
                //    queryMode: "local",
                //    valueField: "idIps"
                //},
                { xtype: "label", html: "Esta encuesta tiene por objeto conocer su opinion  sobre los servicios prestados por la ARS." },
                { xtype: "label", html: "Su opinión es muy importante para nosotros porque nos permite organizar nuestros servicios para poder satisfacer sus expectativas, por eso le solicitamos que responda con sinceridad marcando (X) y solo una respuesta por pregunta." },
                {
                    bodyPadding: 10,
                    border: true,
                    height: 400,
                    id: "ContenidoEncuestaEps",
                    scrollable: true
                },
                {
                    xtype: "textarea",
                    fieldLabel: "Observaciones",
                    name: "observacionEncuestaEps"
                }
            ]
        }
    ]
});