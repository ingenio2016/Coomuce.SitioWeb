Ext.define("CoomuceMod.view.CaracterizacionPoblacional.Hfdfr", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.CaracterizacionPoblacional.HfdfrController",
        "CoomuceMod.view.CaracterizacionPoblacional.HfdfrModel"
    ],

    controller: "caracterizacionpoblacional-hfdfr",
    viewModel: { type: "caracterizacionpoblacional-hfdfr" },

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
                { /*disabled: true,*/ minWidth: 80, text: 'Guardar', handler: 'onBotonGuardarClick', reference: "botonGuardar" },
                { /*disabled: true,*/ minWidth: 80, text: 'Cancelar', handler: 'onBotonCancelarClick', reference: "botonCancelar" }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
            items: [
                { text: "Importar archivo de audio", iconCls: "x-fa fa-file-audio-o", handler: "onBotonImportarArchivoClick", tooltip: "Esta opción permite importar archivos de audio a las plantillas diligenciadas telefonicamente." }
            ]
        }
    ],

    items: [
        {
            xtype: "form",
            bodyPadding: 10,
            defaults: { anchor: "100%" },
            id: "Form-Hfdfr-Principal",
            scrollable: true,
            items: [
                {
                    xtype: "datefield",
                    fieldLabel: "Fecha de Visita",
                    name: "fechaVisitaHfdfr",
                    format: "d/m/Y",
                    maxValue: new Date(),
                    value: new Date()
                },
                {
                    xtype: "combo",
                    fieldLabel: "Tipo Diligenciamiento",
                    name: "tipoDiligenciamientoHfdfr",
                    store: ["Personal", "Telefonico"],
                    value: "Personal"
                },
                {
                    layout: {
                        type: "table",
                        columns: 6
                    },
                    items: [
                        {
                            items: [
                                { xtype: "label", html: "Departamento: " }
                            ]
                        },
                        {
                            items: [
                                { xtype: "numberfield", name: "idDepartamento", hidden: true, reference: "idDepartamento" },
                                { xtype: "textfield", name: "compDepartamento", readOnly: true, reference: "compDepartamento" }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "Municipio: " }
                            ]
                        },
                        {
                            items: [
                                { xtype: "numberfield", name: "idCiudad", hidden: true, reference: "idCiudad" },
                                { xtype: "textfield", name: "compCiudad", readOnly: true, reference: "compCiudad" }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "Vereda: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "veredaInfoHfdfr"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "Barrio: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "barrioInfoHfdfr"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "Teléfono: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "telefonoInfoHfdfr"
                                }
                            ]
                        }

                    ]
                },
                { xtype: "label", html: "<b>INFORMACIÓN FAMILIAR</b>" },
                {
                    layout: {
                        type: "table",
                        columns: 6
                    },
                    items: [
                        {
                            items: [
                                { xtype: "label", html: "Entrevista A: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "nombreCompletoAfiliado",
                                    readOnly: true,
                                    reference: "nombreCompletoAfiliado",
                                    width: 400
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "Tipo documento <br />de identidad: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    name: "codigoTipoIdentificacion",
                                    readOnly: true,
                                    reference: "codigoTipoIdentificacion",
                                    width: 200
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "Documento No.: " }
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
                                        { xtype: "numberfield", hidden: true, name: "idFuanAfiliado" },
                                        { xtype: "textfield", hideLabel: true, name: "identificacionFuanAfiliado", readOnly: true }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "button",
                                            componentReference: [
                                                "idFuanAfiliado", "codigoTipoIdentificacion", "identificacionFuanAfiliado",
                                                "nombreCompletoAfiliado", "puntajeSisbenFuanAfiliado", "numCarnetFuanAfiliado",
                                                "idDepartamento", "compDepartamento", "idCiudad", "compCiudad"
                                            ],
                                            fechaUltFormato: "fechaUltHistoria",
                                            validarFormato: true,
                                            handler: Coomuce.Util.buscarAfiliadoHistoria,
                                            iconCls: "x-fa fa-binoculars",
                                            tooltip: "Lista de Afiliados",
                                            width: 30
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            colspan: 2,
                            html: "&nbsp;"
                        },
                        {
                            items: [
                                { xtype: "label", html: "Carnet: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "numCarnetFuanAfiliado",
                                    reference: "numCarnetFuanAfiliado",
                                    readOnly: true
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "Sisben: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "puntajeSisbenFuanAfiliado",
                                    readOnly: true,
                                    reference: "puntajeSisbenFuanAfiliado"
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: "combo",
                    bind: {
                        store: "{getProcedencia}"
                    },
                    displayField: "compProcedencia",
                    editable: false,
                    fieldLabel: "1. PROCEDENCIA DE LA FAMILIA",
                    labelWidth: 200,
                    name: "pregunta1",
                    queryMode: "local",
                    reference: "idProcedencia",
                    valueField: "compProcedencia"
                },
                {
                    xtype: "combo",
                    bind: {
                        store: "{getTipoZona}"
                    },
                    displayField: "compTipoZona",
                    editable: false,
                    fieldLabel: "2. UBICACIÓN ACTUAL DE LA FAMILIA",
                    labelWidth: 250,
                    name: "pregunta2",
                    queryMode: "local",
                    reference: "idTipoZona",
                    valueField: "compTipoZona"
                },
                {
                    layout: {
                        type: "table",
                        columns: 4
                    },
                    items: [
                        {
                            items: [
                                { xtype: "label", html: "3. NUMERO DE PERSONAS QUE VIVEN EN EL DOMICILIO: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "pregunta3"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "9. NUMEROS DE PERSONAS MAYORES DE 65 AÑOS: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "pregunta9"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "4. NUMERO DE PERSONAS DE 6 A 18 AÑOS: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "pregunta4"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "10. NUMERO DE PERSONAS MAYORES DE 65 AÑOS QUE TRABAJAN: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "pregunta10"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "5. NUMERO DE PERSONAS DE 6 A 18 AÑOS QUE ESTUDIAN: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "pregunta5"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "11. NUMERO DE PERSONAS DE 15 A 65 AÑOS: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "pregunta11"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "6. NUMERO DE PERSONAS DE 6 A 14 AÑOS: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "pregunta6"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "12. NUMERO DE PERSONAS DE 15 A 65 AÑOS QUE TRABAJAN: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "pregunta12"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "7. NUMERO DE PERSONAS DE 6 A 14 AÑOS QUE TRABAJAN: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "textfield",
                                    hideLabel: true,
                                    name: "pregunta7"
                                }
                            ]
                        },
                        {
                            items: [
                                { xtype: "label", html: "13. TOTAL DE INGRESOS MENSUALES EN LA FAMILIA: " }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: "numberfield",
                                    hideLabel: true,
                                    hideTrigger: true,
                                    listeners: {
                                        blur: "onBlurNumber"
                                    },
                                    name: "pregunta13"
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '8. QUIEN APORTA ECONOMICAMENTE EN LA FAMILIA',
                    labelWidth: 350,
                    items: [
                        { boxLabel: 'MADRE', name: 'pregunta8opcionMadre', listeners: { change: "onChangeCheck" } },
                        { boxLabel: 'PADRE', name: 'pregunta8opcionPadre', listeners: { change: "onChangeCheck" } },
                        { boxLabel: 'HIJOS', name: 'pregunta8opcionHijos', listeners: { change: "onChangeCheck" } },
                        { boxLabel: 'OTRO', name: 'pregunta8opcionOtros', listeners: { change: "onChangeCheck" } },
                        { xtype: "textfield", fieldLabel: "CUAL?", name: "pregunta8opcionCual", readOnly: true, reference: "pregunta8opcionCual" }
                    ]
                },
                {
                    xtype: "grid",
                    bind: { store: "{getNivelEducativo}" },
                    border: true,
                    columns: [
                        { dataIndex: "compNivelEducativo", header: "", width: 250 },
                        { xtype: "checkcolumn", dataIndex: "madreNivelEducativo", header: "Madre" },
                        { xtype: "checkcolumn", dataIndex: "padreNivelEducativo", header: "Padre" }
                    ],
                    columnLines: true,
                    height: 300,
                    id: "Grid-Pregunta14",
                    tbar: {
                        items: [
                            "14. NIVEL EDUCATIVO PADRES"
                        ]
                    }
                },
                { xtype: "label", html: "<b>15. CONDICIONES DE LA VIVIENDA</b><br />SEÑALE UNA OPCION" },
                {
                    xtype: "combo",
                    bind: { store: "{getCondicionVivienda}" },
                    displayField: "nombreCondicionVivienda",
                    editable: false,
                    fieldLabel: "A - EL PISO DE LA VIVIENDA ESTA CONSTRUIDO EN SU MAYOR PORCENTAJE EN",
                    labelWidth: 400,
                    name: "pregunta15opcionA",
                    queryMode: "local",
                    valueField: "nombreCondicionVivienda"
                },
                {
                    xtype: "combo",
                    bind: { store: "{getCondicionVivienda}" },
                    displayField: "nombreCondicionVivienda",
                    editable: false,
                    fieldLabel: "B - EL TECHO DE LA VIVIENDA ESTA CONSTRUIDO EN SU MAYOR PORCENTAJE EN",
                    labelWidth: 400,
                    name: "pregunta15opcionB",
                    queryMode: "local",
                    valueField: "nombreCondicionVivienda"
                },
                {
                    xtype: "combo",
                    bind: { store: "{getCondicionVivienda}" },
                    displayField: "nombreCondicionVivienda",
                    editable: false,
                    fieldLabel: "C - LAS PAREDES DE LA VIVIENDA ESTAN CONSTRUIDAS EN SU MAYOR PORCENTAJE EN",
                    labelWidth: 400,
                    name: "pregunta15opcionC",
                    queryMode: "local",
                    valueField: "nombreCondicionVivienda"
                },
                {
                    xtype: "numberfield",
                    fieldLabel: "D - NUMERO DE HABITACIONES DEL DOMICILIO",
                    labelWidth: 300,
                    name: "pregunta15opcionD"
                },
                {
                    xtype: "numberfield",
                    fieldLabel: "E - NUMERO DE CAMAS EN EL DOMICILIO",
                    labelWidth: 250,
                    name: "pregunta15opcionE"
                },
                {
                    xtype: "combo",
                    bind: { store: "{getTipoVivienda}" },
                    displayField: "compTipoVivienda",
                    editable: false,
                    fieldLabel: "F - TIPO DE VIVIENDA",
                    labelWidth: 150,
                    name: "pregunta15opcionF",
                    queryMode: "local",
                    valueField: "compTipoVivienda"
                },
                {
                    xtype: "combo",
                    bind: { store: "{getTenencia}" },
                    displayField: "compTenencia",
                    editable: false,
                    fieldLabel: "G - TENENCIA",
                    labelWidth: 100,
                    name: "pregunta15opcionG",
                    queryMode: "local",
                    valueField: "compTenencia"
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: '16. LA FAMILIA COCINA EN EL MISMO SITIO DONDE DUERME',
                    labelWidth: 300,
                    name: "pregunta16",
                    items: [
                        { boxLabel: 'A - SI', inputValue: "SI" },
                        { boxLabel: 'B - NO', inputValue: "NO" },
                        { boxLabel: 'C - N.A', inputValue: "N.A", checked: true }
                    ]
                },
                {
                    xtype: "combo",
                    bind: { store: "{getTipoCombustible}" },
                    displayField: "compTipoCombustible",
                    editable: false,
                    fieldLabel: "17. EL TIPO DE COMBUSTIBLE UTILIZADO PARA COCINAR ES",
                    labelWidth: 400,
                    name: "pregunta17",
                    queryMode: "local",
                    valueField: "compTipoCombustible"
                },
                {
                    xtype: "combo",
                    bind: { store: "{getTratamientoAgua}" },
                    displayField: "compTratamientoAgua",
                    editable: false,
                    fieldLabel: "18. TIPO DE TRATAMIENTO CASERO DEL AGUA",
                    labelWidth: 280,
                    name: "pregunta18",
                    queryMode: "local",
                    valueField: "compTratamientoAgua"
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: '19. LOS RECIPIENTES UTILIZADOS PARA EL ALMACENAMIENTO SE DESINFECTAN PERIODICAMENTE',
                    labelWidth: 400,
                    name: "pregunta19",
                    items: [
                        { boxLabel: 'A - SI', inputValue: "SI" },
                        { boxLabel: 'B - NO', inputValue: "NO" },
                        { boxLabel: 'C - N.A', inputValue: "N.A", checked: true }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '20. LA VIVIENDA CUENTA CON SERVICIOS DE',
                    labelWidth: 300,
                    items: [
                        { boxLabel: 'A - LUZ', name: "pregunta20opcionA" },
                        { boxLabel: 'B - AGUA', name: "pregunta20opcionB" },
                        { boxLabel: 'C - TELEFONO', name: "pregunta20opcionC" },
                        { boxLabel: 'D - ALCANTARILLADO', name: "pregunta20opcionD" },
                        { boxLabel: 'E - RECOLECCION BASURAS', name: "pregunta20opcionE" },
                        { boxLabel: 'F - NO APLICA', name: "pregunta20opcionF" }
                    ]
                },
                {
                    xtype: "combo",
                    bind: { store: "{getDisposicionExcreta}" },
                    displayField: "compDisposicionExcreta",
                    editable: false,
                    fieldLabel: "21. LA DISPOSICION DE EXCRETAS SE REALIZA",
                    labelWidth: 280,
                    name: "pregunta21",
                    queryMode: "local",
                    valueField: "compDisposicionExcreta"
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: '22. EL MANEJO DE BASURAS EN EL HOGAR ES',
                    labelWidth: 300,
                    name: "pregunta22",
                    items: [
                        { boxLabel: 'A - ADECUADO', inputValue: "ADECUADO" },
                        { boxLabel: 'B - INADECUADO', inputValue: "INADECUADO" },
                        { boxLabel: 'C - NO APLICA', inputValue: "N.A", checked: true }
                    ]
                },
                {
                    xtype: "combo",
                    bind: { store: "{getDisposicionBasura}" },
                    displayField: "compDisposicionBasura",
                    editable: false,
                    fieldLabel: "23. LA DISPOSICION FINAL DE LA BASURA SE REALIZA EN",
                    labelWidth: 280,
                    name: "pregunta23",
                    queryMode: "local",
                    valueField: "compDisposicionBasura"
                },
                { xtype: "label", html: "<b>CONDICIONES SOCIOAMBIENTALES</b>" },
                {
                    xtype: 'checkboxgroup',
                    columns: 3,
                    fieldLabel: '24. SEÑALE CUALES FACTORES DE RIESGO AFECTAN A SU FAMILIA EN LA LOCALIDAD, VEREDA, BARRIO EN DONDE VIVE. (SEÑALE UNA O VARIAS)',
                    labelAlign: "top",
                    items: [
                        { boxLabel: 'A - DISPOSICION INADECUADA DE BASURAS', name: "pregunta24opcionA" },
                        { boxLabel: 'B - CAÑOS, RIOS, LAGUNAS,CONTAMINADAS', name: "pregunta24opcionB" },
                        { boxLabel: 'C - DESLIZAMIENTO DE TIERRA', name: "pregunta24opcionC" },
                        { boxLabel: 'D - ARENERAS', name: "pregunta24opcionD" },
                        { boxLabel: 'E - CARBONERAS', name: "pregunta24opcionE" },
                        { boxLabel: 'F - VECTORES (F1-  ROEDORES)', name: "pregunta24opcionF1" },
                        { boxLabel: 'F - VECTORES (F2-  INSECTOS)', name: "pregunta24opcionF2" },
                        { boxLabel: 'G - INUNDACIONES', name: "pregunta24opcionG" },
                        { boxLabel: 'H - INSEGURIDAD', name: "pregunta24opcionH" },
                        { boxLabel: 'I - PROSTITUCION', name: "pregunta24opcionI" },
                        { boxLabel: 'J - PANDILLISMO', name: "pregunta24opcionJ" },
                        { boxLabel: 'K - DROGADICCION', name: "pregunta24opcionK" },
                        { boxLabel: 'L - ALCOHOLISMO', name: "pregunta24opcionL" },
                        { boxLabel: 'M - VIOLENCIA', name: "pregunta24opcionM" },
                        { boxLabel: 'N - OTRO', name: "pregunta24opcionN" },
                        { boxLabel: 'O - NINGUNA', name: "pregunta24opcionO" }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: '25. TIENE LA FAMILIA ANIMALES?',
                    labelWidth: 300,
                    name: "pregunta25",
                    items: [
                        { boxLabel: 'A - SI', inputValue: "SI", listeners: { change: "onChangeOption" } },
                        { boxLabel: 'B - NO', inputValue: "NO", checked: true, listeners: { change: "onChangeOption" } }
                    ]
                },
                {
                    xtype: "grid",
                    bind: { store: "{getTipoAnimal}" },
                    border: true,
                    columns: [
                        { dataIndex: "compTipoAnimal", header: "", width: 250 },
                        { xtype: "checkcolumn", dataIndex: "activarTipoAnimal", header: "Seleccionar" },
                        {
                            dataIndex: "numeroTipoAnimal", header: "Número", width: 100, editor: {
                                xtype: "numberfield",
                                allowBlank: false
                            }
                        }
                    ],
                    columnLines: true,
                    height: 200,
                    id: "Grid-Pregunta26",
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },
                    tbar: {
                        items: [
                            "26. SEÑALE CUANTOS: (PUEDE SEÑALAR UNA O VARIAS CON EL NUMERO)"
                        ]
                    }
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '27. REGISTRE SI SE ENCUENTRAN VACUNADOS (PUEDE SEÑALAR UNA O VARIAS)',
                    labelAlign: "top",
                    items: [
                        { boxLabel: 'A - CANINOS', name: "pregunta27opcionA" },
                        { boxLabel: 'B - AVES', name: "pregunta27opcionB" },
                        { boxLabel: 'C - PORCINOS', name: "pregunta27opcionC" },
                        { boxLabel: 'D - OVINOS', name: "pregunta27opcionD" },
                        { boxLabel: 'E - EQUINOS', name: "pregunta27opcionE" },
                        { boxLabel: 'F - FELINOS', name: "pregunta27opcionF" }
                    ],
                    reference: "pregunta27"
                },
                {
                    xtype: "grid",
                    bind: { store: "{setPregunta28}" },
                    border: true,
                    columns: [
                        {
                            dataIndex: "nombre", header: "Nombre", width: 400, editor: {
                                allowBlank: false
                            }
                        },
                        {
                            dataIndex: "numCarnet", header: "Carnet", width: 200, editor: {
                                allowBlank: false
                            }
                        },
                        {
                            dataIndex: "edad", header: "Edad", width: 100, editor: {
                                xtype: "numberfield",
                                allowBlank: false
                            }
                        },
                        {
                            dataIndex: "codDiscapacidad", header: "Cód. Discapacidad", width: 200, editor: {
                                xtype: "combo",
                                allowBlank: false,
                                store: ["S", "M", "F"]
                            }
                        }
                    ],
                    columnLines: true,
                    height: 200,
                    id: "Grid-Pregunta28",
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },
                    tbar: {
                        items: [
                            "28. REGISTRE LOS AFILIADOS DISCAPACITADOS DE LA FAMILIA (S:SENSORIAL, M:MENTAL, F: FISICA)", "->",
                            {
                                iconCls: "x-fa fa-plus-square",
                                tooltip: "Adicionar",
                                handler: "onBotonAdicionarGrid28Click"
                            },
                            {
                                iconCls: "x-fa fa-minus-square",
                                tooltip: "Remover",
                                handler: "onBotonRemoverGrid28Click"
                            }
                        ]
                    }
                },
                {
                    xtype: "numberfield",
                    fieldLabel: "29. REGISTRE CUANTOS INTEGRANTES DE LA FAMILIA NO HAN ASISTIDO A CONTROL ODONTOLOGICO EN EL ULTIMO AÑO",
                    labelWidth: 600,
                    name: "pregunta29"
                },
                {
                    xtype: "checkboxgroup",
                    columns: 3,
                    fieldLabel: "30. REGISTRE LAS PERSONAS  MAYORES DE 60 AÑOS QUE NO HAN RECIBIDO CONTROL MEDICO EN EL ULTIMO AÑO",
                    labelWidth: 500,
                    items: [
                        {
                            xtype: "numberfield",
                            fieldLabel: "F",
                            labelWidth: 50,
                            name: "pregunta30personasF",
                            width: 150
                        },
                        {
                            xtype: "numberfield",
                            fieldLabel: "M",
                            labelWidth: 50,
                            name: "pregunta30personasM",
                            width: 150
                        },
                        {
                            xtype: "numberfield",
                            fieldLabel: "N/A",
                            labelWidth: 50,
                            name: "pregunta30personasNA",
                            width: 150
                        }
                    ]
                },
                {
                    xtype: "grid",
                    bind: { store: "{setPregunta31}" },
                    border: true,
                    columns: [
                        {
                            dataIndex: "numCarnet", header: "Carnet", width: 200, editor: {
                                allowBlank: false
                            }
                        },
                        {
                            dataIndex: "nombre", header: "Nombre", width: 400, editor: {
                                allowBlank: false
                            }
                        }
                    ],
                    columnLines: true,
                    height: 200,
                    id: "Grid-Pregunta31",
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },

                    tbar: {
                        items: [
                            "31. REGISTRE EL NUMERO DE INTEGRANTES DE LA FAMILIA QUE TENGAN TOS CON ESPECTORACION POR MAS DE 15 DIAS?",
                            {
                                xtype: "numberfield",
                                hideLabel: true,
                                reference: "numeroIntegrantes",
                                width: 80
                            }, "->",
                            {
                                iconCls: "x-fa fa-plus-square",
                                tooltip: "Adicionar",
                                handler: "onBotonAdicionarGrid31Click"
                            },
                            {
                                iconCls: "x-fa fa-minus-square",
                                tooltip: "Remover",
                                handler: "onBotonRemoverGrid31Click"
                            }
                        ]
                    }
                },
                {
                    xtype: "grid",
                    bind: { store: "{setPregunta32}" },
                    border: true,
                    columns: [
                        {
                            dataIndex: "numCarnet", header: "Carnet", width: 200, editor: {
                                allowBlank: false
                            }
                        },
                        {
                            dataIndex: "nombre", header: "Nombre", width: 400, editor: {
                                allowBlank: false
                            }
                        }
                    ],
                    columnLines: true,
                    height: 200,
                    id: "Grid-Pregunta32",
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },

                    tbar: {
                        items: [
                            "32. REGISTRE LOS  INTEGRANTES DE LA FAMILIA QUE PRESENTAN  MANCHAS, LESIONES, NODULOS O ULCERAS  EN LA PIEL CON O SIN SENSIBILIDAD <br />EN ALGUNA PARTE DEL CUERPO", "->",
                            {
                                iconCls: "x-fa fa-plus-square",
                                tooltip: "Adicionar",
                                handler: "onBotonAdicionarGrid32Click"
                            },
                            {
                                iconCls: "x-fa fa-minus-square",
                                tooltip: "Remover",
                                handler: "onBotonRemoverGrid32Click"
                            }
                        ]
                    }
                },
                {
                    xtype: "grid",
                    bind: { store: "{setPregunta33}" },
                    border: true,
                    columns: [
                        {
                            dataIndex: "numCarnet", header: "Carnet", width: 200, editor: {
                                allowBlank: false
                            }
                        },
                        {
                            dataIndex: "nombre", header: "Nombre", width: 400, editor: {
                                allowBlank: false
                            }
                        }
                    ],
                    columnLines: true,
                    height: 200,
                    id: "Grid-Pregunta33",
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },

                    tbar: {
                        items: [
                            "33. ALGUN MIEMBRO DE LA FAMILIA SE ENCUENTRA ENFERMO EN EL MOMENTO DE LA VISITA?",
                            {
                                xtype: "radio",
                                boxLabel: 'SI',
                                inputValue: 'SI'
                            },
                            {
                                xtype: "radio",
                                boxLabel: 'NO',
                                checked: true,
                                inputValue: 'NO'
                            }, "->",
                            {
                                iconCls: "x-fa fa-plus-square",
                                tooltip: "Adicionar",
                                handler: "onBotonAdicionarGrid33Click"
                            },
                            {
                                iconCls: "x-fa fa-minus-square",
                                tooltip: "Remover",
                                handler: "onBotonRemoverGrid33Click"
                            }
                        ]
                    }
                },
                {
                    xtype: 'checkboxgroup',
                    columns: 5,
                    fieldLabel: '34. COMO CORRIGE EL MAL COMPORTAMIENTO DE  SUS HIJOS',
                    labelAlign: "top",
                    items: [
                        { boxLabel: 'A - CASTIGO FISICO', name: "pregunta34opcionA" },
                        { boxLabel: 'B - REGAÑO', name: "pregunta34opcionB" },
                        { boxLabel: 'C - ENCIERRO', name: "pregunta34opcionC" },
                        { boxLabel: 'D - ZARANDEO', name: "pregunta34opcionD" },
                        { boxLabel: 'E - PRIVACION', name: "pregunta34opcionE" },
                        { boxLabel: 'F - DIALOGO', name: "pregunta34opcionF" },
                        { boxLabel: 'G - AISLAMIENTO', name: "pregunta34opcionG" },
                        { boxLabel: 'H - OTRO', name: "pregunta34opcionH" }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: '35. HAY NIÑOS MENORES DE 12 AÑOS QUE COCINAN EN LA CASA?',
                    labelWidth: 300,
                    name: "pregunta35",
                    items: [
                        { boxLabel: 'A - SI', inputValue: "SI" },
                        { boxLabel: 'B - NO', inputValue: "NO", checked: true }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    columns: 5,
                    fieldLabel: '36. COMO SOLUCIONAN LOS CONFLICTOS DE PAREJA?',
                    labelAlign: "top",
                    items: [
                        { boxLabel: 'A - DIALOGANDO', name: "pregunta36opcionA" },
                        { boxLabel: 'B - AGRESION FISICA', name: "pregunta36opcionB" },
                        { boxLabel: 'C - PRIVACION ECONOMICA', name: "pregunta36opcionC" },
                        { boxLabel: 'D - AGRESION VERBAL', name: "pregunta36opcionD" },
                        { boxLabel: 'E - PRIVACION', name: "pregunta36opcionE" },
                        { boxLabel: 'F - AGRESION SEXUAL', name: "pregunta36opcionF" },
                        { boxLabel: 'G - OTRO', name: "pregunta36opcionG" },
                        { boxLabel: 'H - SIN DATO', name: "pregunta36opcionH" }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: '37. HA TENIDO CONFLICTOS EN EL HOGAR LLEGANDO A LA AGRESION FISICA O VERBAL',
                    labelWidth: 300,
                    name: "pregunta37",
                    items: [
                        { boxLabel: 'A - SI', inputValue: "SI" },
                        { boxLabel: 'B - NO', inputValue: "NO", checked: true }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    columns: 6,
                    fieldLabel: '38. QUIEN(ES) NORMALMENTE ES EL QUE AGREDE FISICA O SICOLOGICAMENTE EN LA FAMILIA',
                    labelAlign: "top",
                    items: [
                        { boxLabel: 'A - PADRE', name: "pregunta38opcionA" },
                        { boxLabel: 'B - MADRE', name: "pregunta38opcionB" },
                        { boxLabel: 'C - HIJOS', name: "pregunta38opcionC" },
                        { boxLabel: 'D - PADRASTRO', name: "pregunta38opcionD" },
                        { boxLabel: 'E - NO ES CLARO', name: "pregunta38opcionE" },
                        { boxLabel: 'F - NO APLICA', name: "pregunta38opcionF" }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    columns: 3,
                    fieldLabel: '39. CUAL(ES) ACTIVIDADES REALIZA LA FAMILIA EN EL TIEMPO LIBRE?',
                    labelAlign: "top",
                    items: [
                        { boxLabel: 'A - ACTIVIDADES DEPORTIVAS', name: "pregunt39opcionA" },
                        { boxLabel: 'B - ACTIVIDADES  RECREATIVAS(LEER, TV)', name: "pregunt39opcionB" },
                        { boxLabel: 'C - ACTIVIDADES ESPIRITUALES', name: "pregunt39opcionC" },
                        { boxLabel: 'D - ACTIVIDADES SOCIALES', name: "pregunt39opcionD" },
                        { boxLabel: 'E - NO REALIZA NINGUNA', name: "pregunt39opcionE" },
                        { boxLabel: 'F - OTRAS', name: "pregunt39opcionF" }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    columns: 3,
                    fieldLabel: '40. CUALES ACTIVIDADES RECREATIVAS REALIZAN LAS PERSONAS MAYORES DE 60 AÑOS EN SU FAMILIA?',
                    labelAlign: "top",
                    items: [
                        { boxLabel: 'A - ACTIVIDADES DEPORTIVAS', name: "pregunta40opcionA" },
                        { boxLabel: 'B - ACTIVIDADES  RECREATIVAS(LEER, TV)', name: "pregunta40opcionB" },
                        { boxLabel: 'C - ACTIVIDADES ESPIRITUALES', name: "pregunta40opcionC" },
                        { boxLabel: 'D - ACTIVIDADES MANUALES', name: "pregunta40opcionD" },
                        { boxLabel: 'E - OTRAS', name: "pregunta40opcionE" },
                        { boxLabel: 'F - NO REALIZAN NINGUNA', name: "pregunta40opcionF" }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '41. QUIEN COMPARTE EL TIEMPO LIBRE CON SUS HIJOS',
                    labelAlign: "top",
                    layout: "column",
                    items: [
                        {
                            xtype: "container",
                            columnWidth: .25,
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: 'NINGUNO',
                                    listeners: {
                                        change: "onChangeCheckNinguno"
                                    },
                                    name: "pregunta41opcionNinguno"
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            columnWidth: .6,
                            items: [
                                {
                                    xtype: "combo",
                                    bind: { store: "{getOpciones}" },
                                    displayField: "nombre",
                                    editable: false,
                                    fieldLabel: "MAMA",
                                    name: "pregunta41opcionMama",
                                    queryMode: "local",
                                    reference: "pregunta41opcionMama",
                                    valueField: "id",
                                    value: "NO"
                                },
                                {
                                    xtype: "combo",
                                    bind: { store: "{getOpciones}" },
                                    displayField: "nombre",
                                    editable: false,
                                    fieldLabel: "PAPA",
                                    name: "pregunta41opcionPapa",
                                    queryMode: "local",
                                    reference: "pregunta41opcionPapa",
                                    valueField: "id",
                                    value: "NO"
                                },
                                {
                                    xtype: "combo",
                                    bind: { store: "{getOpciones}" },
                                    displayField: "nombre",
                                    editable: false,
                                    fieldLabel: "OTRO",
                                    name: "pregunta41opcionOtro",
                                    queryMode: "local",
                                    reference: "pregunta41opcionOtro",
                                    valueField: "id",
                                    value: "NO"
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    columns: 3,
                    fieldLabel: '42. CAUSAS POR LAS CUALES NO COMPARTEN PADRES E HIJOS EL TIEMPO LIBRE',
                    labelAlign: "top",
                    items: [
                        { boxLabel: 'A - NO LO COMPARTEN POR EXCESO DE TRABAJO', name: "pregunta42opcionA" },
                        { boxLabel: 'B - NO LO COMPARTEN POR QUE DESCANSAN EL EL TIEMPO LIBRE', name: "pregunta42opcionB" },
                        { boxLabel: 'C - PREFIEREN QUE LOS NIÑOS JUEGUEN SOLOS', name: "pregunta42opcionC" },
                        { boxLabel: 'D - NO APLICA', name: "pregunta42opcionD" },
                        { boxLabel: 'E - OTRAS', name: "pregunta42opcionE" }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: '43. HA BRINDADO ORIENTACION SEXUAL A SUS HIJOS?',
                    labelWidth: 300,
                    name: "pregunta43",
                    items: [
                        { boxLabel: 'A - SI', inputValue: "SI" },
                        { boxLabel: 'B - NO', inputValue: "NO", checked: true }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '44. COMO?',
                    items: [
                        { boxLabel: 'A - DIALOGO ENTRE PADRES E HIJOS', name: "pregunta44opcionA" },
                        { boxLabel: 'B - LO REALIZAN EN EL COLEGIO', name: "pregunta44opcionB" },
                        { boxLabel: 'C - NO LO REALIZA', name: "pregunta44opcionC" }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '45. CADA CUANTO TIEMPO HACE EJERCICIO LA PERSONA ENTREVISTADA MAYOR DE 18 AÑOS',
                    labelWidth: 600,
                    items: [
                        { xtype: "numberfield", colspan: 2, fieldLabel: "Edad", name: "pregunta45edad", labelWidth: 80, value: 18, width: 200 }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    columns: 2,
                    items: [
                        { boxLabel: 'A - TODOS LOS DIAS 30 MINUTOS O MENOS', name: "pregunta45opcionA" },
                        { boxLabel: 'C - MENOS DE 5 DÍAS A LA SEMANA  30 MINUTOS', name: "pregunta45opcionC" },
                        { boxLabel: 'B - 5 DÍAS A LA SEMANA MAS O MENOS 30 MINUTOS', name: "pregunta45opcionB" },
                        { boxLabel: 'D - EN EL TIEMPO LIBRE NO HA REALIZADO EJERCICIO EN EL ULTIMO MES', name: "pregunta45opcionD" }
                    ]
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
                                { xtype: "textfield", name: "firmaHfdfr", hidden: true, reference: "firmaHfdfr" },
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
            ]
        }
    ]
});