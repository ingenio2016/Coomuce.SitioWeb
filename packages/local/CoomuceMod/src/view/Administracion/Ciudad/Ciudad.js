Ext.define("CoomuceMod.view.Administracion.Ciudad", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Administracion.CiudadController",
        "CoomuceMod.view.Administracion.CiudadModel"
    ],

    controller: "administracion-ciudad",
    viewModel: {
        type: "administracion-ciudad"
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
                        store: "{getDepartamento}"
                    },
                    displayField: "nombreDepartamento",
                    emptyText: "-- Seleccione departamento --",
                    listeners: {
                        select: "onSelectDepartamento"
                    },
                    queryMode: "local",
                    reference: "departamento",
                    valueField: "idDepartamento",
                    width: 250
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
                store: '{getCiudad}'
            },
            columns: [
                { dataIndex: "idDepartamento", header: "Id Departamento", hidden: true },
                { dataIndex: "idCiudad", header: "Id Ciudad", hidden: true },
                {
                    dataIndex: "codigoCiudad", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "nombreCiudad", header: "Nombre", width: 300, editor: {
                        allowBlank: false
                    }
                }
            ],
            columnLines: true,

            id: "Grid-Ciudad-Principal",
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
