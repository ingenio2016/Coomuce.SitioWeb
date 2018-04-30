Ext.define('Coomuce.view.menu.MenuController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main-menu',

    onItemClick: function (obj, node, eOpts) {
        console.log(node);
        var me = this;
        var existe;

        try {

            if (Ext.get(obj.target.id).component === undefined) {
                return false;
            }
            var item = Ext.get(obj.target.id).component;
            console.log(item._node.data);
            if (item._node === undefined) {
                return false;
            }

            if (!item._expandable) {
                existe = Ext.getCmp("ContenedorModulo").items.findIndex('$className', item._node.data.vista);

                if (existe > -1) {
                    Ext.getCmp("ContenedorModulo").setActiveTab(existe);
                    return false;
                }
                var vistaName = item._node.data.text;
                if(item._node.data.vista == "CoomuceMod.view.CaracterizacionPoblacional.Ifppir"){
                    vistaName = "Identificación y Focalización";
                }
                if(item._node.data.vista == "CoomuceMod.view.CaracterizacionPoblacional.Hfdfr"){
                    vistaName = "Historia Familiar";
                }
                var tab = Ext.create(item._node.data.vista, (
                    {
                        closable: false,
                        bodyPadding: 12,
                        title: vistaName,
                        iconCls: item._node.data.iconCls,
                        id: item._node.data.idDomVista,
                        width: 200,
                        listeners: {
                            destroy: function (view, eOpts) {
                                console.log(item._node.data.vista);
                                Ext.destroy(item._node.data.vista);
                                console.log(tab);
                            }
                        }
                    }
                ));
                
                Ext.getCmp("ContenedorModulo").add(tab);
                Ext.getCmp("ContenedorModulo").setActiveTab(tab);
            }
        } catch (err) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: "COOMUCE", msg: err.message });
        }
    }

});
