Ext.define("CoomuceMod.view.DemandaInducida.Purisu", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.DemandaInducida.PurisuController",
        "CoomuceMod.view.DemandaInducida.PurisuModel"
    ],

    controller: "demandainducida-purisu",
    viewModel: { type: "demandainducida-purisu" },

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
                { disabled: true, minWidth: 80, text: 'Guardar', handler: 'onBotonGuardarClick', reference: "botonGuardar" },
                { disabled: false, minWidth: 80, text: 'Cancelar', handler: 'onBotonCancelarClick', reference: "botonCancelar" }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
            items: [
                { text: "Nueva Planilla", iconCls: "x-fa fa-file-o", handler: "onBotonNuevaPlanillaClick", reference: "botonNuevaPlanilla" },
                { text: "Importar archivo de audio", iconCls: "x-fa fa-file-audio-o", handler: "onBotonImportarArchivoClick", tooltip: "Esta opción permite importar archivos de audio a las plantillas diligenciadas telefonicamente." }
            ]
        }
    ],

    items: [
        {
            xtype: "form",
            bodyPadding: 10,
            id: "Form-Purisu-Principal",
            scrollable: true,
            items: [
                {
                    xtype: "combo",
                    anchor: "90%",
                    fieldLabel: "Tipo Diligenciamiento",
                    labelWidth: 150,
                    name: "tipoDiligenciamientoInfoPurisu",
                    store: ["Personal", "Telefonico"],
                    value: "Personal"
                },
                {
                    xtype: "datefield",
                    anchor: "40%",
                    fieldLabel: "Fecha atención",
                    format: "d/m/Y",
                    labelWidth: 150,
                    name: "fechaAtencionPurisu",
                    reference: "fechaAtencionPurisu",
                    value: new Date()
                },
                {
                    layout: {
                        type: "table",
                        columns: 2
                    },
                    items: [
                        {
                            items: [
                                {
                                    xtype: "combo",
                                    allowBlank: false,
                                    bind: {
                                        store: "{getDepartamento}"
                                    },
                                    campoDependent: "idCiudad",
                                    dependent: true,
                                    disabled: true,
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
                                    width: 400
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
                                    disabled: true,
                                    displayField: "compCiudad",
                                    editable: false,
                                    fieldLabel: "Municipio",
                                    name: "idCiudad",
                                    queryMode: "local",
                                    reference: "idCiudad",
                                    valueField: "idCiudad",
                                    width: 400
                                }
                            ]
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: "form",
                            bodyPadding: 10,
                            border: true,
                            collapsible: true,
                            header: false,
                            id: "Form-Datos",
                            items: [
                                {
                                    xtype: "fieldset",
                                    defaults: {
                                        anchor: "100%"
                                    },
                                    items: [
                                        { xtype: "numberfield", hidden: true, name: "idFuanAfiliado", reference: "idFuanAfiliado" },
                                        {
                                            xtype: "textfield",
                                            fieldLabel: "2. No. Carné",
                                            name: "numCarnetFuanAfiliado",
                                            readOnly: true,
                                            reference: "numCarnetFuanAfiliado"
                                        },
                                        {
                                            xtype: "textfield",
                                            fieldLabel: "3. Tipo Identificación del Usuario",
                                            name: "codigoTipoIdentificacion",
                                            reference: "codigoTipoIdentificacion"
                                        },
                                        {
                                            layout: {
                                                type: "table",
                                                columns: 2
                                            },
                                            items: [
                                                {
                                                    items: [
                                                        { xtype: "textfield", fieldLabel: "4. No. Documento de Identidad", name: "identificacionFuanAfiliado", id: "identificacionFuanAfiliado", readOnly: true }
                                                    ]
                                                },
                                                {
                                                    items: [
                                                        {
                                                            xtype: "button",
                                                            disabled: true,
                                                            componentReference: [
                                                                "idFuanAfiliado", "codigoTipoIdentificacion", "identificacionFuanAfiliado",
                                                                "edadFuanAfiliado", "nombreTipoSexo", "numCarnetFuanAfiliado"
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
                                            xtype: "fieldset",
                                            defaults: {
                                                anchor: "100%"
                                            },
                                            items: [
                                                {
                                                    xtype: "combo",
                                                    bind: {
                                                        store: "{getTipoVisitaDomiciliaria}"
                                                    },
                                                    displayField: "compTipoVisitaDomiciliaria",
                                                    editable: false,
                                                    fieldLabel: "5. Visita Domiciliaria",
                                                    //idCampo: "idTipoVisitaDomiciliaria",
                                                    //listeners: {
                                                    //    select: "onSelectCombo"
                                                    //},
                                                    name: "idTipoVisitaDomiciliaria",
                                                    queryMode: "local",
                                                    reference: "idTipoVisitaDomiciliaria",
                                                    valueField: "idTipoVisitaDomiciliaria"
                                                },
                                                {
                                                    xtype: "checkbox",
                                                    fieldLabel: "6. USIS (Oficina Municipal)",
                                                    name: "usisPurisu"
                                                },
                                                {
                                                    xtype: "checkbox",
                                                    fieldLabel: "7. IPS Primaria",
                                                    name: "ipsPrimariaPurisu"
                                                },
                                                {
                                                    xtype: "checkbox",
                                                    fieldLabel: "8. Telefonica",
                                                    name: "telefonicaPurisu"
                                                },
                                                {
                                                    xtype: "checkbox",
                                                    fieldLabel: "9. CAU (Defensor del Usuario)",
                                                    name: "cauPurisu"
                                                },
                                                {
                                                    xtype: "checkbox",
                                                    fieldLabel: "10. Actividades Extramurales",
                                                    name: "actividadExtramuralPurisu"
                                                }
                                            ],
                                            title: "UBICACIÓN"
                                        },
                                        {
                                            xtype: "numberfield",
                                            fieldLabel: "11. Edad",
                                            name: "edadFuanAfiliado",
                                            readOnly: true,
                                            reference: "edadFuanAfiliado"
                                        },
                                        {
                                            xtype: "textfield",
                                            fieldLabel: "12. Genero",
                                            name: "nombreTipoSexo",
                                            readOnly: true,
                                            reference: "nombreTipoSexo"
                                        }
                                    ],
                                    title: "DATOS GENERALES"
                                },
                                {
                                    xtype: "fieldset",
                                    defaults: {
                                        anchor: "100%"
                                    },
                                    items: [
                                        {
                                            xtype: "fieldset",
                                            defaults: {
                                                anchor: "100%"
                                            },
                                            items: [
                                                {
                                                    xtype: "combo",
                                                    bind: {
                                                        store: "{getProgramaResolucion412}"
                                                    },
                                                    displayField: "compProgramaResolucion412",
                                                    editable: false,
                                                    fieldLabel: "13. Programas Res. 412",
                                                    name: "idProgramaResolucion412",
                                                    queryMode: "local",
                                                    reference: "idProgramaResolucion412",
                                                    valueField: "idProgramaResolucion412"
                                                },
                                                {
                                                    xtype: "combo",
                                                    bind: {
                                                        store: "{getGrupoInteres}"
                                                    },
                                                    displayField: "compGrupoInteres",
                                                    editable: false,
                                                    fieldLabel: "14. Programas Grupos de Interés en Salud",
                                                    name: "idGrupoInteres",
                                                    queryMode: "local",
                                                    reference: "idGrupoInteres",
                                                    valueField: "idGrupoInteres"
                                                }
                                            ],
                                            title: "Finalidad de la Canalización"
                                        },
                                        {
                                            xtype: "combo",
                                            bind: {
                                                store: "{getSeguimientoProgramasIntervencionRiesgo}"
                                            },
                                            displayField: "compSeguimientoProgramasIntervencionRiesgo",
                                            editable: false,
                                            fieldLabel: "15. Seguimiento Prog. Intervención del Riesgo",
                                            name: "idSeguimientoProgramasIntervencionRiesgo",
                                            queryMode: "local",
                                            reference: "idSeguimientoProgramasIntervencionRiesgo",
                                            valueField: "idSeguimientoProgramasIntervencionRiesgo"
                                        }
                                    ]
                                },
                                {
                                    xtype: "fieldset",
                                    defaults: {
                                        anchor: "100%"
                                    },
                                    items: [
                                        { xtype: "textfield", name: "idMotivoConsulta", hidden: true, reference: "idMotivoConsulta" },
                                        { xtype: "textfield", name: "compMotivoConsulta", hidden: true, reference: "compMotivoConsulta" },
                                        {
                                            xtype: "grid",
                                            bind: {
                                                store: "{getMotivoConsulta}"
                                            },
                                            border: true,
                                            columns: [
                                                { dataIndex: "idMotivoConsulta", header: "Id", hidden: true },
                                                {
                                                    dataIndex: "codigoMotivoConsulta", header: "Código", width: 100
                                                },
                                                {
                                                    dataIndex: "descripcionMotivoConsulta", header: "Descripción", width: 300
                                                }
                                            ],
                                            columnLines: true,
                                            height: 200,
                                            id: "Grid-MotivosConsulta",
                                            loadMask: true,
                                            selModel: {
                                                type: 'checkboxmodel',
                                                checkOnly: true, //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
                                                maxSelection: 2,
                                                idCampo: "idMotivoConsulta",
                                                compCampo: "compMotivoConsulta",
                                                listeners: {
                                                    selectionchange: "onSelectionChange"
                                                }
                                            },
                                            sortableColumns: false,
                                            tbar: {
                                                items: ["16. Motivo de Consulta (Afiliado)"]
                                            }
                                        },
                                        { xtype: "textfield", name: "idMotivoContacto", hidden: true, reference: "idMotivoContacto" },
                                        { xtype: "textfield", name: "compMotivoContacto", hidden: true, reference: "compMotivoContacto" },
                                        {
                                            xtype: "grid",
                                            bind: {
                                                store: "{getMotivoContacto}"
                                            },
                                            border: true,
                                            columns: [
                                                { dataIndex: "idMotivoContacto", header: "Id", hidden: true },
                                                {
                                                    dataIndex: "codigoMotivoContacto", header: "Código", width: 100
                                                },
                                                {
                                                    dataIndex: "descripcionMotivoContacto", header: "Descripción", width: 300
                                                }
                                            ],
                                            columnLines: true,
                                            height: 200,
                                            id: "Grid-MotivosContacto",
                                            loadMask: true,
                                            selModel: {
                                                type: 'checkboxmodel',
                                                checkOnly: true, //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
                                                maxSelection: 2,
                                                idCampo: "idMotivoContacto",
                                                compCampo: "compMotivoContacto",
                                                listeners: {
                                                    selectionchange: "onSelectionChange"
                                                }
                                            },
                                            sortableColumns: false,
                                            tbar: {
                                                items: ["17. Motivo de Contacto (EPS-S)"]
                                            }
                                        },
                                        {
                                            xtype: "numberfield",
                                            fieldLabel: "18. No. de Autorización",
                                            minValue: 0,
                                            name: "numAutorizacionPurisu"
                                        }
                                    ],
                                    title: "INFORMACIÓN Y ORIENTACIÓN"
                                },
                                {
                                    xtype: "fieldset",
                                    defaults: {
                                        anchor: "100%"
                                    },
                                    items: [
                                        {
                                            xtype: "combo",
                                            bind: {
                                                store: "{getGruposFocales}"
                                            },
                                            displayField: "compGruposFocales",
                                            editable: false,
                                            fieldLabel: "19. Código del Grupo Focal",
                                            name: "idGruposFocales",
                                            queryMode: "local",
                                            reference: "idGruposFocales",
                                            valueField: "idGruposFocales"
                                        },
                                        {
                                            xtype: "fieldset",
                                            defaults: {
                                                anchor: "100%"
                                            },
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
                                                    fieldLabel: "ET",
                                                    listeners: {
                                                        select: "onSelectCombo"
                                                    },
                                                    name: "idEje",
                                                    queryMode: "local",
                                                    reference: "idEje",
                                                    valueField: "idEje"
                                                },
                                                {
                                                    xtype: "combo",
                                                    allowBlank: false,
                                                    bind: {
                                                        store: "{getUnidad}"
                                                    },
                                                    campoDependent: "idModulo",
                                                    dependent: true,
                                                    displayField: "compUnidad",
                                                    fieldLabel: "U",
                                                    editable: false,
                                                    listeners: {
                                                        select: "onSelectCombo"
                                                    },
                                                    name: "idUnidad",
                                                    queryMode: "local",
                                                    reference: "idUnidad",
                                                    valueField: "idUnidad"
                                                },
                                                {
                                                    xtype: "combo",
                                                    allowBlank: false,
                                                    bind: {
                                                        store: "{getModulo}"
                                                    },
                                                    displayField: "compModulo",
                                                    editable: false,
                                                    fieldLabel: "M",
                                                    name: "idModulo",
                                                    queryMode: "local",
                                                    reference: "idModulo",
                                                    valueField: "idModulo"
                                                },
                                                {
                                                    xtype: "combo",
                                                    allowBlank: false,
                                                    bind: {
                                                        store: "{getEje}"
                                                    },
                                                    campoDependent: "idUnidad1",
                                                    dependent: true,
                                                    displayField: "compEje",
                                                    editable: false,
                                                    fieldLabel: "ET",
                                                    listeners: {
                                                        select: "onSelectCombo"
                                                    },
                                                    name: "idEje1",
                                                    queryMode: "local",
                                                    reference: "idEje1",
                                                    valueField: "idEje"
                                                },
                                                {
                                                    xtype: "combo",
                                                    allowBlank: false,
                                                    bind: {
                                                        store: "{getUnidad}"
                                                    },
                                                    campoDependent: "idModulo1",
                                                    dependent: true,
                                                    displayField: "compUnidad",
                                                    fieldLabel: "U",
                                                    editable: false,
                                                    listeners: {
                                                        select: "onSelectCombo"
                                                    },
                                                    name: "idUnidad1",
                                                    queryMode: "local",
                                                    reference: "idUnidad1",
                                                    valueField: "idUnidad"
                                                },
                                                {
                                                    xtype: "combo",
                                                    allowBlank: false,
                                                    bind: {
                                                        store: "{getModulo}"
                                                    },
                                                    displayField: "compModulo",
                                                    editable: false,
                                                    fieldLabel: "M",
                                                    name: "idModulo1",
                                                    queryMode: "local",
                                                    reference: "idModulo1",
                                                    valueField: "idModulo"
                                                }
                                            ],
                                            title: "PIEFI"
                                        }
                                    ],
                                    title: "EDUCACIÓN Y FORMACIÓN INTEGRAL"
                                },
                                { xtype: "textfield", name: "idPiezasInformativas", hidden: true, reference: "idPiezasInformativas" },
                                { xtype: "textfield", name: "compPiezasInformativas", hidden: true, reference: "compPiezasInformativas" },
                                {
                                    xtype: "grid",
                                    bind: {
                                        store: "{getPiezasInformativas}"
                                    },
                                    border: true,
                                    columns: [
                                        { dataIndex: "idPiezasInformativas", header: "Id", hidden: true },
                                        {
                                            dataIndex: "codigoPiezasInformativas", header: "Código", width: 100
                                        },
                                        {
                                            dataIndex: "descripcionPiezasInformativas", header: "Descripción", width: 300
                                        }
                                    ],
                                    columnLines: true,
                                    height: 200,
                                    id: "Grid-PiezasInformativas",
                                    loadMask: true,
                                    selModel: {
                                        type: 'checkboxmodel',
                                        checkOnly: true, //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
                                        maxSelection: 3,
                                        idCampo: "idPiezasInformativas",
                                        compCampo: "compPiezasInformativas",
                                        listeners: {
                                            selectionchange: "onSelectionChange"
                                        }
                                    },
                                    sortableColumns: false,
                                    tbar: {
                                        items: ["20. Código de Piezas Informátivas Entregadas al Usuario"]
                                    }
                                },
                                {
                                    layout: {
                                        type: "table",
                                        columns: 2
                                    },
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
                                                        'uploaddatacomplete': "onUploadDataComplete",
                                                        'uploaderror': "onUploadError"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            items: [
                                                { xtype: "textfield", name: "firmaPurisu", hidden: true, reference: "firmaPurisu" },
                                                {
                                                    xtype: "button",
                                                    iconCls: "x-fa fa-minus-circle",
                                                    textAlign: "left",
                                                    handler: "onBotonEliminarArchivoClick",
                                                    reference: "botonEliminar",
                                                    width: 250
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            region: "west",
                            scrollable: true,
                            split: true,
                            tbar: {
                                items: [
                                    {
                                        combos: [
                                            "idTipoVisitaDomiciliaria", "idProgramaResolucion412", "idGrupoInteres", "idSeguimientoProgramasIntervencionRiesgo",
                                            "idGruposFocales", "idEje", "idUnidad", "idModulo", "idEje1", "idUnidad1", "idModulo1"
                                        ],
                                        campos: [
                                            "compTipoVisitaDomiciliaria", "compProgramaResolucion412", "compGrupoInteres", "compSeguimientoProgramasIntervencionRiesgo",
                                            "compGruposFocales", "compEje", "compUnidad", "compModulo", "compEje1", "compUnidad1", "compModulo1"
                                        ],
                                        disabled: true,
                                        handler: "onBotonGridAdicionarClick",
                                        iconCls: "x-fa fa-plus-circle",
                                        reference: "botonGridAdicionar",
                                        text: "Agregar datos a lista"
                                    }
                                ]
                            },
                            width: 500
                        },
                        {
                            xtype: "grid",
                            bind: {
                                store: "{setItemsPurisu}"
                            },
                            border: true,
                            columns: [
                                { xtype: "rownumberer" },
                                {
                                    text: "DATOS GENERALES", columns: [
                                        {
                                            dataIndex: "numCarnePurisu", header: "2. No. Carné"
                                        },
                                        {
                                            dataIndex: "codigoTipoIdentificacion", header: "3. Tipo Identificación del Usuario"
                                        },
                                        {
                                            dataIndex: "identificacionFuanAfiliado", header: "4. No. Documento de Identidad"
                                        },
                                        {
                                            text: "UBICACIÓN", columns: [
                                                {
                                                    dataIndex: "compTipoVisitaDomiciliaria", header: "5. Visita Domiciliaria"
                                                },
                                                {
                                                    xtype: "checkcolumn", dataIndex: "usisPurisu", header: "6. USIS (Oficina Municipal)"
                                                },
                                                {
                                                    xtype: "checkcolumn", dataIndex: "ipsPrimariaPurisu", header: "7. IPS Primaria"
                                                },
                                                {
                                                    xtype: "checkcolumn", dataIndex: "telefonicaPurisu", header: "8. Telefonica"
                                                },
                                                {
                                                    xtype: "checkcolumn", dataIndex: "cauPurisu", header: "9. CAU (Defensor del Usuario)"
                                                },
                                                {
                                                    xtype: "checkcolumn", dataIndex: "actividadExtramuralPurisu", header: "10. Actividades Extramurales"
                                                }
                                            ]
                                        },
                                        {
                                            dataIndex: "edadFuanAfiliado", header: "11. Edad"
                                        },
                                        {
                                            dataIndex: "nombreTipoSexo", header: "12. Genero"
                                        }
                                    ]
                                },
                                {
                                    text: "",
                                    columns: [
                                        {
                                            text: "Finalidad de la Canalización", columns: [
                                                {
                                                    dataIndex: "compProgramaResolucion412", header: "13. Programas Res. 412"
                                                },
                                                {
                                                    dataIndex: "compGrupoInteres", header: "14. Programas Grupos de Interés en Salud"
                                                }
                                            ]
                                        },
                                        {
                                            dataIndex: "compSeguimientoProgramasIntervencionRiesgo", header: "15. Seguimiento Prog. Intervención del Riesgo"
                                        }
                                    ]
                                },
                                {
                                    text: "INFORMACIÓN Y ORIENTACIÓN",
                                    columns: [
                                        {
                                            dataIndex: "compMotivoConsulta", header: "16. Motivo de Consulta (Afiliado)"
                                        },
                                        {
                                            cellWrap: true, dataIndex: "compMotivoContacto", header: "17. Motivo de Contacto (EPS-S)"
                                        },
                                        {
                                            dataIndex: "numAutorizacionPurisu", header: "18. No. de Autorización"
                                        }
                                    ]
                                },
                                {
                                    text: "EDUCACIÓN Y FORMACIÓN INTEGRAL",
                                    columns: [
                                        {
                                            dataIndex: "compGruposFocales", header: "19. Código del Grupo Focal"
                                        },
                                        {
                                            text: "PIEFI", columns: [
                                                {
                                                    dataIndex: "compEje", header: "ET"
                                                },
                                                {
                                                    dataIndex: "compUnidad", header: "U"
                                                },
                                                {
                                                    dataIndex: "compModulo", header: "M"
                                                },
                                                {
                                                    dataIndex: "compEje1", header: "ET"
                                                },
                                                {
                                                    dataIndex: "compUnidad1", header: "U"
                                                },
                                                {
                                                    dataIndex: "compModulo1", header: "M"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    cellWrap: true, dataIndex: "compPiezasInformativas", header: "20. Código de Piezas Informátivas Entregadas al Usuario"
                                }
                            ],
                            columnLines: true,
                            id: "Grid-Purisu-Principal",
                            plugins: {
                                ptype: 'cellediting',
                                clicksToEdit: 1
                            },
                            region: "center",
                            sortableColumns: false,
                            tbar: {
                                items: [
                                    { disabled: true, handler: "onBotonGridRemoverClick", iconCls: "x-fa fa-minus-circle", reference: "botonGridRemover", text: "Remover" }
                                ]
                            }
                        }
                    ],
                    layout: "border",
                    height: 450
                }
            ]
        }
    ]
});