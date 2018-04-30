Ext.define("CoomuceMod.view.Reportes.Interfaces.ConsolidadoFactorRiesgo", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.ConsolidadoFactorRiesgoController",
        "CoomuceMod.view.Reportes.Interfaces.ConsolidadoFactorRiesgoModel"
    ],

    controller: "reportes-interfaces-consolidadofactorriesgo",
    viewModel: {
        type: "reportes-interfaces-consolidadofactorriesgo"
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
                    id: "CFR-ParamFechaInicio",
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
                    id: "CFR-ParamFechaFin",
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
                    ciudadReference: "CFR-ParamCiudad",
                    displayField: "compDepartamento",
                    editable: false,
                    fieldLabel: "Departamento",
                    id: "CFR-ParamDepartamento",
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
                    id: "CFR-ParamCiudad",
                    queryMode: "local",
                    valueField: "idCiudad"
                }
            ],
            ui: "footer"
        }
    ]

});
