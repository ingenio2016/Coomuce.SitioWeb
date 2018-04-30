Ext.define("CoomuceMod.view.ActualizacionBd.Afiliacion", {
    extend: "Ext.panel.Panel",

    requires: [
    "CoomuceMod.view.ActualizacionBd.AfiliacionController",
    "CoomuceMod.view.ActualizacionBd.AfiliacionModel"
    ],

    controller: "actualizacionbd-afiliacion",
    viewModel: { type: "actualizacionbd-afiliacion" },

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
                fieldLabel: "Código<br />(A registrar por la EPS)",
                name: "codigoCotizanteFuan",
                value: "0"
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
                xtype: "numberfield",
                fieldLabel: "Puntaje SISBEN",
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
                xtype: "textfield",
                allowBlank: true,
                fieldLabel: "Administradora de Riesgos Laborales - ARL",
                name: "arlFuanAfiliado",
                readOnly: true,
                reference: "arlFuanAfiliado"
            },
            {
                xtype: "textfield",
                allowBlank: true,
                fieldLabel: "Administradora de Pensiones",
                name: "pensionFuanAfiliado",
                readOnly: true,
                reference: "pensionFuanAfiliado"
            },
            {
                xtype: "numberfield",
                allowBlank: true,
                fieldLabel: "Ingreso Base de Cotización - IBC",
                hideTrigger: true,
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
                                            allowBlank: false
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
                                    { dataIndex: "valorFuanDeclaracionAutorizacion", width: 40 },
                                    { dataIndex: "compDeclaracionAutorizacion", header: "Descripción", width: 700 }

                                    ],
                                    columnLines: true,
                                    height: 300,
                                    loadMask: true,
                                    selModel: {
                                        type: 'checkboxmodel',
                                                checkOnly: true, //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
                                                idCampo: "valorFuanDeclaracionAutorizacion",
                                                compCampo: "valorFuanDeclaracionAutorizacion",
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
                                    {
                                        xtype: "fieldset",
                                        bodyPadding: 10,
                                        layout: {
                                            type: "hbox"
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
                                        ],
                                        title: "VII. FIRMAS"
                //},
                //{
                //    xtype: "fieldset",
                //    defaults: {
                //        allowBlank: false,
                //        anchor: "100%"
                //    },
                //    items: [
                //        {
                //            xtype: "label",
                //            html: "<b>Identificación de la entidad territorial</b>"
                //        },
                //        {
                //            xtype: "combo",
                //            bind: {
                //                store: "{getDepartamento}"
                //            },
                //            ciudadReference: "idCiudadfX",
                //            displayField: "compDepartamento",
                //            editable: false,
                //            fieldLabel: "Departamento",
                //            listeners: {
                //                select: "onSelectCombo"
                //            },
                //            name: "idDepartamento",
                //            queryMode: "local",
                //            ubicacion: true,
                //            valueField: "idDepartamento"
                //        },
                //        {
                //            xtype: "combo",
                //            bind: {
                //                store: "{getCiudad}"
                //            },
                //            displayField: "compCiudad",
                //            editable: false,
                //            fieldLabel: "Municipio",
                //            name: "idCiudadX",
                //            queryMode: "local",
                //            reference: "idCiudadfX",
                //            valueField: "idCiudad"
                //        },
                //        {
                //            xtype: "label",
                //            html: "<b>Datos del SISBEN</b>"
                //        },
                //        {
                //            xtype: "textfield",
                //            fieldLabel: "Número de Ficha",
                //            name: "numFichaSisbenFuanEntidadTerritorial"
                //        },
                //        {
                //            xtype: "numberfield",
                //            fieldLabel: "Puntaje",
                //            name: "puntajeSisbenFuanEntidadTerritorial"
                //        },
                //        {
                //            xtype: "numberfield",
                //            fieldLabel: "Nivel",
                //            name: "nivelSisbenFuanEntidadTerritorial"
                //        },
                //        {
                //            xtype: "datefield",
                //            fieldLabel: "Fecha radicación",
                //            name: "fechaRadicacionFuanEntidadTerritorial"
                //        },
                //        {
                //            xtype: "datefield",
                //            fieldLabel: "Fecha de validación",
                //            name: "fechaValidacionFuanEntidadTerritorial"
                //        },
                //        { xtype: "numberfield", hidden: true, value: Coomuce.Util.DatosUsuario.idUsuario },
                //        {
                //            xtype: "textarea",
                //            fieldLabel: "Observaciones",
                //            name: "observacionFuanEntidadTerritorial"
                //        }
                //    ],
                //    title: "X. DATOS A SER DILIGENCIADOS POR LA ENTIDAD TERRITORIAL"
            }
            ]
        }
        ]
    });