Ext.define("CoomuceMod.view.Parametros.ActualizacionBd.TipoNovedad", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.ActualizacionBd.TipoNovedadController",
        "CoomuceMod.view.Parametros.ActualizacionBd.TipoNovedadModel"
    ],

    controller: "parametros-actualizacionbd-tiponovedad",
    viewModel: {
        type: "parametros-actualizacionbd-tiponovedad"
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
                store: '{getTipoNovedad}'
            },
            columns: [
                { dataIndex: "idTipoNovedad", header: "Id", hidden: true },
                {
                    dataIndex: "codigoTipoNovedad", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "nombreTipoNovedad", header: "Nombre", width: 300, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "tipoValorCampoTipoNovedad", header: "Tipo Valor Campo", width: 100, editor: {
                        xtype: "combo",
                        allowBlank: true,
                        bind: {
                            store: "{getTipoValorCampoNovedad}"
                        },
                        displayField: "nombre",
                        editable: false,
                        queryMode: "local",
                        valueField: "nombre"
                    }
                },
                {
                    dataIndex: "valorCampoTipoNovedad", header: "Valor Campo", width: 200, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-TipoNovedad-Principal",
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
