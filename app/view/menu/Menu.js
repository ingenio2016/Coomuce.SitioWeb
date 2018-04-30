Ext.define("Coomuce.view.menu.Menu", {
    extend: "Ext.list.Tree",

    requires: [
        "Coomuce.view.menu.MenuController",
        "Coomuce.view.menu.MenuModel"
    ],

    controller: "main-menu",
    viewModel: {
        type: "main-menu"
    },

    listeners: {
        afterRender: "onAfterRender"
    },

    xtype: "mainmenu",

    bind: "{menuItems}",
    listeners: {
        click: {
            element: 'element',
            fn: 'onItemClick'
        }
    },

    singleExpand: true,
    ui: 'nav'

});
