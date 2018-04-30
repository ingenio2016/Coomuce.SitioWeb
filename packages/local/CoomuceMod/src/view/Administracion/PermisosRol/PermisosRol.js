Ext.define("CoomuceMod.view.Administracion.PermisosRol", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Administracion.PermisosRolController",
        "CoomuceMod.view.Administracion.PermisosRolModel"
    ],

    controller: "administracion-permisosrol",
    viewModel: {
        type: "administracion-permisosrol"
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
                        store: "{getRol}"
                    },
                    displayField: "nombreRol",
                    emptyText: "-- Seleccione rol --",
                    listeners: {
                        select: "onSelectRol"
                    },
                    queryMode: "local",
                    reference: "rol",
                    valueField: "idRol",
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
                store: '{getPermisos}'
            },
            columns: [
                { dataIndex: "idRol", header: "Id Rol", hidden: true },
                { dataIndex: "idMenu", header: "Id Menu", hidden: true },
                {
                    dataIndex: "nombreMenu", header: "Menú", width: 300, editor: {
                        xtype: "combo",
                        bind: {
                            store: "{getMenu}"
                        },
                        campoId: "idMenu",
                        displayField: "nombreMenu",
                        listeners: {
                            select: "onSelectDepartamento"
                        },
                        queryMode: "local",
                        valueField: "nombreMenu"
                    }
                },
                { xtype: "checkcolumn", dataIndex: "habilitadoRolMenu", header: "Habilitado?" }
            ],
            columnLines: true,

            id: "Grid-PermisosRol-Principal",
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
