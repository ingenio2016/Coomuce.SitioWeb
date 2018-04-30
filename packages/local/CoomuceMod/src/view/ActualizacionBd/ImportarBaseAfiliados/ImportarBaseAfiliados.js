Ext.define("CoomuceMod.view.ActualizacionBd.ImportarBaseAfiliados", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.ActualizacionBd.ImportarBaseAfiliadosController",
        "CoomuceMod.view.ActualizacionBd.ImportarBaseAfiliadosModel"
    ],

    controller: "actualizacionbd-importarbaseafiliados",
    viewModel: { type: "actualizacionbd-importarbaseafiliados" },

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
                { minWidth: 80, text: 'Guardar', handler: 'onBotonGuardarClick', reference: "botonGuardar" },
                { minWidth: 80, text: 'Cancelar', handler: 'onBotonCancelarClick', reference: "botonCancelar" }
            ]
        }
    ],

    items: [
        {
            xtype: "form",
            bodyPadding: 10,
            id: "Form-ImportarBase",
            scrollable: true,
            items: [
                {
                    xtype: "label",
                    html: "Seleccione el archivo con extension .xlsx que desea importar.<br />El archivo debe contener la siguiente estructura de columnas.<br /><br />Carnet, primerApellidoFuanAfiliado, segundoApellidoFuanAfiliado, primerNombreFuanAfiliado, segundoNombreFuanAfiliado,	idTipoIdentificacion,  identificacionFuanAfiliado, idTipoSexo, fechaNacimientoFuanAfiliado, idTipoEtnia, idTipoDiscapacidad, idCondicionDiscapacidad, puntajeSisbenFuanAfiliado, idGrupoPoblacional, arlFuanAfiliado, pensionFuanAfiliado, ibcFuanAfiliado, direccionFuanAfiliado, telefonoFuanAfiliado, celularFuanAfiliado, emailFuanAfiliado, CodDep, CodMun, idTipoZona, barrioFuanAfiliado, primerApellidoConyugueFuanAfiliado, segundoApellidoConyugueFuanAfiliado, primerNombreConyugueFuanAfiliado, segundoNombreConyugueFuanAfiliado, idTipoIdentificacionConyugue, identificacionConyugueFuanAfiliado, idTipoSexoConyugue, fechaNacimientoConyugueFuanAfiliado, TipoIdCabezaFamilia, NumidCabezaFamilia"
                },
                {
                    xtype: "filefield",
                    emptyText: "Seleccione el archivo .xlsx",
                    fieldLabel: "Archivo",
                    name: "archivo",
                    buttonConfig: {
                        iconCls: "x-fa fa-upload",
                        text: ""
                    },
                    width: 500
                }
            ]
        }
    ]
});