Ext.define("CoomuceMod.view.Parametros.Generales.Ips", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Parametros.Generales.IpsController",
        "CoomuceMod.view.Parametros.Generales.IpsModel"
    ],

    controller: "parametros-generales-ips",
    viewModel: {
        type: "parametros-generales-ips"
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
                { text: "Eliminar", iconCls: "x-fa fa-eraser", handler: "onBotonEliminarClick", reference: 'eliminarButton', disabled: true }, "->",
                { text: "Importar ips desde plano", iconCls: "x-fa fa-upload", handler: "onBotonImportarClick" }
            ]
        }
    ],

    items: [
        {
            xtype: "grid",
            bind: {
                store: '{getIps}'
            },
            columns: [
                { dataIndex: "idIps", header: "Id", hidden: true },
                {
                    dataIndex: "codigoIps", header: "Código", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "razonIps", header: "Razón Social", width: 300, editor: {
                        allowBlank: false
                    }
                },
                { dataIndex: "idTipoIdentificacion", header: "Id Tipo Identificacion", hidden: true },
                {
                    dataIndex: "compTipoIdentificacion", header: "Tipo Identificación", width: 100, editor: {
                        xtype: "combo",
                        allowBlank: false,
                        bind: {
                            store: "{getTipoIdentificacion}"
                        },
                        displayField: "compTipoIdentificacion",
                        editable: false,
                        idCampo: "idTipoIdentificacion",
                        listeners: {
                            select: "onSelectCombo"
                        },
                        queryMode: "local",
                        valueField: "compTipoIdentificacion"
                    }
                },
                {
                    dataIndex: "identificacionIps", header: "Identificación", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "direccionIps", header: "Dirección", width: 100, editor: {
                        allowBlank: false
                    }
                },
                {
                    dataIndex: "telefonoIps", header: "Teléfono", width: 100, editor: {
                        allowBlank: true
                    }
                },
                { dataIndex: "idDepartamento", header: "Id Departamento", hidden: true },
                {
                    dataIndex: "compDepartamento", header: "Departamento", width: 100, editor: {
                        xtype: "combo",
                        allowBlank: false,
                        bind: {
                            store: "{getDepartamento}"
                        },
                        displayField: "compDepartamento",
                        editable: false,
                        idCampo: "idDepartamento",
                        listeners: {
                            select: "onSelectCombo"
                        },
                        queryMode: "local",
                        valueField: "compDepartamento"
                    }
                },
                { dataIndex: "idCiudad", header: "Id Ciudad", hidden: true },
                {
                    dataIndex: "compCiudad", header: "Ciudad", width: 100, editor: {
                        xtype: 'combo',
                        allowBlank: false,
                        bind: { store: '{getCiudad}' },
                        displayField: 'compCiudad',
                        editable: false,
                        idCampo: "idCiudad",
                        listeners: {
                            focus: "onFocusCombo",
                            select: "onSelectCombo"
                        },
                        queryMode: 'local',
                        valueField: 'compCiudad'
                    }
                },
                {
                    dataIndex: "representanteIps", header: "Representante", width: 100, editor: {
                        allowBlank: true
                    }
                },
                {
                    dataIndex: "nivelIps", header: "Nivel", width: 100, editor: {
                        xtype: 'combo',
                        allowBlank: true,
                        bind: { store: '{getNivel}' },
                        displayField: 'nivelIps',
                        editable: false,
                        idCampo: "nivelIps",
                        listeners: {
                            select: "onSelectCombo"
                        },
                        queryMode: 'local',
                        valueField: 'nivelIps'
                    }
                },
                {
                    dataIndex: "contactoIps", header: "Contacto", width: 100, editor: {
                        allowBlank: true
                    }
                },
                {
                    dataIndex: "emailIps", header: "E-mail", width: 100, editor: {
                        allowBlank: true,
                        vtype: "email"
                    }
                }
            ],
            columnLines: true,

            id: "Grid-Ips-Principal",
            loadMask: true,

            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            selModel: {
                type: 'checkboxmodel',
                checkOnly: false, //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
                listeners: {
                    selectionchange: 'onGridSelectionChange'
                }
            },
            sortableColumns: false
        }
    ]

});
