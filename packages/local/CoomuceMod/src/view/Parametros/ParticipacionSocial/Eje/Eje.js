Ext.define("CoomuceMod.view.Parametros.ParticipacionSocial.Eje", {
    extend: "Ext.panel.Panel",
    
    requires: [
        "CoomuceMod.view.Parametros.ParticipacionSocial.EjeController",
        "CoomuceMod.view.Parametros.ParticipacionSocial.EjeModel"
    ],

    controller: "parametros-participacionsocial-eje",
    viewModel: {
        type: "parametros-participacionsocial-eje"
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
                store: '{getEje}'
            },
            columns: [
                { dataIndex: "idEje", header: "Id", hidden: true },
                {
                    dataIndex: "codigoEje", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "nombreEje", header: "Nombre", width: 300, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-Eje-Principal",
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
