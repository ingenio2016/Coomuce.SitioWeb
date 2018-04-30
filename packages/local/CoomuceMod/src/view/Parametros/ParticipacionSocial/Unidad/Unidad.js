Ext.define("CoomuceMod.view.Parametros.ParticipacionSocial.Unidad", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.ParticipacionSocial.UnidadController",
        "CoomuceMod.view.Parametros.ParticipacionSocial.UnidadModel"
    ],

    controller: "parametros-participacionsocial-unidad",
    viewModel: {
        type: "parametros-participacionsocial-unidad"
    },

    layout: "fit",

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
            items: [
                {
                    xtype: "combo",
                    bind: {
                        store: "{getEje}"
                    },
                    displayField: "compEje",
                    emptyText: "-- Seleccione eje --",
                    gridField: true,
                    listeners: {
                        select: "onSelectCombo"
                    },
                    queryMode: "local",
                    reference: "eje",
                    valueField: "idEje",
                    width: 400
                }

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
                { minWidth: 80, text: 'Guardar', handler: 'onBotonGuardarClick' },
                { minWidth: 80, text: 'Cancelar', handler: 'onBotonCancelarClick' }
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
                store: '{getUnidad}'
            },
            columns: [
                { dataIndex: "idUnidad", header: "Id", hidden: true },
                {
                    dataIndex: "codigoUnidad", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "nombreUnidad", header: "Nombre", width: 300, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-Unidad-Principal",
            loadMask: true,

            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            selModel: {
                type: 'checkboxmodel',
                checkOnly: true,
                listeners: {
                    selectionchange: 'onGridSelectionChange'
                }
            },
            sortableColumns: false
        }
    ]

});
