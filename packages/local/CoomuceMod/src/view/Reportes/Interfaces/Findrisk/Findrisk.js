Ext.define("CoomuceMod.view.Reportes.Interfaces.Findrisk", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.FindriskController",
        "CoomuceMod.view.Reportes.Interfaces.FindriskModel"
    ],

    controller: "reportes-interfaces-findrisk",
    viewModel: {
        type: "reportes-interfaces-findrisk"
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
                    id: "FIN-ParamFechaInicio",
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
                    id: "FIN-ParamFechaFin",
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
                    ciudadReference: "FIN-ParamCiudad",
                    displayField: "compDepartamento",
                    editable: false,
                    fieldLabel: "Departamento",
                    id: "FIN-ParamDepartamento",
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
                    id: "FIN-ParamCiudad",
                    queryMode: "local",
                    valueField: "idCiudad"
                }
            ],
            ui: "footer"
        }
    ]
});
