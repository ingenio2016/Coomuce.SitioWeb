Ext.define("CoomuceMod.view.Parametros.DemandaInducida.PiezasInformativas", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.DemandaInducida.PiezasInformativasController",
        "CoomuceMod.view.Parametros.DemandaInducida.PiezasInformativasModel"
    ],

    controller: "parametros-demandainducida-piezasinformativas",
    viewModel: {
        type: "parametros-demandainducida-piezasinformativas"
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
                { text: "Adicionar", iconCls: "x-fa fa-file-o", handler: "onBotonAdicionarClick" }, "-",
                { text: "Eliminar", iconCls: "x-fa fa-eraser", handler: "onBotonEliminarClick", reference: 'eliminarButton', disabled: true }
            ]
        }
    ],

    items: [
        {
            xtype: "grid",
            bind: {
                store: '{getPiezasInformativas}'
            },
            columns: [
                { dataIndex: "idPiezasInformativas", header: "Id", hidden: true },
                {
                    dataIndex: "codigoPiezasInformativas", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "descripcionPiezasInformativas", header: "Descripción", width: 300, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-PiezasInformativas-Principal",
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
