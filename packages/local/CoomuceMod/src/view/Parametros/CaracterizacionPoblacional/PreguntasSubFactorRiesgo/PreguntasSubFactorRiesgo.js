Ext.define("CoomuceMod.view.Parametros.CaracterizacionPoblacional.PreguntasSubFactorRiesgo", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.CaracterizacionPoblacional.PreguntasSubFactorRiesgoController",
        "CoomuceMod.view.Parametros.CaracterizacionPoblacional.PreguntasSubFactorRiesgoModel"
    ],

    controller: "parametros-caracterizacionpoblacional-preguntassubfactorriesgo",
    viewModel: {
        type: "parametros-caracterizacionpoblacional-preguntassubfactorriesgo"
    },

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
                { minWidth: 80, text: 'Guardar', handler: 'onBotonGuardarClick' },
                { minWidth: 80, text: 'Cancelar', handler: 'onBotonCancelarClick' }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
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
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
            items: [
                { text: "Adicionar", iconCls: "x-fa fa-file-o", handler: "onBotonAdicionarClick" }, "-",
                { text: "Eliminar", iconCls: "x-fa fa-eraser", handler: "onBotonEliminarClick", reference: 'eliminarButton', disabled: true }
            ]
        }
    ],

    items: [
        {
            xtype: "grid",
            bind: {
                store: '{getPreguntasSubFactorRiesgo}'
            },
            columns: [
                { dataIndex: "idPreguntasSubFactorRiesgo", header: "Id", hidden: true },
                { dataIndex: "idSubFactorRiesgo", header: "Id Sub Factor", hidden: true },
                {
                    dataIndex: "codigoPreguntasSubFactorRiesgo", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "descripcionPreguntasSubFactorRiesgo", header: "Descripción", width: 400, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-PreguntasSubFactorRiesgo-Principal",
            loadMask: true,

            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            selModel: {
                type: 'checkboxmodel',
                checkOnly: true, //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
                listeners: {
                    selectionchange: 'onGridSelectionChange'
                }
            },
            sortableColumns: false
        }
    ]

});
