Ext.define("CoomuceMod.view.CaracterizacionPoblacional.Ifppir", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.CaracterizacionPoblacional.IfppirController",
        "CoomuceMod.view.CaracterizacionPoblacional.IfppirModel"
    ],

    controller: "caracterizacionpoblacional-ifppir",
    viewModel: { type: "caracterizacionpoblacional-ifppir" },
    id: "Form-Ifppir-Panel",
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
                { text: "Nueva Ficha", iconCls: "x-fa fa-file-o", handler: "onBotonNuevaFichaClick", reference: "botonNuevaFicha" },
                { text: "Importar archivo de audio", iconCls: "x-fa fa-file-audio-o", handler: "onBotonImportarArchivoClick", tooltip: "Esta opción permite importar archivos de audio a las plantillas diligenciadas telefonicamente." }
            ]
        }
    ],

    items: [
        {
            xtype: "form",
            bodyPadding: 10,
            defaults: { anchor: "100%" },
            id: "Form-Ifppir-Principal",
            scrollable: true,
            items: [
                {
                    xtype: "combo",
                    fieldLabel: "Tipo Diligenciamiento",
                    name: "tipoDiligenciamientoIfppir",
                    store: ["Personal", "Telefonico"],
                    value: "Personal"
                },
                {
                    xtype: "fieldset",
                    style: {
                        "background-color": "#ffffff"
                    },
                    items: [
                        {
                            xtype: "textfield",
                            disabled: true,
                            fieldLabel: "Nombre del Afiliado",
                            labelWidth: 150,
                            name: "nombreCompletoAfiliado",
                            readOnly: true,
                            reference: "nombreCompletoAfiliado",
                            width: 600
                        },
                        {
                            layout: {
                                type: "table",
                                columns: 4
                            },
                            items: [
                                {
                                    items: [
                                        { xtype: "label", html: "Tipo documento <br />de identidad: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
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
                                                { xtype: "textfield", disabled: true, hideLabel: true, name: "identificacionFuanAfiliado", readOnly: true, reference: "identificacionFuanAfiliado" }
                                            ]
                                        },
                                        {
                                            items: [
                                                {
                                                    xtype: "button",
                                                    componentReference: [
                                                        "idFuanAfiliado", "codigoTipoIdentificacion", "identificacionFuanAfiliado", "nombreCompletoAfiliado", "fechaNacimientoFuanAfiliado",
                                                        "compDepartamento", "compCiudad", "direccionFuanAfiliado", "telefonoFuanAfiliado",
                                                        "celularFuanAfiliado", "puntajeSisbenFuanAfiliado", "edadFuanAfiliado", "nombreTipoZona",
                                                        "idTipoSexo", "nombreTipoSexo", "numCarnetFuanAfiliado"
                                                    ],
                                                    disabled: true,
                                                    disabledBySexo: ["gestanteIfppir", "furIfppir", "fppIfppir", "gIfppir", "pIfppir", "cIfppir", "aIfppir", "nacidoVivoIfppir"],
                                                    fechaUltFormato: "fechaUltFicha",
                                                    validarFormato: true,
                                                    handler: Coomuce.Util.buscarAfiliadoFicha,
                                                    iconCls: "x-fa fa-binoculars",
                                                    preguntasIdentificacion: true,
                                                    reference: "botonBuscarAfiliado",
                                                    tooltip: "Lista de Afiliados",
                                                    width: 30
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Carné: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            readOnly: true,
                                            name: "numCarnetFuanAfiliado",
                                            reference: "numCarnetFuanAfiliado"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Fecha de nacimiento: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "datefield",
                                            disabled: true,
                                            hideLabel: true,
                                            format: "d/m/Y",
                                            name: "fechaNacimientoFuanAfiliado",
                                            readOnly: true,
                                            reference: "fechaNacimientoFuanAfiliado"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Departamento: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "compDepartamento",
                                            readOnly: true,
                                            reference: "compDepartamento",
                                            width: 300
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Municipio: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "compCiudad",
                                            readOnly: true,
                                            reference: "compCiudad",
                                            width: 300
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: "textfield",
                            disabled: true,
                            fieldLabel: "Dirección",
                            name: "direccionFuanAfiliado",
                            readOnly: true,
                            reference: "direccionFuanAfiliado",
                            width: 600
                        },
                        {
                            layout: {
                                type: "table",
                                columns: 4
                            },
                            items: [
                                {
                                    items: [
                                        { xtype: "label", html: "Teléfono: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "telefonoFuanAfiliado",
                                            readOnly: true,
                                            reference: "telefonoFuanAfiliado",
                                            width: 200
                                        }
                                    ]
                                }, 
                                {
                                    items: [
                                        { xtype: "label", html: "Celular: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "celularFuanAfiliado",
                                            readOnly: true,
                                            reference: "celularFuanAfiliado",
                                            width: 200
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: "textfield",
                            disabled: true,
                            readOnly: true,
                            fieldLabel: "Ips Primaria",
                            name: "ipsPrimariaIfppir",
                            reference: "ipsPrimariaIfppir",
                            width: 400
                        }, 
                        {
                            layout: {
                                type: "table",
                                columns: 8
                            },
                            items: [
                                {
                                    items: [
                                        { xtype: "label", html: "Edad: " }
                                    ]
                                },
                                {
                                    colspan: 3,
                                    items: [
                                        {
                                            xtype: "numberfield",
                                            disabled: true,
                                            hideLabel: true,
                                            hideTrigger: true,
                                            name: "edadFuanAfiliado",
                                            readOnly: true,
                                            reference: "edadFuanAfiliado",
                                            width: 200
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Sisben: " }
                                    ]
                                },
                                {
                                    colspan: 3,
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "puntajeSisbenFuanAfiliado",
                                            readOnly: true,
                                            reference: "puntajeSisbenFuanAfiliado",
                                            width: 200
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Raza: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            readOnly: true,
                                            hideLabel: true,
                                            name: "razaIfppir",
                                            reference: "razaIfppir",
                                            width: 200
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Escolaridad: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            readOnly: true,
                                            name: "escolaridadIfppir",
                                            reference: "escolaridadIfppir",
                                            width: 200
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Zona: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "nombreTipoZona",
                                            readOnly: true,
                                            reference: "nombreTipoZona"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Sexo: " }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "numberfield", hidden: true, name: "idTipoSexo", reference: "idTipoSexo" },
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "nombreTipoSexo",
                                            readOnly: true,
                                            reference: "nombreTipoSexo",
                                            width: 200
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: "fieldset",
                            layout: {
                                type: "table",
                                columns: 4
                            },
                            style: {
                                "background-color": "#ffffff"
                            },
                            title: "Familiar Más Cercano",
                            items: [
                                {
                                    items: [
                                        { xtype: "label", html: "Nombre: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "familiarCercanoIfppir",
                                            reference: "familiarCercanoIfppir",
                                            width: 400
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Teléfono: "}
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "telefonoFamiliarIfppir",
                                            reference: "telefonoFamiliarIfppir"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: "checkbox",
                            disabled: true,
                            fieldLabel: "Gestante",
                            listeners: {
                                change: "onChangeCheck"
                            },
                            name: "gestanteIfppir",
                            reference: "gestanteIfppir",
                            value: false
                        }, 
                        {
                            defaults: {
                                border: true,
                                height: 40
                            },
                            layout: {
                                type: "table",
                                columns: 4
                            },
                            items: [
                                {
                                    colspan: 2,
                                    //height: 20,
                                    items: [
                                        { xtype: "label", html: "Fecha de aplicación de toma de datos en salud" }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Fecha Última Menstruación: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "datefield",
                                            disabled: true,
                                            format: "d/m/Y",
                                            hideLabel: true,
                                            listeners: {
                                                select: "onSelectDate"
                                            },
                                            name: "furIfppir",
                                            readOnly: true,
                                            reference: "furIfppir"
                                        }
                                    ]
                                },
                                {
                                    colspan: 2,
                                    items: [
                                        {
                                            xtype: "datefield",
                                            disabled: true,
                                            format: "d/m/Y",
                                            hideLabel: true,
                                            name: "fechaAplicacionIfppir",
                                            reference: "fechaAplicacionIfppir"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Fecha Probable de Parto: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "datefield",
                                            disabled: true,
                                            format: "d/m/Y",
                                            hideLabel: true,
                                            name: "fppIfppir",
                                            readOnly: true,
                                            reference: "fppIfppir"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Peso (kg)" }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "numberfield",
                                            allowDecimals: true,
                                            decimalPrecision: 2,
                                            disabled: true,
                                            hideLabel: true,
                                            hideTrigger: true,
                                            listeners: {
                                                change: "onChangeNumber"
                                            },
                                            name: "pesoIfppir",
                                            reference: "pesoIfppir"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Gestaciones:" }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "gIfppir",
                                            reference: "gIfppir"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Altura (cm)" }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "numberfield",
                                            allowDecimals: false,
                                            disabled: true,
                                            hideLabel: true,
                                            hideTrigger: true,
                                            listeners: {
                                                change: "onChangeNumber"
                                            },
                                            name: "tallaIfppir",
                                            reference: "tallaIfppir"
                                        }
                                    ]
                                },                                
                                {
                                    items: [
                                        { xtype: "label", html: "Partos:" }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "pIfppir",
                                            reference: "pIfppir"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Indice de masa corporal" }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "numberfield",
                                            allowDecimals: true,
                                            decimalPrecision: 2,
                                            disabled: true,
                                            hideLabel: true,
                                            name: "masaCorporalIfppir",
                                            readOnly: true,
                                            reference: "masaCorporalIfppir"
                                        }
                                    ]
                                }, 
                                {
                                    items: [
                                        { xtype: "label", html: "Cesáreas:" }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "cIfppir",
                                            reference: "cIfppir"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Perímetro Abdominal (cm)" }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "numberfield",
                                            allowDecimals: false,
                                            disabled: true,
                                            hideLabel: true,
                                            name: "perimetroAbdominalIfppir",
                                            reference: "perimetroAbdominalIfppir"
                                        }
                                    ]
                                }, 
                                {
                                    items: [
                                        { xtype: "label", html: "Abortos:" }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "aIfppir",
                                            reference: "aIfppir"
                                        }
                                    ]
                                },
                                {
                                    height: 80,
                                    items: [
                                        { xtype: "label", html: "Tensión Arterial" }
                                    ]
                                },
                                {
                                    height: 80,
                                    items: [
                                        {
                                            xtype: "numberfield",
                                            allowDecimals: false,
                                            disabled: true,
                                            fieldLabel: "Sistólica (mm Hg)",
                                            labelWidth: 120,
                                            minValue: 100,
                                            maxValue: 230,
                                            name: "sistolicaIfppir",
                                            reference: "sistolicaIfppir",
                                            width: 220
                                        },
                                        {
                                            xtype: "numberfield",
                                            allowDecimals: false,
                                            disabled: true,
                                            fieldLabel: "Diastólica (mm Hg)",
                                            labelWidth: 120,
                                            minValue: 50,
                                            maxValue: 140,
                                            name: "diastolicaIfppir",
                                            reference: "diastolicaIfppir",
                                            width: 220
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Nacido Vivo" }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "numberfield",
                                            allowDecimals: false,
                                            disabled: false,
                                            hideLabel: true,
                                            name: "nacidoVivoIfppir",
                                            reference: "nacidoVivoIfppir"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            layout: {
                                type: "table",
                                columns: 8
                            },
                            items: [
                                {
                                    items: [
                                        { xtype: "label", html: "Colesterol Total: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "numberfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "colesterolTotalIfppir",
                                            reference: "colesterolTotalIfppir"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Colesterol LDL: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "numberfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "colesterolLdlIfppir",
                                            reference: "colesterolLdlIfppir"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Colesterol HDL: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "numberfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "colesterolHdlIfppir",
                                            reference: "colesterolHdlIfppir"
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { xtype: "label", html: "Glicemia: " }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: "textfield",
                                            disabled: true,
                                            hideLabel: true,
                                            name: "glicemiaIfppir",
                                            reference: "glicemiaIfppir"
                                        }
                                    ]
                                }
                            ]
                        }
                        
                    ],
                    title: "Datos Básicos Afiliado"
                },
                {
                    xtype: "grid",
                    bind: {
                        store: "{getPreguntasFactor}"
                    },
                    border: true,
                    columns: [
                        { dataIndex: "idPregunta", header: "Id Pregunta", hidden: true },
                        { 
                            text: "Factor de Riesgo",
                            columns: [
                                { dataIndex: "codigoPregunta", header: "Código", width: 100 },
                                { dataIndex: "descripcionPregunta", header: "Pregunta", width: 600 }
                            ]
                        },
                        {
                            text: "Respuesta",
                            columns: [
                                { xtype: "checkcolumn", dataIndex: "respuestaSiPregunta", header: "Si", listeners: { checkchange: "onGridColumnCheckChange" }, width: 100 },
                                { xtype: "checkcolumn", dataIndex: "respuestaNoPregunta", header: "No", listeners: { checkchange: "onGridColumnCheckChange" }, width: 100 }
                            ]
                        }
                    ],
                    columnLines: true,
                    features: [{
                        ftype: 'grouping'
                    }],
                    height: 300,
                    id: "Grid-Ifppir-Principal",
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },
                    sortableColumns: false
                },
                {
                    xtype: "textarea",
                    disabled: true,
                    fieldLabel: "Observaciones",
                    name: "observacionIfppir",
                    reference: "observacionIfppir",
                    width: 600
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
                                { xtype: "textfield", name: "firmaIfppir", hidden: true, reference: "firmaIfppir" },
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