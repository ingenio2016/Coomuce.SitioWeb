Ext.define("CoomuceMod.view.ActualizacionBd.Afiliacion", {
    extend: "Ext.panel.Panel",

    requires: [
    "CoomuceMod.view.ActualizacionBd.AfiliacionController",
    "CoomuceMod.view.ActualizacionBd.AfiliacionModel"
    ],

    controller: "actualizacionbd-afiliacion",
    viewModel: { type: "actualizacionbd-afiliacion" },

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
        id: "Form-Afiliacion",
        scrollable: true,
        items: [
        {
            xtype: "fieldset",
            defaults: {
                allowBlank: false,
                anchor: "100%",
                labelWidth: 150
            },
            items: [
            { xtype: "numberfield", hidden: true, name: "idTipoTramite", value: 1 },
            {
                xtype: "combo",
                bind: {
                    store: "{getTipoAfiliacion}"
                },
                displayField: "compTipoAfiliacion",
                editable: false,
                fieldLabel: "Tipo de Afiliación",
                name: "idTipoAfiliacion",
                queryMode: "local",
                valueField: "idTipoAfiliacion"
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getTipoRegimen}"
                },
                componentReference: ["arlFuanAfiliado", "pensionFuanAfiliado", "ibcFuanAfiliado"],
                displayField: "compTipoRegimen",
                editable: false,
                fieldLabel: "Régimen",
                listeners: {
                    select: "onSelectCombo"
                },
                name: "idTipoRegimen",
                regimen: true,
                queryMode: "local",
                valueField: "idTipoRegimen"
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getTipoAfiliado}"
                },
                displayField: "compTipoAfiliado",
                editable: false,
                fieldLabel: "Tipo de Afiliado",
                name: "idTipoAfiliado",
                queryMode: "local",
                valueField: "idTipoAfiliado"
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getTipoCotizante}"
                },
                displayField: "compTipoCotizante",
                editable: false,
                fieldLabel: "Tipo de Cotizante",
                name: "idTipoCotizante",
                queryMode: "local",
                valueField: "idTipoCotizante"
            },
            {
                xtype: "textfield",
                fieldLabel: "Código<br />(A registrar por la EPS.)",
                name: "codigoCotizanteFuan",
                value: ""
            }
            ],
            title: "I. DATOS DEL TRAMITE"
        },
        {
            xtype: "fieldset",
            defaults: {
                allowBlank: false,
                anchor: "100%",
                labelWidth: 150
            },
            items: [
            {
                xtype: "textfield",
                fieldLabel: "Primer apellido",
                name: "primerApellidoFuanAfiliado"
            },
            {
                xtype: "textfield",
                allowBlank: true,
                fieldLabel: "Segundo apellido",
                name: "segundoApellidoFuanAfiliado"
            },
            {
                xtype: "textfield",
                fieldLabel: "Primer nombre",
                name: "primerNombreFuanAfiliado"
            },
            {
                xtype: "textfield",
                allowBlank: true,
                fieldLabel: "Segundo nombre",
                name: "segundoNombreFuanAfiliado"
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getTipoIdentificacion}"
                },
                displayField: "compTipoIdentificacion",
                editable: false,
                fieldLabel: "Tipo documento de identidad",
                name: "idTipoIdentificacionII",
                reference: "idTipoIdentificacionII",
                queryMode: "local",
                valueField: "idTipoIdentificacion"
            },
            {
                xtype: "numberfield",
                fieldLabel: "Número de documento de identidad",
                name: "identificacionFuanAfiliado",
                value: 0
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getTipoSexo}"
                },
                displayField: "compTipoSexo",
                editable: false,
                fieldLabel: "Sexo",
                name: "idTipoSexoII",
                queryMode: "local",
                valueField: "idTipoSexo"
            },
            {
                xtype: "datefield",
                fieldLabel: "Fecha de nacimiento",
                name: "fechaNacimientoFuanAfiliado"
            }
            ],
            title: "II. DATOS BÁSICOS DE IDENTIFICACIÓN<br />(del cotizante o cabeza de familia)"
        },
        {
            xtype: "fieldset",
            defaults: {
                allowBlank: false,
                anchor: "100%",
                labelWidth: 150
            },
            items: [
            {
                xtype: "label",
                html: "<b>Datos Personales</b>"
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getTipoEtnia}"
                },
                displayField: "compTipoEtnia",
                editable: false,
                fieldLabel: "Etnia",
                name: "idTipoEtnia",
                queryMode: "local",
                valueField: "idTipoEtnia"
            },
            {
                xtype: "combo",
                allowBlank: true,
                bind: {
                    store: "{getTipoDiscapacidad}"
                },
                displayField: "compTipoDiscapacidad",
                editable: false,
                fieldLabel: "Tipo discapacidad",
                name: "idTipoDiscapacidad",
                queryMode: "local",
                valueField: "idTipoDiscapacidad"
            },
            {
                xtype: "combo",
                allowBlank: true,
                bind: {
                    store: "{getCondicionDiscapacidad}"
                },
                displayField: "compCondicionDiscapacidad",
                editable: false,
                fieldLabel: "Condición discapacidad",
                name: "idCondicionDiscapacidad",
                queryMode: "local",
                valueField: "idCondicionDiscapacidad"
            },
            {
                xtype: "textfield",
                fieldLabel: "Puntaje SISBEN",
                listeners: {
                    blur: "onDecimalNumber"
                },
                name: "puntajeSisbenFuanAfiliado"
            },
            {
                xtype: "numberfield",
                fieldLabel: "No. Carnet",
                name: "numCarnetFuanAfiliado"
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getGrupoPoblacional}"
                },
                displayField: "compGrupoPoblacional",
                editable: false,
                fieldLabel: "Grupo de población especial",
                name: "idGrupoPoblacional",
                queryMode: "local",
                valueField: "idGrupoPoblacional"
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getArl}"
                },
                displayField: "nombreCompleto",
                editable: false,
                fieldLabel: "Administradora de Riesgos Laborales - ARL",
                name: "arlFuanAfiliado",
                reference: "arlFuanAfiliado",
                queryMode: "local",
                valueField: "Id",
                allowBlank: true
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getAfp}"
                },
                displayField: "nombreCompleto",
                editable: false,
                fieldLabel: "Administradora de Pensiones",
                name: "pensionFuanAfiliado",
                reference: "pensionFuanAfiliado",
                queryMode: "local",
                valueField: "Id",
                allowBlank: true
            },
            {
                xtype: "numberfield",
                allowBlank: true,
                fieldLabel: "Ingreso Base de Cotización - IBC",
                listeners: {
                    blur: "onBlurNumber"
                },
                name: "ibcFuanAfiliado",
                reference: "ibcFuanAfiliado",
                readOnly: true,
                value: Coomuce.Util.DatosUsuario.salarioMinimo
            },
            {
                xtype: "textfield",
                fieldLabel: "Dirección residencia",
                name: "direccionFuanAfiliado"
            },
            {
                xtype: "numberfield",
                allowBlank: true,
                fieldLabel: "Teléfono Fijo",
                name: "telefonoFuanAfiliado",
                value: 0
            },
            {
                xtype: "numberfield",
                allowBlank: true,
                fieldLabel: "Teléfono Celular",
                name: "celularFuanAfiliado",
                value: 0
            },
            {
                xtype: "textfield",
                allowBlank: true,
                fieldLabel: "Correo Electrónico",
                name: "emailFuanAfiliado",
                vtype: "email"
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getDepartamento}"
                },
                ciudadReference: "idCiudadfIII",
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
                name: "idCiudadIII",
                queryMode: "local",
                reference: "idCiudadfIII",
                valueField: "idCiudad"
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getTipoZona}"
                },
                displayField: "compTipoZona",
                editable: false,
                fieldLabel: "Zona",
                name: "idTipoZona",
                queryMode: "local",
                valueField: "idTipoZona"
            },
            {
                xtype: "textfield",
                allowBlank: true,
                fieldLabel: "Localidad / Comuna",
                name: "barrioFuanAfiliado"
            }
            ],
            title: "III. DATOS COMPLEMENTARIOS"
        },
        {
            xtype: "fieldset",
            defaults: {
                allowBlank: true,
                anchor: "100%",
                labelWidth: 150
            },
            items: [
            {
                xtype: "label",
                html: "<b>Datos básicos de Identificación del cónyuge o compañero(a) permanente cotizante</b>"
            },
            {
                xtype: "textfield",
                fieldLabel: "Primer apellido",
                name: "primerApellidoConyugueFuanAfiliado"
            },
            {
                xtype: "textfield",
                fieldLabel: "Segundo apellido",
                name: "segundoApellidoConyugueFuanAfiliado"
            },
            {
                xtype: "textfield",
                fieldLabel: "Primer nombre",
                name: "primerNombreConyugueFuanAfiliado"
            },
            {
                xtype: "textfield",
                fieldLabel: "Segundo nombre",
                name: "segundoNombreConyugueFuanAfiliado"
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getTipoIdentificacion}"
                },
                displayField: "compTipoIdentificacion",
                editable: false,
                fieldLabel: "Tipo documento de identidad",
                name: "idTipoIdentificacionConyugue",
                queryMode: "local",
                valueField: "idTipoIdentificacion"
            },
            {
                xtype: "numberfield",
                fieldLabel: "Número de documento de identidad",
                name: "identificacionConyugueFuanAfiliado",
                value: 0
            },
            {
                xtype: "combo",
                bind: {
                    store: "{getTipoSexo}"
                },
                displayField: "compTipoSexo",
                editable: false,
                fieldLabel: "Sexo",
                name: "idTipoSexoConyugueFuanAfiliado",
                queryMode: "local",
                valueField: "idTipoSexo"
            },
            {
                xtype: "datefield",
                fieldLabel: "Fecha de nacimiento",
                name: "fechaNacimientoConyugueFuanAfiliado"
            },
            {
                xtype: "grid",
                bind: {
                    store: "{setFuanBeneficiario}"
                },
                border: true,
                columns: [
                {
                    dataIndex: "primerApellidoFuanAfiliado", header: "Primer apellido", width: 160, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "segundoApellidoFuanAfiliado", header: "Segundo apellido", width: 160, editor: {
                        allowBlank: true
                    }
                },
                {
                    dataIndex: "primerNombreFuanAfiliado", header: "Primer nombre", width: 160, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "segundoNombreFuanAfiliado", header: "Segundo nombre", width: 160, editor: {
                        allowBlank: true
                    }
                },
                {
                    dataIndex: "idTipoIdentificacion", header: "Id Identificación", hidden: true
                },
                {
                    dataIndex: "compTipoIdentificacion", header: "Tipo de documento de identidad", width: 250, editor: {
                        xtype: "combo",
                        bind: {
                            store: "{getTipoIdentificacion}"
                        },
                        displayField: "compTipoIdentificacion",
                        editable: false,
                        idCampo: "idTipoIdentificacion",
                        listeners: {
                            select: "onSelectCombo"
                        },
                        queryMode: "local",
                        valueField: "compTipoIdentificacion"
                    }
                },
                {
                    dataIndex: "identificacionFuanAfiliado", header: "Número de documento de identidad", width: 200, editor: {
                        xtype: "numberfield",
                        allowBlank: true
                    }
                },
                {
                    dataIndex: "idTipoSexo", header: "Id Tipo Sexo", hidden: true
                },
                {
                    dataIndex: "compTipoSexo", header: "Sexo", width: 160, editor: {
                        xtype: "combo",
                        bind: {
                            store: "{getTipoSexo}"
                        },
                        displayField: "compTipoSexo",
                        editable: false,
                        idCampo: "idTipoSexo",
                        listeners: {
                            select: "onSelectCombo"
                        },
                        queryMode: "local",
                        valueField: "compTipoSexo"
                    }
                },
                {
                    dataIndex: "fechaNacimientoFuanAfiliado", header: "Fecha de nacimiento", width: 160, editor: {
                        xtype: "datefield",
                        format: "d/m/Y"
                    }
                },
                {
                    text: "DATOS COMPLEMENTARIOS",
                    columns: [
                                        //{ dataIndex: "numCarnetFuanAfiliado", header: "No. Carnet" },
                                        {
                                            dataIndex: "idTipoParentesco", header: "Id Tipo Parentesco", hidden: true
                                        },
                                        {
                                            dataIndex: "compTipoParentesco", header: "Parentesco", width: 160, editor: {
                                                xtype: "combo",
                                                bind: {
                                                    store: "{getTipoParentesco}"
                                                },
                                                displayField: "compTipoParentesco",
                                                editable: false,
                                                idCampo: "idTipoParentesco",
                                                listeners: {
                                                    select: "onSelectCombo"
                                                },
                                                queryMode: "local",
                                                valueField: "compTipoParentesco"
                                            }
                                        },
                                        {
                                            dataIndex: "idTipoEtnia", header: "Id Tipo Etnia", hidden: true
                                        },
                                        {
                                            dataIndex: "compTipoEtnia", header: "Etnia", width: 160, editor: {
                                                xtype: "combo",
                                                bind: {
                                                    store: "{getTipoEtnia}"
                                                },
                                                displayField: "compTipoEtnia",
                                                editable: false,
                                                idCampo: "idTipoEtnia",
                                                listeners: {
                                                    select: "onSelectCombo"
                                                },
                                                queryMode: "local",
                                                valueField: "compTipoEtnia"
                                            }
                                        },
                                        {
                                            text: "Discapacidad",
                                            columns: [
                                            {
                                                dataIndex: "idTipoDiscapacidad", header: "Id Tipo Discapacidad", hidden: true
                                            },
                                            {
                                                dataIndex: "compTipoDiscapacidad", header: "Tipo", width: 160, editor: {
                                                    xtype: "combo",
                                                    bind: {
                                                        store: "{getTipoDiscapacidad}"
                                                    },
                                                    displayField: "compTipoDiscapacidad",
                                                    editable: false,
                                                    idCampo: "idTipoDiscapacidad",
                                                    listeners: {
                                                        select: "onSelectCombo"
                                                    },
                                                    queryMode: "local",
                                                    valueField: "compTipoDiscapacidad"
                                                }
                                            },
                                            {
                                                dataIndex: "idCondicionDiscapacidad", header: "Id Condición Discapacidad", hidden: true
                                            },
                                            {
                                                dataIndex: "compCondicionDiscapacidad", header: "Condición", width: 160, editor: {
                                                    xtype: "combo",
                                                    bind: {
                                                        store: "{getCondicionDiscapacidad}"
                                                    },
                                                    displayField: "compCondicionDiscapacidad",
                                                    editable: false,
                                                    idCampo: "idCondicionDiscapacidad",
                                                    listeners: {
                                                        select: "onSelectCombo"
                                                    },
                                                    queryMode: "local",
                                                    valueField: "compCondicionDiscapacidad"
                                                }
                                            }
                                            ]
                                        },
                                        {
                                            text: "Datos de Residencia",
                                            columns: [
                                            {
                                                dataIndex: "idDepartamento", header: "Id Departamento", hidden: true
                                            },
                                            {
                                                dataIndex: "compDepartamento", header: "Departamento", width: 160, editor: {
                                                    xtype: "combo",
                                                    bind: {
                                                        store: "{getDepartamento}"
                                                    },
                                                    displayField: "compDepartamento",
                                                    editable: false,
                                                    idCampo: "idDepartamento",
                                                    listeners: {
                                                        select: "onSelectCombo"
                                                    },
                                                    queryMode: "local",
                                                    valueField: "compDepartamento"
                                                }
                                            },
                                            {
                                                dataIndex: "idCiudad", header: "Id Ciudad", hidden: true
                                            },
                                            {
                                                dataIndex: "compCiudad", header: "Municipio/Distrito", width: 160, editor: {
                                                    xtype: 'combo',
                                                    allowBlank: false,
                                                    bind: { store: '{getCiudad}' },
                                                    displayField: 'compCiudad',
                                                    editable: false,
                                                    idCampo: "idCiudad",
                                                    listeners: {
                                                        focus: "onFocusCombo",
                                                        select: "onSelectCombo"
                                                    },
                                                    queryMode: 'local',
                                                    valueField: 'compCiudad'
                                                }
                                            },
                                            {
                                                dataIndex: "idTipoZona", header: "Id Tipo Zona", hidden: true
                                            },
                                            {
                                                dataIndex: "compTipoZona", header: "Zona", width: 160, editor: {
                                                    xtype: "combo",
                                                    bind: {
                                                        store: "{getTipoZona}"
                                                    },
                                                    displayField: "compTipoZona",
                                                    editable: false,
                                                    idCampo: "idTipoZona",
                                                    listeners: {
                                                        select: "onSelectCombo"
                                                    },
                                                    queryMode: "local",
                                                    valueField: "compTipoZona"
                                                }
                                            },
                                            {
                                                dataIndex: "telefonoFuanAfiliado", header: "Teléfono Fijo y/o Celular", width: 200, editor: {
                                                    xtype: "numberfield",
                                                    allowBlank: true
                                                }
                                            },
                                            {
                                                dataIndex: "upcFuanAfiliado", header: "Valor de la UPC del afiliado adicional", width: 250, editor: {
                                                    xtype: "numberfield",
                                                    decimalPrecision: 0
                                                }
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
                                                xtype: "widgetcolumn", dataIndex: "identificacionAnexo", header: "Anexo documento", width: 200, widget: {
                                                    xtype: "button",
                                                    iconCls: "x-fa fa-minus-circle",
                                                    textAlign: "left",
                                                    handler: "onBotonEliminarArchivoClick"
                                                }
                                            }
                                        ]
                                    }
                                    ]
                                }
                                ],
                                columnLines: true,
                                height: 250,
                                id: "Grid-Beneficiarios",
                                plugins: {
                                    ptype: 'cellediting',
                                    clicksToEdit: 1
                                },
                                sortableColumns: false,
                                title: "Datos básicos de identificación de los beneficiarios y los afiliados adicionales",
                                tools: [
                                { handler: "onToolBeneficiarioAdicionarClick", tooltip: "Adicionar beneficiario", type: "plus" },
                                { handler: "onToolBeneficiarioRemoverClick", tooltip: "Remover beneficiario", type: "minus" }
                                ]
                            },
                            { xtype: "label", html: "&nbsp;" },
                            {
                                xtype: "grid",
                                bind: {
                                    store: "{setFuanIpsPrimaria}"
                                },
                                border: true,
                                columns: [
                                {
                                    text: "Nombre de la Institución Prestadora de Servicios de Salud - IPS",
                                    columns: [
                                    {
                                        dataIndex: "tipoFuanIpsPrimariaAfiliado", header: "Tipo", width: 160, editor: {
                                            xtype: "combo",
                                            displayField: "nombre",
                                            editable: false,
                                            queryMode: "local",
                                            store: Ext.create("Ext.data.ArrayStore", {
                                                fields: [
                                                "nombre"
                                                ],
                                                data: [
                                                ["C"], ["B"]
                                                ]
                                            }),
                                            valueField: "nombre"
                                        }
                                    },
                                    {
                                        dataIndex: "nombreCompletoIps", name: "nombreCompletoIps", header: "", readOnly: true, width: 400, editor: {
                                            allowBlank: false,
                                            readOnly: true                                            }
                                        }
                                        ]
                                    },
                                    {
                                        dataIndex: "codigoFuanIpsPrimariaAfiliado", header: "Código de la IPS<br />(A registrar por la EPS)", width: 300, editor: {
                                            allowBlank: true
                                        }
                                    },
                                    {
                                        xtype: "widgetcolumn", header: "", width: 40, widget: {
                                            xtype: "button",
                                            componentReference: [
                                            "nombreCompletoIps"
                                            ],
                                            handler: Coomuce.Util.buscarIpsAfiliacion,
                                            inGrid: true,
                                            iconCls: "x-fa fa-list-alt",
                                            tooltip: "Lista de Ips"
                                        }
                                    }
                                    ],
                                    columnLines: true,
                                    height: 200,
                                    id: "Grid-IpsPrimaria",
                                    plugins: {
                                        ptype: 'cellediting',
                                        clicksToEdit: 1
                                    },
                                    sortableColumns: false,
                                    title: "Selección de la EPS primaria",
                                    tools: [
                                    { handler: "onToolIpsPrimariaAdicionarClick", tooltip: "Adicionar IPS", type: "plus" },
                                    { handler: "onToolIpsPrimariaRemoverClick", tooltip: "Remover IPS", type: "minus" }
                                    ]
                                }
                                ],
                                title: "IV. DATOS DE IDENTIFICACIÓN DE LOS MIEMBROS DEL NÚCLEO FAMILIAR"
                            },
                            {
                                xtype: "fieldset",
                                defaults: {
                                    allowBlank: true,
                                    anchor: "100%",
                                    labelWidth: 150
                                },
                                items: [
                                {
                                    xtype: "textfield",
                                    fieldLabel: "Nombre o Razón Social",
                                    name: "nombreFuanEmpleadorAfiliado"
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
                                    valueField: "idTipoIdentificacion"
                                },
                                {
                                    xtype: "numberfield",
                                    fieldLabel: "Número de documento de identidad",
                                    name: "identificacionFuanEmpleadorAfiliado",
                                    value: 0
                                },
                                {
                                    xtype: "textfield",
                                    fieldLabel: "Tipo de aportante o pagador pensiones (A registrar por la EPS)",
                                    name: "tipoPagadorFuanEmpleadorAfiliado"
                                },
                                {
                                    xtype: "textfield",
                                    fieldLabel: "Dirección",
                                    name: "direccionFuanEmpleadorAfiliado"
                                },
                                {
                                    xtype: "numberfield",
                                    fieldLabel: "Teléfono",
                                    name: "telefonoFuanEmpleadorAfiliado",
                                    value: 0
                                },
                                {
                                    xtype: "textfield",
                                    fieldLabel: "Correo Electrónico",
                                    name: "emailFuanEmpleadorAfiliado",
                                    vtype: "email"
                                },
                                {
                                    xtype: "combo",
                                    bind: {
                                        store: "{getDepartamento}"
                                    },
                                    ciudadReference: "idCiudadfV",
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
                                    name: "idCiudadV",
                                    queryMode: "local",
                                    reference: "idCiudadfV",
                                    valueField: "idCiudad"
                                }
                                ],
                                title: "V. DATOS DE IDENTIFICACIÓN DEL EMPLEADOR Y OTROS APORTANTES <br />DE LAS ENTIDADES RESPONSABLES DE LA AFILIACIÓN COLECTIVA, INSTITUCIONAL O DE OFICIO"
                            },
                            {
                                xtype: "fieldset",
                                defaults: {
                                    anchor: "100%"
                                },
                                items: [
                                { xtype: "textfield", name: "valorFuanDeclaracionAutorizacion", hidden: true, reference: "valorFuanDeclaracionAutorizacion" },
                                { xtype: "textfield", name: "compDeclaracionAutorizacion", hidden: true, reference: "compDeclaracionAutorizacion" },
                                {
                                    xtype: "grid",
                                    bind: {
                                        store: "{getDeclaracionAutorizacion}"
                                    },
                                    columns: [
                                    { dataIndex: "valorFuanDeclaracionAutorizacion", width: 40, hidden: true },
                                    { dataIndex: "compDeclaracionAutorizacion", header: "Descripción", width: 700 }

                                    ],
                                    columnLines: true,
                                    height: 300,
                                    loadMask: true,
                                    selModel: {
                                        type: 'checkboxmodel',
                                                checkOnly: true, //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
                                                idCampo: "valorFuanDeclaracionAutorizacion",
                                                compCampo: "compDeclaracionAutorizacion",
                                                listeners: {
                                                    selectionchange: "onSelectionChange"
                                                }
                                            },
                                            sortableColumns: false,
                                            hideHeaders: true,
                                            id: "Grid-DeclaracionAutorizacion"
                                        }
                                        ],
                                        title: "VII. DECLARACION Y AUTORIZACIONES"
                                    },
                                    /*{
                                        xtype: 'filefield',
                                        name: 'photo',
                                        fieldLabel: 'Firma',
                                        labelWidth: 50,
                                        msgTarget: 'side',
                                        allowBlank: false,
                                        anchor: '100%',
                                        buttonText: 'Cargar Archivo'
                                    }*/
                                    {
                                        xtype: "fieldset",
                                        bodyPadding: 10,
                                        layout: {
                                            type: "hbox"
                                        },
                                        items: [
                                        {
                                            xtype: "fieldset",
                                            width: 1000,
                                            bodyPadding: 10,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "Firma",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarFirma",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadFirmaDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "firmaNovedad", hidden: true, reference: "firmaNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarFirmaClick",
                                                reference: "botonEliminarFirma",
                                                width: 250
                                            }
                                            ],
                                            title: "El cotizante, beneficiario o cabeza de familia"
                                        }
                                        ],
                                        title: "VIII. FIRMAS"
                                    },
                                    {
                                        xtype: "fieldset",
                                        bodyPadding: 10,
                                        layout: {
                                            type: "vbox"
                                        },
                                        items: [
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: "numberfield",
                                                fieldLabel: "CN",
                                                labelWidth: 20,
                                                width: 70,
                                                name: "CNQuantity",
                                                reference: "CNQuantity",
                                                readOnly: true,
                                                value: 0
                                            },
                                            {
                                                xtype: "numberfield",
                                                fieldLabel: "RC",
                                                labelWidth: 20,
                                                width: 70,
                                                name: "RCQuantity",
                                                reference: "RCQuantity",
                                                readOnly: true,
                                                value: 0
                                            },
                                            {
                                                xtype: "numberfield",
                                                fieldLabel: "TI",
                                                labelWidth: 20,
                                                width: 70,
                                                name: "TIQuantity",
                                                reference: "TIQuantity",
                                                readOnly: true,
                                                value: 0
                                            },
                                            {
                                                xtype: "numberfield",
                                                fieldLabel: "CC",
                                                labelWidth: 20,
                                                width: 70,
                                                name: "CCQuantity",
                                                reference: "CCQuantity",
                                                readOnly: true,
                                                value: 0
                                            },
                                            {
                                                xtype: "numberfield",
                                                fieldLabel: "PA",
                                                labelWidth: 20,
                                                width: 70,
                                                name: "PAQuantity",
                                                reference: "PAQuantity",
                                                readOnly: true,
                                                value: 0
                                            },
                                            {
                                                xtype: "numberfield",
                                                fieldLabel: "CE",
                                                labelWidth: 20,
                                                width: 70,
                                                name: "CEQuantity",
                                                reference: "CEQuantity",
                                                readOnly: true,
                                                value: 0
                                            },
                                            {
                                                xtype: "numberfield",
                                                fieldLabel: "CD",
                                                labelWidth: 20,
                                                width: 70,
                                                name: "CDQuantity",
                                                reference: "CDQuantity",
                                                readOnly: true,
                                                value: 0
                                            },
                                            {
                                                xtype: "numberfield",
                                                fieldLabel: "CS",
                                                labelWidth: 20,
                                                width: 70,
                                                name: "CSQuantity",
                                                reference: "CSQuantity",
                                                readOnly: true,
                                                value: 0
                                            },
                                            {
                                                xtype: "numberfield",
                                                fieldLabel: "Total",
                                                labelWidth: 50,
                                                width: 100,
                                                name: "TotalQuantity",
                                                reference: "TotalQuantity",
                                                readOnly: true,
                                                value: 0
                                            }
                                            ],
                                            title: "Cantidad:"
                                        },
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "Documento",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarDocumento",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadDocumentoDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "documentoNovedad", hidden: true, reference: "documentoNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarDocumentoClick",
                                                reference: "botonEliminarDocumento",
                                                width: 250
                                            }
                                            ],
                                            title: "Anexo copia del documento de Identidad"
                                        },
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "IncapacidadPermanente",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarIncapacidadPermanente",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadIncapacidadPermanenteDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "incapacidadPermanenteNovedad", hidden: true, reference: "incapacidadPermanenteNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarIncapacidadPermanenteClick",
                                                reference: "botonEliminarIncapacidadPermanente",
                                                width: 250
                                            }
                                            ],
                                            title: "Copia del dictamen de incapacidad permanente emitido por la autoridad competente"
                                        },
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "RegistroCivil",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarRegistroCivil",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadRegistroCivilDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "registroCivilNovedad", hidden: true, reference: "registroCivilNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarRegistroCivilClick",
                                                reference: "botonEliminarRegistroCivil",
                                                width: 250
                                            }
                                            ],
                                            title: "Copia del registro civil de matrimonio, o de la escritura pública, acta de conciliación o sentencia judicial que declare la unión marital"
                                        },
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "EscrituraPublica",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarEscrituraPublica",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadEscrituraPublicaDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "escrituraPublicaNovedad", hidden: true, reference: "escrituraPublicaNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarEscrituraPublicaClick",
                                                reference: "botonEliminarEscrituraPublica",
                                                width: 250
                                            }
                                            ],
                                            title: "Copia de la escritura pública o sentencia judicial que declare el divorcio, sentencia judicial que declare la separación de <br />cuerpos y escritura pública, acta de conciliación o acta judicial que declare la terminación de la unión marital"
                                        },
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "CertificadoAdopcion",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarCertificadoAdopcion",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadCertificadoAdopcionDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "certificadoAdopcionNovedad", hidden: true, reference: "certificadoAdopcionNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarCertificadoAdopcionClick",
                                                reference: "botonEliminarCertificadoAdopcion",
                                                width: 250
                                            }
                                            ],
                                            title: "Copia del certificado de adopción o acta de entrega del menor"
                                        },
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "OrdenJudicial",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarOrdenJudicial",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadOrdenJudicialDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "ordenJudicialNovedad", hidden: true, reference: "ordenJudicialNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarOrdenJudicialClick",
                                                reference: "botonEliminarOrdenJudicial",
                                                width: 250
                                            }
                                            ],
                                            title: "Copia de la órden judicial o del acto administrativo de custodia"
                                        },
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "PerdidaPP",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarPerdidaPP",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadPerdidaPPDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "perdidaPPNovedad", hidden: true, reference: "perdidaPPNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarPerdidaPPClick",
                                                reference: "botonEliminarPerdidaPP",
                                                width: 250
                                            }
                                            ],
                                            title: "Documento en que conste la pérdida de la pátria potestad, o el certificado de defunción de los padres o la declaración suscrita <br />por el cotizante sobre la ausencia de los padres"
                                        },
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "AuthTraslado",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarAuthTraslado",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadAuthTrasladoDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "authTrasladoNovedad", hidden: true, reference: "authTrasladoNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarAuthTrasladoClick",
                                                reference: "botonEliminarAuthTraslado",
                                                width: 250
                                            }
                                            ],
                                            title: "Copia de la autorización de traslado por parte de la Superintendencia Nacional de Salúd"
                                        },
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "CertificadoVinculacion",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarCertificadoVinculacion",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadCertificadoVinculacionDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "certificadoVinculacionNovedad", hidden: true, reference: "certificadoVinculacionNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarCertificadoVinculacionClick",
                                                reference: "botonEliminarCertificadoVinculacion",
                                                width: 250
                                            }
                                            ],
                                            title: "Certificado de vinculación a una entidad autorizada para realizar afiliaciones colectivas"
                                        },
                                        {
                                            xtype: "fieldset",
                                            bodyPadding: 10,
                                            width: 1000,
                                            layout: {
                                                type: "hbox"
                                            },
                                            items: [
                                            {
                                                xtype: 'uploader',
                                                fieldLabel: "ActoAdministrativo",
                                                uploadConfig: {
                                                    uploadUrl: Coomuce.Url.Funciones + "ImportarActoAdministrativo",
                                                    maxFileSize: 10 * 1024 * 1024
                                                },
                                                inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                                                listeners: {
                                                    'uploaddatacomplete': "onUploadActoAdministrativoDataComplete",
                                                    'uploaderror': "onUploadFirmaError"
                                                }
                                            },
                                            { xtype: "textfield", name: "actoAdministrativoNovedad", hidden: true, reference: "actoAdministrativoNovedad" },
                                            {
                                                xtype: "button",
                                                iconCls: "x-fa fa-minus-circle",
                                                textAlign: "left",
                                                handler: "onBotonEliminarActoAdministrativoClick",
                                                reference: "botonEliminarActoAdministrativo",
                                                width: 250
                                            }
                                            ],
                                            title: "Copia del acto administrativo o providencia de las autoridades competentes en la que conste la calidad del beneficiario o se ordene la afiliación de oficio"
                                        }
                                        ],
                                        title: "IX. ANEXOS"
                                    }
                                    ]
                                }
                                ]
                            });