﻿Ext.define("CoomuceMod.view.Administracion.Departamento", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Administracion.DepartamentoController",
        "CoomuceMod.view.Administracion.DepartamentoModel"
    ],

    controller: "administracion-departamento",
    viewModel: {
        type: "administracion-departamento"
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
                store: '{getDepartamento}'
            },
            columns: [
                { dataIndex: "idDepartamento", header: "Id", hidden: true },
                {
                    dataIndex: "codigoDepartamento", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "nombreDepartamento", header: "Nombre", width: 300, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-Departamento-Principal",
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
