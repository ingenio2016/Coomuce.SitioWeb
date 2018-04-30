/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'Coomuce',

    extend: 'Coomuce.Application',

    requires: [
        //'Coomuce.view.main.Main',
        'Coomuce.view.login.Login',
        "Ext.data.validator.Presence",
        "Ext.form.*",
        "Ext.grid.*",
        "Ext.layout.container.*",
        "Ext.ux.multiupload.*"
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    //mainView: 'Coomuce.view.main.Main'
    mainView: 'Coomuce.view.login.Login'//,

    //-------------------------------------------------------------------------
    // Most customizations should be made to Coomuce.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
