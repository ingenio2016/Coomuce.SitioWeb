Ext.define("CoomuceMod.view.Administracion.ConfiguracionCuerpoCorreo", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Administracion.ConfiguracionCuerpoCorreoController",
        "CoomuceMod.view.Administracion.ConfiguracionCuerpoCorreoModel"
    ],

    controller: "administracion-configuracioncuerpocorreo",
    viewModel: { type: "administracion-configuracioncuerpocorreo" },

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
        }
    ],

    items: [
        {
            xtype: "form",
            bodyPadding: 10,
            defaults: {
                anchor: "50%"
            },
            defaultType: "textfield",
            id: "Form-ConfiguracionCuerpoCorreo-Principal",
            items: [
                { hidden: true, name: "idConfiguracionCuerpoCorreo" },
                {
                    xtype: "combo",
                    bind: {
                        store: "{getTipoConfiguracionCuerpoCorreo}"
                    },
                    displayField: "nombre",
                    editable: false,
                    emptyText: "-- Seleccione tipo de cuerpo --",
                    listeners: {
                        select: "onSelectCombo"
                    },
                    name: "tipoConfiguracionCuerpoCorreo",
                    queryMode: "local",
                    reference: "tipoConfiguracionCuerpoCorreo",
                    valueField: "id"
                },
                {
                    allowBlank: false, emptyText: "Titulo o asunto de correo", fieldLabel: "Titulo/Asunto", name: "tituloConfiguracionCuerpoCorreo"
                },
                {
                    xtype: "label", html: "Cuerpo"
                },
                {
                    xtype: "htmleditor",
                    height: 300,
                    name: "mensajeConfiguracionCuerpoCorreo"
                },
                {
                    xtype: "label", html: "Variables: {0} = Primer Nombre, {1} = Segundo Nombre, {2} = Primer Apellido, {3} = Segundo Apellido, {4} = Usuario, {5} = Contraseña<br />Para incrustar las variables se debe digitar el digito correspondiente a la variable tal cual como se muestra."
                }
            ]
        }
    ]

});