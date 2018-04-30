Ext.define("CoomuceMod.view.Reportes.Interfaces.ConsolidadoAsistenciaGeneral", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.ConsolidadoAsistenciaGeneralController",
        "CoomuceMod.view.Reportes.Interfaces.ConsolidadoAsistenciaGeneralModel"
    ],

    controller: "reportes-interfaces-consolidadoasistenciageneral",
    viewModel: {
        type: "reportes-interfaces-consolidadoasistenciageneral"
    },

    layout: "fit",

    dockedItems: [
        {
            xtype: "toolbar",
            layout: {
                align: "middle"
            },
            items: [
                {
                    xtype: "datefield",
                    fieldLabel: "Fecha Inicio",
                    format: "Y-m-d",
                    id: "CAG-ParamFechaInicio",
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
                    id: "CAG-ParamFechaFin",
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
                    ciudadReference: "CAG-ParamCiudad",
                    displayField: "compDepartamento",
                    editable: false,
                    fieldLabel: "Departamento",
                    id: "CAG-ParamDepartamento",
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
                    id: "CAG-ParamCiudad",
                    queryMode: "local",
                    valueField: "idCiudad"
                }
            ],
            ui: "footer"
        }
    ]

});
