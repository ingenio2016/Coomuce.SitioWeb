Ext.define("CoomuceMod.view.Reportes.Interfaces.ReporteGestantes", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.ReporteGestantesController",
        "CoomuceMod.view.Reportes.Interfaces.ReporteGestantesModel"
    ],

    controller: "reportes-interfaces-reportegestantes",
    viewModel: {
        type: "reportes-interfaces-reportegestantes"
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
                    xtype: "datefield",
                    fieldLabel: "Fecha Inicio",
                    format: "Y-m-d",
                    id: "GES-ParamFechaInicio",
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
                    id: "GES-ParamFechaFin",
                    labelWidth: 60,
                    maxValue: new Date(),
                    submitFormat: "Y-m-d",
                    value: new Date(),
                    width: 200
                },
                "->",
                {
                    text: "Generar",
                    handler: "onBotonGenerarReporteClick"
                }
            ],
            //listeners: {
            //    beforerender: "onToolbarBeforeRender"
            //},
            ui: "footer"
        },
        {
            xtype: "toolbar",
            dock: "top",
            items: [
                {
                    xtype: "combo",
                    bind: {
                        store: "{getDepartamento}"
                    },
                    ciudadReference: "GES-ParamCiudad",
                    displayField: "compDepartamento",
                    editable: false,
                    fieldLabel: "Departamento",
                    id: "GES-ParamDepartamento",
                    listeners: {
                        select: "onSelectCombo"
                    },
                    queryMode: "local",
                    ubicacion: true,
                    valueField: "idDepartamento"
                },
                {
                    xtype: "combo",
                    bind: {
                        store: "{getCiudad}"
                    },
                    displayField: "compCiudad",
                    editable: false,
                    fieldLabel: "Municipio/Distrito",
                    id: "GES-ParamCiudad",
                    queryMode: "local",
                    valueField: "idCiudad"
                }
            ],
            ui: "footer"
        }
    ]
});
