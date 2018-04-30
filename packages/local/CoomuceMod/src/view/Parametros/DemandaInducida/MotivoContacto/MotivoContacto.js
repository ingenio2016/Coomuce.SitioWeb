Ext.define("CoomuceMod.view.Parametros.DemandaInducida.MotivoContacto", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.DemandaInducida.MotivoContactoController",
        "CoomuceMod.view.Parametros.DemandaInducida.MotivoContactoModel"
    ],

    controller: "parametros-demandainducida-motivocontacto",
    viewModel: {
        type: "parametros-demandainducida-motivocontacto"
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
                store: '{getMotivoContacto}'
            },
            columns: [
                { dataIndex: "idMotivoContacto", header: "Id", hidden: true },
                {
                    dataIndex: "codigoMotivoContacto", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "descripcionMotivoContacto", header: "Descripción", width: 300, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-MotivoContacto-Principal",
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
