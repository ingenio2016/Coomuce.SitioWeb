Ext.define('CoomuceMod.view.Reportes.GenerarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-generar',

    onBotonAbrirTabClick: function () {
        var me = this;

        var grid = me.lookupReference("gridListaReportes");
        var selection = grid.selModel.getSelection();

        var tab = me.lookupReference("tabReportes");

        var existe = tab.items.findIndex('$className', selection[0].data.vista);
        console.log(existe);
        // si la pestaña ya existe, solamente la activo en caso contrario la creo
        if (existe > -1) {
            tab.setActiveTab(existe);
            return false;
        }
        Ext.destroy(selection[0].data.vista);
        var panel = Ext.create(selection[0].data.vista, {
            border: true,
            closable: true,
            idReporte: selection[0].data.idReporte,
            iconCls: "x-fa fa-book",
            listeners: {
                destroy: function (view, eOpts) {
                    Ext.destroy(selection[0].data.vista);
                }
            },
            title: "Reporte de " + selection[0].data.nombreReporte
        });

        tab.add(panel);
        tab.setActiveTab(panel);
    },
    onBotonCancelarClick: function () {
        var me = this;

        Ext.Msg.confirm("Atención", "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var tabPanel = Ext.getCmp("CoomuceGenerarReporte");
                tabPanel.destroy();
            }
        });
    }


});
