Ext.define("CoomuceMod.view.ParticipacionSocial.ListadoAsistenciaGeneral", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.ParticipacionSocial.ListadoAsistenciaGeneralController",
        "CoomuceMod.view.ParticipacionSocial.ListadoAsistenciaGeneralModel"
    ],

    controller: "participacionsocial-listadoasistenciageneral",
    viewModel: { type: "participacionsocial-listadoasistenciageneral" },

    layout: "fit",

    dockedItems: [
        {
            xtype: "toolbar",
            dock: "top",
            ui: "footer",
            layout: {
                pack: "right"
            },
            items: [
                { minWidth: 80, iconCls: "x-fa fa-list-alt", text: "Consultar", handler: "onBotonConsultarClick" }
            ]
        },
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
            scrollable: true,
            id: "Form-ListadoAsistenciaGeneral-Principal",
            items: [
                //{ xtype: "label", html: "Seccional Regional Sur" },
                {
                    xtype: "datefield",
                    fieldLabel: "Fecha",
                    format: "d/m/Y",
                    name: "fechaAsistenciaGeneral",
                    value: new Date(),
                    width: 300
                },
                {
                    layout: {
                        type: "table",
                        columns: 3
                    },
                    items: [
                        {
                            items: [
                                { xtype: "numberfield", hidden: true, name: "idAsistenciaGeneral", reference: "idAsistenciaGeneral" },
                                {
                                    xtype: "combo",
                                    allowBlank: false,
                                    bind: {
                                        store: "{getDepartamento}"
                                    },
                                    campoDependent: "idCiudad",
                                    dependent: true,
                                    displayField: "compDepartamento",
                                    editable: false,
                                    fieldLabel: "Departamento",
                                    listeners: {
                                        select: "onSelectCombo"
                                    },
                                    name: "idDepartamento",
                                    queryMode: "local",
                                    reference: "idDepartamento",
                                    valueField: "idDepartamento",
                                    width: 300
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "combo",
                                    allowBlank: false,
                                    bind: {
                                        store: "{getCiudad}"
                                    },
                                    displayField: "compCiudad",
                                    editable: false,
                                    fieldLabel: "Municipio",
                                    name: "idCiudad",
                                    queryMode: "local",
                                    reference: "idCiudad",
                                    valueField: "idCiudad",
                                    width: 300
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "combo",
                                    allowBlank: false,
                                    bind: {
                                        store: "{getEje}"
                                    },
                                    campoDependent: "idUnidad",
                                    dependent: true,
                                    displayField: "compEje",
                                    editable: false,
                                    fieldLabel: "Eje",
                                    listeners: {
                                        select: "onSelectCombo"
                                    },
                                    name: "idEje",
                                    queryMode: "local",
                                    reference: "idEje",
                                    valueField: "idEje",
                                    width: 300
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "combo",
                                    allowBlank: false,
                                    bind: {
                                        store: "{getGruposFocales}"
                                    },
                                    displayField: "compGruposFocales",
                                    editable: false,
                                    fieldLabel: "Grupo Focal",
                                    name: "idGruposFocales",
                                    queryMode: "local",
                                    valueField: "idGruposFocales",
                                    width: 300
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    allowBlank: false,
                                    fieldLabel: "Tema",
                                    name: "temaAsistenciaGeneral",
                                    readOnly: true,
                                    reference: "temaAsistenciaGeneral",
                                    width: 300
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "combo",
                                    allowBlank: false,
                                    bind: {
                                        store: "{getUnidad}"
                                    },
                                    campoDependent: "idModulo",
                                    dependent: true,
                                    displayField: "compUnidad",
                                    editable: false,
                                    fieldLabel: "Unidad",
                                    listeners: {
                                        select: "onSelectCombo"
                                    },
                                    name: "idUnidad",
                                    queryMode: "local",
                                    reference: "idUnidad",
                                    valueField: "idUnidad",
                                    width: 300
                                }
                            ]
                        },
                        {
                            colspan: 2,
                            items: [
                                {
                                    xtype: "textfield",
                                    allowBlank: false,
                                    fieldLabel: "Formador",
                                    name: "formadorAsistenciaGeneral",
                                    value: Coomuce.Util.DatosUsuario.nombreUsuario,
                                    width: 600
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "combo",
                                    allowBlank: false,
                                    bind: {
                                        store: "{getModulo}"
                                    },
                                    campo: "nombreModulo",
                                    campoReference: "temaAsistenciaGeneral",
                                    dependent: true,
                                    displayField: "codigoModulo",
                                    editable: false,
                                    fieldLabel: "Modulo",
                                    listeners: {
                                        select: "onSelectCombo"
                                    },
                                    name: "idModulo",
                                    queryMode: "local",
                                    reference: "idModulo",
                                    valueField: "idModulo",
                                    width: 300
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: "grid",
                    bind: {
                        store: "{setListadoAsistencia}"
                    },
                    border: true,
                    columns: [
                        { xtype: "rownumberer" },
                        {
                            dataIndex: "identificacionFuanAfiliado", header: "No. Documento de Identidad", width: 200//, editor: {
                            //    xtype: "combo",
                            //    bind: {
                            //        store: "{getAfiliado}"
                            //    },
                            //    campos: ["idFuanAfiliado", "nombreCompletoAfiliado", "codigoTipoIdentificacion", "direccionFuanAfiliado", "telefonoFuanAfiliado"],
                            //    dependent: false,
                            //    displayField: "compAfiliado",
                            //    hideTrigger: true,
                            //    listeners: {
                            //        select: "onSelectCombo"
                            //    },
                            //    queryMode: "local",
                            //    updateRecords: true,
                            //    valueField: "identificacionFuanAfiliado"
                            //}
                        },
                        {
                            xtype: "widgetcolumn", header: "", width: 40, widget: {
                                xtype: "button",
                                componentReference: [
                                    "idFuanAfiliado", "codigoTipoIdentificacion", "identificacionFuanAfiliado",
                                    "nombreCompletoAfiliado", "direccionFuanAfiliado", "telefonoFuanAfiliado"
                                ],
                                handler: Coomuce.Util.buscarAfiliado,
                                inGrid: true,
                                iconCls: "x-fa fa-list-alt",
                                tooltip: "Lista de Afiliados"
                            }
                        },
                        {
                            dataIndex: "codigoTipoIdentificacion", header: "Tipo Documento", width: 150
                        },
                        {
                            dataIndex: "nombreCompletoAfiliado", header: "Nombre y Apellido", width: 300
                        },
                        {
                            dataIndex: "direccionFuanAfiliado", header: "Dirección", width: 200
                        },
                        {
                            dataIndex: "telefonoFuanAfiliado", header: "Teléfono", width: 200
                        },
                        {
                            dataIndex: "areaEntidadListaAsistenciaGeneral", header: "Entidad", width: 150
                        },
                        {
                            xtype: "widgetcolumn", header: "", width: 60, widget: {
                                xtype: 'uploader',
                                uploadConfig: {
                                    uploadUrl: Coomuce.Url.Funciones + "ImportarFirma",
                                    maxFileSize: 10 * 1024 * 1024
                                },
                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                listeners: {
                                    'uploaddatacomplete': "onUploadDataComplete",
                                    'uploaderror': "onUploadError"
                                }
                            }
                        },
                        {
                            xtype: "widgetcolumn", dataIndex: "firmaListaAsistenciaGeneral", header: "Archivo de firma", width: 200, widget: {
                                xtype: "button",
                                iconCls: "x-fa fa-minus-circle",
                                textAlign: "left",
                                handler: "onBotonEliminarArchivoClick"
                            }
                        }
                    ],
                    columnLines: true,
                    height: 350,
                    id: "Grid-ListadoAsistenciaGeneral",
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },
                    sortableColumns: false,
                    tbar: {
                        items: [
                            { handler: "onBotonGridAdicionarClick", iconCls: "x-fa fa-plus-circle", text: "Adicionar" },
                            { handler: "onBotonGridRemoverClick", iconCls: "x-fa fa-minus-circle", text: "Remover" }
                        ]
                    }
                }
            ]
        }
    ]
});