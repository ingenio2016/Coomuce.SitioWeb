Ext.define("CoomuceMod.view.ActualizacionBd.Novedades", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.ActualizacionBd.NovedadesController",
        "CoomuceMod.view.ActualizacionBd.NovedadesModel"
    ],

    controller: "actualizacionbd-novedades",
    viewModel: { type: "actualizacionbd-novedades" },

    layout: "fit",
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
            id: "Form-Novedades",
            scrollable: true,
            items: [
                {
                    xtype: "fieldset",
                    defaults: {
                        allowBlank: false,
                        anchor: "100%"
                    },
                    items: [
                        {
                            xtype: "grid",
                            bind: {
                                store: "{getTipoNovedad}"
                            },
                            border: true,
                            columns: [
                                {
                                    dataIndex: "idTipoNovedad", header: "Id Tipo Novedad", hidden: true
                                },
                                {
                                    xtype: "checkcolumn", dataIndex: "selFuanTipoNovedad", header: "", width: 30
                                },
                                {
                                    dataIndex: "compTipoNovedad", header: "Novedad", width: 450
                                },
                                {
                                    dataIndex: "valorFuanTipoNovedad", header: "Valor Selección", width: 200, editor: {
                                        xtype: "combo",
                                        displayField: "nombre",
                                        checkRecord: true,
                                        listeners: {
                                            focus: "onFocusCombo"
                                        },
                                        queryMode: "local",
                                        store: Ext.create("Ext.data.ArrayStore", {
                                            fields: ["nombre"]
                                        }),
                                        valueField: "nombre"
                                    }
                                }
                            ],
                            columnLines: true,
                            height: 350,
                            id: "Grid-TipoNovedad",
                            plugins: {
                                ptype: 'cellediting',
                                clicksToEdit: 1
                            },
                            title: "Tipo de Novedad"
                        },
                        {
                            xtype: "fieldset",
                            defaults: {
                                anchor: "98%",
                                bodyPadding: 10,
                                labelWidth: 150
                            },
                            height: 500,
                            scrollable: true,
                            items: [
                                {
                                    xtype: "textfield",
                                    fieldLabel: "Primer apellido",
                                    name: "primerApellidoFuanAfiliado",
                                    reference: "primerApellidoFuanAfiliado"
                                },
                                {
                                    xtype: "textfield",
                                    fieldLabel: "Segundo apellido",
                                    name: "segundoApellidoFuanAfiliado",
                                    reference: "segundoApellidoFuanAfiliado"
                                },
                                {
                                    xtype: "textfield",
                                    fieldLabel: "Primer nombre",
                                    name: "primerNombreFuanAfiliado",
                                    reference: "primerNombreFuanAfiliado"
                                },
                                {
                                    xtype: "textfield",
                                    fieldLabel: "Segundo nombre",
                                    name: "segundoNombreFuanAfiliado",
                                    reference: "segundoNombreFuanAfiliado"
                                },
                                {
                                    xtype: "combo",
                                    bind: {
                                        store: "{getTipoIdentificacion}"
                                    },
                                    displayField: "compTipoIdentificacion",
                                    editable: false,
                                    fieldLabel: "Tipo documento de identidad",
                                    name: "idTipoIdentificacion",
                                    queryMode: "local",
                                    reference: "idTipoIdentificacion",
                                    valueField: "idTipoIdentificacion"
                                },
                                {
                                    layout: {
                                        type: "table",
                                        columns: 2,
                                        tableAttrs: {
                                            style: {
                                                "background": "#f6f6f6",
                                                width: '100%'
                                            }
                                        }
                                    },
                                    defaults: {
                                        style: {
                                            "background": "#f6f6f6"
                                        }
                                    },
                                    items: [
                                        {
                                            items: [
                                                { xtype: "numberfield", hidden: true, name: "idFuanAfiliado", readOnly: true },
                                                { xtype: "textfield", anchor: "95%", fieldLabel: "No. Documento de Identidad", labelWidth: 150, name: "identificacionFuanAfiliado", width: "95%" }
                                            ]
                                        },
                                        {
                                            items: [
                                                {
                                                    xtype: "button",
                                                    componentReference: [
                                                        "idFuanAfiliado", "idTipoIdentificacion", "identificacionFuanAfiliado",
                                                        "primerApellidoFuanAfiliado", "segundoApellidoFuanAfiliado", "primerNombreFuanAfiliado",
                                                        "segundoNombreFuanAfiliado", "idTipoSexo", "fechaNacimientoFuanAfiliado", "pensionFuanAfiliado",
                                                        "idDepartamento", "idCiudad"
                                                    ],
                                                    handler: Coomuce.Util.buscarAfiliado,
                                                    iconCls: "x-fa fa-binoculars",
                                                    reference: "botonBuscarAfiliado",
                                                    tooltip: "Lista de Afiliados",
                                                    width: 30
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: "combo",
                                    bind: {
                                        store: "{getTipoSexo}"
                                    },
                                    displayField: "compTipoSexo",
                                    editable: false,
                                    fieldLabel: "Sexo",
                                    name: "idTipoSexo",
                                    queryMode: "local",
                                    reference: "idTipoSexo",
                                    valueField: "idTipoSexo"
                                },
                                {
                                    xtype: "datefield",
                                    fieldLabel: "Fecha de nacimiento",
                                    name: "fechaNacimientoFuanAfiliado",
                                    reference: "fechaNacimientoFuanAfiliado"
                                },
                                {
                                    xtype: "textfield",
                                    fieldLabel: "EPS anterior",
                                    name: "epsAnteriorFuanAfiliado",
                                    reference: "epsAnteriorFuanAfiliado"
                                },
                                {
                                    xtype: "combo",
                                    bind: {
                                        store: "{getMotivoTraslado}"
                                    },
                                    displayField: "compMotivoTraslado",
                                    editable: false,
                                    fieldLabel: "Motivo de traslado (Código)",
                                    name: "idMotivoTraslado",
                                    queryMode: "local",
                                    valueField: "idMotivoTraslado"
                                },
                                {
                                    xtype: "textfield",
                                    fieldLabel: "Caja de Compesación Familiar o Pagador de Pensiones",
                                    name: "pensionFuanAfiliado",
                                    referene: "pensionFuanAfiliado"
                                },
                                {
                                    xtype: "combo",
                                    bind: {
                                        store: "{getDepartamento}"
                                    },
                                    ciudadReference: "idCiudad",
                                    displayField: "compDepartamento",
                                    editable: false,
                                    fieldLabel: "Departamento",
                                    listeners: {
                                        select: "onSelectCombo"
                                    },
                                    name: "idDepartamento",
                                    queryMode: "local",
                                    ubicacion: true,
                                    valueField: "idDepartamento"
                                },
                                {
                                    xtype: "combo",
                                    bind: {
                                        store: "{getCiudad}"
                                    },
                                    displayField: "compCiudad",
                                    editable: false,
                                    fieldLabel: "Municipio/Distrito",
                                    name: "idCiudad",
                                    queryMode: "local",
                                    reference: "idCiudad",
                                    valueField: "idCiudad"
                                },
                                {
                                    bodyPadding: 10,
                                    layout: {
                                        type: "table",
                                        columns: 2
                                    },
                                    title: "Firma",
                                    items: [
                                        {
                                            items: [
                                                {
                                                    xtype: 'uploader',
                                                    uploadConfig: {
                                                        uploadUrl: Coomuce.Url.Funciones + "ImportarFirma",
                                                        maxFileSize: 10 * 1024 * 1024
                                                    },
                                                    inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                    listeners: {
                                                        'uploaddatacomplete': "onUploadFirmaDataComplete",
                                                        'uploaderror': "onUploadFirmaError"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            items: [
                                                { xtype: "textfield", name: "firmaNovedad", hidden: true, reference: "firmaNovedad" },
                                                {
                                                    xtype: "button",
                                                    iconCls: "x-fa fa-minus-circle",
                                                    textAlign: "left",
                                                    handler: "onBotonEliminarFirmaClick",
                                                    reference: "botonEliminarFirma",
                                                    width: 250
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            title: "Reporte de Novedad"
                        }
                    ],
                    title: "VI. DATOS PARA EL REPORTE DE LA NOVEDAD"
                }
            ]
        }
    ]

});