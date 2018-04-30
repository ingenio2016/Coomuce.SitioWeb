Ext.define('CoomuceMod.view.Administracion.DepartamentoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.administracion-departamento',

    stores: {
        getDepartamento: {
            autoLoad: true,
            model: "CoomuceMod.model.Administracion.Departamento",
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Administracion + "GetDepartamentoAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        }
    }
});
