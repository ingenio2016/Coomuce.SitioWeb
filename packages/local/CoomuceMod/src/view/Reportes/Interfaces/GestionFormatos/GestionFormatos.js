Ext.define("CoomuceMod.view.Reportes.Interfaces.GestionFormatos", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.GestionFormatosController",
        "CoomuceMod.view.Reportes.Interfaces.GestionFormatosModel"
    ],

    controller: "reportes-interfaces-gestionformatos",
    viewModel: {
        type: "reportes-interfaces-gestionformatos"
    },

    layout: "fit",

    dockedItems: [
        {
            xtype: "toolbar",
            dock: "top",
            layout: {
                align: "middle"
            },
            items: [
                {
                    xtype: "combo",
                    bind: { store: "{getFormatos}" },
                    displayField: "nombreFormato",
                    editable: false,
                    fieldLabel: "Formatos",
                    id: "ParamFormatos",
                    labelWidth: 70,
                    queryMode: "local",
                    valueField: "nombreTabla",
                    width: 400
                }, "->",
                {
                    text: "Generar",
                    handler: "onBotonGenerarReporteClick"
                }
            ],
            ui: "footer"
        },
        {
            xtype: "toolbar",
            dock: "top",
            items: [
                {
                    xtype: "datefield",
                    fieldLabel: "Fecha Inicio",
                    format: "Y-m-d",
                    id: "ParamFechaInicio",
                    labelWidth: 70,
                    maxValue: new Date(),
                    submitFormat: "Y-m-d",
                    value: new Date(),
                    width: 200
                },
                {
                    xtype: "datefield",
                    fieldLabel: "Fecha Fin",
                    format: "Y-m-d",
                    id: "ParamFechaFin",
                    labelWidth: 60,
                    maxValue: new Date(),
                    submitFormat: "Y-m-d",
                    value: new Date(),
                    width: 200
                },
                {
                    xtype: "combo",
                    bind: { store: "{getUsuario}" },
                    displayField: "nombreCompletoGestor",
                    editable: false,
                    fieldLabel: "Gestores",
                    id: "ParamGestores",
                    labelWidth: 60,
                    queryMode: "local",
                    valueField: "idUsuario",
                    width: 300
                }
            ]
        //},
        //{
        //    xtype: "toolbar",
        //    dock: "top",
        //    items: [
        //        {
        //            xtype: "combo",
        //            bind: {
        //                store: "{getDepartamento}"
        //            },
        //            ciudadReference: "idCiudad",
        //            displayField: "compDepartamento",
        //            editable: false,
        //            fieldLabel: "Departamento",
        //            id: "ParamDepartamento",
        //            listeners: {
        //                select: "onSelectCombo"
        //            },
        //            queryMode: "local",
        //            ubicacion: true,
        //            valueField: "idDepartamento"
        //        },
        //        {
        //            xtype: "combo",
        //            bind: {
        //                store: "{getCiudad}"
        //            },
        //            displayField: "compCiudad",
        //            editable: false,
        //            fieldLabel: "Municipio/Distrito",
        //            id: "ParamCiudad",
        //            queryMode: "local",
        //            valueField: "idCiudad"
        //        }
        //    ],
        //    ui: "footer"
        }
    ]

});
