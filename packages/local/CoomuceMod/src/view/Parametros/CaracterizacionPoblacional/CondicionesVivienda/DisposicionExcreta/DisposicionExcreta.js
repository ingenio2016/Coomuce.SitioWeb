Ext.define("CoomuceMod.view.Parametros.CaracterizacionPoblacional.CondicionesVivienda.DisposicionExcreta", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.CaracterizacionPoblacional.CondicionesVivienda.DisposicionExcretaController",
        "CoomuceMod.view.Parametros.CaracterizacionPoblacional.CondicionesVivienda.DisposicionExcretaModel"
    ],

    controller: "parametros-caracterizacionpoblacional-condicionesvivienda-disposicionexcreta",
    viewModel: {
        type: "parametros-caracterizacionpoblacional-condicionesvivienda-disposicionexcreta"
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
                store: '{getDisposicionExcreta}'
            },
            columns: [
                { dataIndex: "idDisposicionExcreta", header: "Id", hidden: true },
                {
                    dataIndex: "codigoDisposicionExcreta", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "nombreDisposicionExcreta", header: "Nombre", width: 300, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-DisposicionExcreta-Principal",
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
