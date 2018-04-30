Ext.define("CoomuceMod.view.Parametros.ParticipacionSocial.Modulo", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.ParticipacionSocial.ModuloController",
        "CoomuceMod.view.Parametros.ParticipacionSocial.ModuloModel"
    ],

    controller: "parametros-participacionsocial-modulo",
    viewModel: {
        type: "parametros-participacionsocial-modulo"
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
                    unidadField: true,
                    listeners: {
                        select: "onSelectCombo"
                    },
                    queryMode: "local",
                    reference: "eje",
                    valueField: "idEje",
                    width: 300
                },
                {
                    xtype: "combo",
                    bind: {
                        store: "{getUnidad}"
                    },
                    displayField: "compUnidad",
                    emptyText: "-- Seleccione unidad --",
                    gridField: true,
                    listeners: {
                        select: "onSelectCombo"
                    },
                    queryMode: "local",
                    reference: "unidad",
                    valueField: "idUnidad",
                    width: 300
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
                store: '{getModulo}'
            },
            columns: [
                { dataIndex: "idModulo", header: "IdLiteral", hidden: true },
                {
                    dataIndex: "codigoModulo", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "nombreModulo", header: "Nombre", width: 300, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-Modulo-Principal",
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
