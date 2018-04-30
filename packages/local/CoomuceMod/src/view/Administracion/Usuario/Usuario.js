Ext.define("CoomuceMod.view.Administracion.Usuario", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Administracion.UsuarioController",
        "CoomuceMod.view.Administracion.UsuarioModel"
    ],

    controller: "administracion-usuario",
    viewModel: { type: "administracion-usuario" },

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
                { text: "Adicionar", iconCls: "x-fa fa-file-o", handler: "onBotonAdicionarClick" },
                { text: "Eliminar", iconCls: "x-fa fa-eraser", handler: "onBotonEliminarClick", reference: 'eliminarButton', disabled: true },
                { text: "Reenviar Credenciales", iconCls: "x-fa fa-key", handler: "onBotonReenviarCredencialClick", reference: "reenviarCredencialButton", disabled: true }
            ]
        }
    ],

    items: [
        {
            xtype: "grid",
            bind: {
                store: "{getUsuario}"
            },
            columns: [
                { dataIndex: "idUsuario", header: "Id", hidden: true },
                { dataIndex: "idTipoIdentificacion", header: "Id Tipo Identificacion", hidden: true },
                {
                    dataIndex: "nombreTipoIdentificacion", header: "Tipo Identificación", width: 150, editor: {
                        xtype: "combo",
                        allowBlank: false,
                        bind: {
                            store: "{getTipoIdentificacion}"
                        },
                        displayField: "nombreTipoIdentificacion",
                        editable: false,
                        campoId: "idTipoIdentificacion",
                        listeners: {
                            select: "onSelectCombo"
                        },
                        queryMode: "local",
                        valueField: "nombreTipoIdentificacion"
                    }
                },
                {
                    dataIndex: "identificacionUsuario", header: "No. Identificación", width: 150, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "primerApellidoUsuario", header: "Primer Apellido", width: 150, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "segundoApellidoUsuario", header: "Segundo Apellido", width: 150, editor: {
                        allowBlank: true
                    }
                },
                {
                    dataIndex: "primerNombreUsuario", header: "Primer Nombre", width: 150, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "segundoNombreUsuario", header: "Segundo Nombre", width: 150, editor: {
                        allowBlank: true
                    }
                },
                {
                    dataIndex: "emailUsuario", header: "Email", width: 150, editor: {
                        allowBlank: false,
                        vtype: "email"
                    }
                },
                {
                    dataIndex: "celularUsuario", header: "Celular", width: 150, editor: {
                        allowBlank: true
                    }
                },
                { dataIndex: "idRol", header: "Id Rol", hidden: true },
                {
                    dataIndex: "nombreRol", header: "Rol", width: 150, editor: {
                        xtype: "combo",
                        allowBlank: false,
                        bind: {
                            store: "{getRol}"
                        },
                        displayField: "nombreRol",
                        editable: false,
                        campoId: "idRol",
                        listeners: {
                            select: "onSelectCombo"
                        },
                        queryMode: "local",
                        valueField: "nombreRol"
                    }
                },
                { xtype: "booleancolumn", dataIndex: "esTemporalUsuario", header: "Tiene clave temporal?", trueText: "Sí", falseText: "No", width: 150 },
                { xtype: "checkcolumn", dataIndex: "estaHabilitadoUsuario", header: "Habilitado?" }
            ],
            columnLines: true,

            id: "Grid-Usuario-Principal",
            loadMask: true,

            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            selModel: {
                type: 'checkboxmodel',
                checkOnly: false,
                listeners: {
                    selectionchange: 'onGridSelectionChange'
                }
            },
            sortableColumns: false
        }
    ]

});