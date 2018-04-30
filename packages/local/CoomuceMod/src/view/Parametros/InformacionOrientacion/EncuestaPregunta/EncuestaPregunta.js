Ext.define("CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaPregunta", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaPreguntaController",
        "CoomuceMod.view.Parametros.InformacionOrientacion.EncuestaPreguntaModel"
    ],

    controller: "parametros-informacionorientacion-encuestapregunta",
    viewModel: {
        type: "parametros-informacionorientacion-encuestapregunta"
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
                    width: 400
                },
                {
                    xtype: "combo",
                    bind: {
                        store: "{getEncuestaCategoria}"
                    },
                    displayField: "compEncuestaCategoria",
                    emptyText: "-- Seleccione categoria --",
                    gridField: true,
                    listeners: {
                        select: "onSelectCombo"
                    },
                    queryMode: "local",
                    reference: "categoria",
                    valueField: "idEncuestaCategoria",
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
                store: '{getEncuestaPregunta}'
            },
            columns: [
                { dataIndex: "idEncuestaPregunta", header: "Id Encuesta Pregunta", hidden: true },
                {
                    dataIndex: "codigoEncuestaPregunta", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "textoEncuestaPregunta", header: "Texto", width: 300, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "tipoPreEncuestaPregunta", header: "Tipo Pregunta", width: 150, editor: {
                        xtype: "combo",
                        allowBlank: false,
                        bind: {
                            store: "{getTipoPregunta}"
                        },
                        displayField: "nombre",
                        queryMode: "local",
                        valueField: "id"
                    }
                },
                {
                    dataIndex: "valorEncuestaPregunta", header: "Valor", width: 100, editor: {
                        xtype: "numberfield",
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-EncuestaPregunta-Principal",
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
