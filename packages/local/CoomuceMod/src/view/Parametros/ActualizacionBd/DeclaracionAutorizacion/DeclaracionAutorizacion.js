Ext.define("CoomuceMod.view.Parametros.ActualizacionBd.DeclaracionAutorizacion", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.ActualizacionBd.DeclaracionAutorizacionController",
        "CoomuceMod.view.Parametros.ActualizacionBd.DeclaracionAutorizacionModel"
    ],

    controller: "parametros-actualizacionbd-declaracionautorizacion",
    viewModel: {
        type: "parametros-actualizacionbd-declaracionautorizacion"
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
                store: '{getDeclaracionAutorizacion}'
            },
            columns: [
                { dataIndex: "idDeclaracionAutorizacion", header: "Id", hidden: true },
                {
                    dataIndex: "codigoDeclaracionAutorizacion", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "descripcionDeclaracionAutorizacion", header: "Descripción", width: 300, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-DeclaracionAutorizacion-Principal",
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
