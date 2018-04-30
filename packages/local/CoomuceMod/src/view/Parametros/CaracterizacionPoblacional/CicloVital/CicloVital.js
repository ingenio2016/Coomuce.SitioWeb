Ext.define("CoomuceMod.view.Parametros.CaracterizacionPoblacional.CicloVital", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.CaracterizacionPoblacional.CicloVitalController",
        "CoomuceMod.view.Parametros.CaracterizacionPoblacional.CicloVitalModel"
    ],

    controller: "parametros-caracterizacionpoblacional-ciclovital",
    viewModel: {
        type: "parametros-caracterizacionpoblacional-ciclovital"
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
                store: '{getCicloVital}'
            },
            columns: [
                { dataIndex: "idCicloVital", header: "Id", hidden: true },
                {
                    dataIndex: "edadMinCicloVital", header: "Edad Min.", width: 150, editor: {
                        xtype: "numberfield",
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "edadMaxCicloVital", header: "Edad Max.", width: 150, editor: {
                        xtype: "numberfield",
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-CicloVital-Principal",
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
