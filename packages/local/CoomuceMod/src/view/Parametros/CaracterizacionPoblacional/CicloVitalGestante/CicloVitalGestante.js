Ext.define("CoomuceMod.view.Parametros.CaracterizacionPoblacional.CicloVitalGestante", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.CaracterizacionPoblacional.CicloVitalGestanteController",
        "CoomuceMod.view.Parametros.CaracterizacionPoblacional.CicloVitalGestanteModel"
    ],

    controller: "parametros-caracterizacionpoblacional-ciclovitalgestante",
    viewModel: {
        type: "parametros-caracterizacionpoblacional-ciclovitalgestante"
    },

    layout: "border",

    items: [
        {
            items: [
                {
                    xtype: "combo",
                    bind: {
                        store: "{getFactorRiesgo}"
                    },
                    displayField: "compFactorRiesgo",
                    editable: false,
                    fieldLabel: "Factor de Riesgo",
                    listeners: {
                        select: "onSelectCombo"
                    },
                    loadCombo: true,
                    queryMode: "local",
                    reference: "factorRiesgo",
                    valueField: "idFactorRiesgo",
                    width: 350
                },
                {
                    xtype: "combo",
                    bind: {
                        store: "{getSubFactorRiesgo}"
                    },
                    displayField: "compSubFactorRiesgo",
                    editable: false,
                    fieldLabel: "Sub-Factor de Riesgo",
                    listeners: {
                        select: "onSelectCombo"
                    },
                    loadCombo: false,
                    queryMode: "local",
                    reference: "subFactorRiesgo",
                    valueField: "idSubFactorRiesgo",
                    width: 350
                },
                {
                    xtype: "grid",
                    bind: {
                        store: '{getPreguntasSubFactorRiesgo}'
                    },
                    border: true,
                    columns: [
                        { dataIndex: "idPreguntasSubFactorRiesgo", header: "Id", hidden: true },
                        { dataIndex: "idSubFactorRiesgo", header: "Id Sub Factor", hidden: true },
                        {
                            dataIndex: "compPreguntasSubFactorRiesgo", header: "Descripción", width: 400
                        }
                    ],
                    columnLines: true,
                    height: 450,

                    id: "Grid-PreguntasSubFactorRiesgo",
                    loadMask: true,

                    selModel: {
                        type: 'checkboxmodel',
                        checkOnly: true //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
                    },
                    sortableColumns: false
                }
            ],
            rbar: {
                items: [
                    {
                        handler: "onBotonAgregarItemListaClick",
                        iconCls: "x-fa fa-arrow-circle-right",
                        tooltip: "Agregar preguntas seleccionadas a la lista."
                    }
                ],
                layout: {
                    pack: "center"
                },
                ui: "footer"
            },
            region: "west",
            width: 500
        },
        {
            xtype: "grid",
            bind: {
                store: '{getCicloVitalGestante}'
            },
            border: true,
            columns: [
                { dataIndex: "idCicloVitalGestante", header: "Id", hidden: true },
                { dataIndex: "compFactorRiesgo", header: "Factor Riesgo", width: 200 },
                { dataIndex: "compSubFactorRiesgo", header: "Sub Factor Riesgo", width: 300 },
                { dataIndex: "idPreguntasSubFactorRiesgo", header: "Id Pregunta", hidden: true },
                { dataIndex: "compPreguntasSubFactorRiesgo", header: "Pregunta", width: 400 }
            ],
            columnLines: true,
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
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        { text: "Eliminar", iconCls: "x-fa fa-eraser", handler: "onBotonEliminarClick", reference: 'eliminarButton', disabled: true }
                    ]
                }
            ],

            id: "Grid-CicloVitalGestante-Principal",
            loadMask: true,

            region: "center",
            selModel: {
                type: 'checkboxmodel',
                checkOnly: true, //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
                listeners: {
                    selectionchange: 'onGridSelectionChange'
                }
            },
            sortableColumns: false
        }

        //{
        //    bbar: {
        //        items: [
        //            { text: "Agregar selecciones", handler: "onBotonAgregarSeleccionClick" }
        //        ]
        //    },
        //    items: [
        //        {
        //            bodyPadding: 10,
        //            border: true,
        //            defaults: { anchor: "90%" },
        //            items: [
        //                {
        //                    xtype: "combo",
        //                    bind: { store: "{getCicloVital}" },
        //                    displayField: "compCicloVital",
        //                    editable: false,
        //                    fieldLabel: "Ciclo Vital",
        //                    gridCiclo: true,
        //                    listeners: {
        //                        select: "onSelectCombo"
        //                    },
        //                    queryMode: "local",
        //                    reference: "idCicloVital",
        //                    valueField: "idCicloVital"
        //                },

        //                {
        //                    xtype: "combo",
        //                    bind: { store: "{getTipoSexo}" },
        //                    displayField: "compTipoSexo",
        //                    editable: false,
        //                    fieldLabel: "Sexo",
        //                    gridCiclo: true,
        //                    listeners: {
        //                        select: "onSelectCombo"
        //                    },
        //                    queryMode: "local",
        //                    reference: "idTipoSexo",
        //                    valueField: "idTipoSexo"
        //                }
        //            ],
        //            region: "west",
        //            width: 350
        //        },
        //    ],
        //    layout: "border",
        //    region: "center"
        //},
        //{
        //    xtype: "grid",
        //    bind: {
        //        store: '{getPreguntasCicloVital}'
        //    },
        //    border: true,
        //    columns: [
        //        { dataIndex: "idCicloVital", header: "Id Ciclo", hidden: true },
        //        { dataIndex: "compCicloVital", header: "Ciclo Vital", width: 200 },
        //        { dataIndex: "idTipoSexo", header: "Id Sexo", hidden: true },
        //        { dataIndex: "compTipoSexo", header: "Sexo", width: 150 },
        //        { dataIndex: "idPreguntasSubFactorRiesgo", header: "Id Pregunta", hidden: true },
        //        { dataIndex: "compPreguntasSubFactorRiesgo", header: "Pregunta", width: 450 }
        //    ],
        //    columnLines: true,
        //    dockedItems: [
        //        {
        //            xtype: 'toolbar',
        //            dock: 'bottom',
        //            ui: 'footer',
        //            layout: {
        //                pack: 'left'
        //            },
        //            items: [
        //                { minWidth: 80, text: 'Guardar', handler: 'onBotonGuardarClick' },
        //                { minWidth: 80, text: 'Cancelar', handler: 'onBotonCancelarClick' }
        //            ]
        //        },
        //        {
        //            xtype: 'toolbar',
        //            dock: 'top',
        //            ui: 'footer',
        //            items: [
        //                { text: "Eliminar", iconCls: "x-fa fa-eraser", handler: "onBotonEliminarClick", reference: 'eliminarButton', disabled: true }
        //            ]
        //        }
        //    ],
        //    height: 400,

        //    id: "Grid-PreguntasCicloVital-Principal",
        //    loadMask: true,

        //    region: "south",
        //    selModel: {
        //        type: 'checkboxmodel',
        //        checkOnly: true, //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
        //        listeners: {
        //            selectionchange: 'onGridSelectionChange'
        //        }
        //    },
        //    sortableColumns: false
        //}
    ]

});
