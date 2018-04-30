Ext.define("CoomuceMod.view.Parametros.CaracterizacionPoblacional.SubFactorRiesgo", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.CaracterizacionPoblacional.SubFactorRiesgoController",
        "CoomuceMod.view.Parametros.CaracterizacionPoblacional.SubFactorRiesgoModel"
    ],

    controller: "parametros-caracterizacionpoblacional-subfactorriesgo",
    viewModel: {
        type: "parametros-caracterizacionpoblacional-subfactorriesgo"
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
                    queryMode: "local",
                    reference: "factorRiesgo",
                    valueField: "idFactorRiesgo",
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
                store: '{getSubFactorRiesgo}'
            },
            columns: [
                { dataIndex: "idSubFactorRiesgo", header: "Id", hidden: true },
                { dataIndex: "idFactorRiesgo", header: "Id Factor", hidden: true },
                {
                    dataIndex: "codigoSubFactorRiesgo", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "nombreSubFactorRiesgo", header: "Nombre", width: 300, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-SubFactorRiesgo-Principal",
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
