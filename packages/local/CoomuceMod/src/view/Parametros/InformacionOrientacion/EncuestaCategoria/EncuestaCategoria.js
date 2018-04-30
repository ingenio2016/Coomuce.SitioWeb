Ext.define("CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaCategoria", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaCategoriaController",
        "CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaCategoriaModel"
    ],

    controller: "parametros-informacionorientacion-encuestacategoria",
    viewModel: {
        type: "parametros-informacionorientacion-encuestacategoria"
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
                        store: "{getVista}"
                    },
                    displayField: "nombre",
                    emptyText: "-- Seleccione encuesta --",
                    id: "idDomVista",
                    listeners: {
                        select: "onSelectCombo"
                    },
                    queryMode: "local",
                    valueField: "id",
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
                store: '{getEncuestaCategoria}'
            },
            columns: [
                { dataIndex: "idEncuestaCategoria", header: "Id Encuesta Categoria", hidden: true },
                { dataIndex: "idDomVista", header: "Id Encuesta", hidden: true },
                {
                    dataIndex: "codigoEncuestaCategoria", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "nombreEncuestaCategoria", header: "Nombre", width: 300, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "ordenEncuestaCategoria", header: "Orden", width: 80, editor: {
                        xtype: "numberfield",
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-EncuestaCategoria-Principal",
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
