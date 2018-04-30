Ext.define("CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaLiteral", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaLiteralController",
        "CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaLiteralModel"
    ],

    controller: "parametros-informacionorientacion-encuestaliteral",
    viewModel: {
        type: "parametros-informacionorientacion-encuestaliteral"
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
                    categoriaField: true,
                    listeners: {
                        select: "onSelectCombo"
                    },
                    queryMode: "local",
                    reference: "vista",
                    valueField: "id",
                    width: 300
                },
                {
                    xtype: "combo",
                    bind: {
                        store: "{getEncuestaCategoria}"
                    },
                    displayField: "compEncuestaCategoria",
                    emptyText: "-- Seleccione categoria --",
                    preguntaField: true,
                    listeners: {
                        select: "onSelectCombo"
                    },
                    queryMode: "local",
                    reference: "categoria",
                    valueField: "idEncuestaCategoria",
                    width: 300
                },
                {
                    xtype: "combo",
                    bind: {
                        store: "{getEncuestaPregunta}"
                    },
                    displayField: "compEncuestaPregunta",
                    emptyText: "-- Seleccione pregunta --",
                    gridField: true,
                    listeners: {
                        select: "onSelectCombo"
                    },
                    queryMode: "local",
                    reference: "pregunta",
                    valueField: "idEncuestaPregunta",
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
                store: '{getEncuestaLiteral}'
            },
            columns: [
                { dataIndex: "idEncuestaLiteral", header: "Id Encuesta Literal", hidden: true },
                {
                    dataIndex: "liteEncuestaLiteral", header: "Literal", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "textoEncuestaLiteral", header: "Texto", width: 300, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "valorEncuestaLiteral", header: "Valor", width: 100, editor: {
                        xtype: "numberfield",
                        allowBlank: false
                    }
                },
                {
                    xtype: "checkcolumn", dataIndex: "checkedEncuestaLiteral", header: "Selección Default"
                }
            ],
            columnLines: true,

            id: "Grid-EncuestaLiteral-Principal",
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
