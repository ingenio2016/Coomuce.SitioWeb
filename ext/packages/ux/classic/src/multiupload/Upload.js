Ext.Loader.loadScript({ url: '../resources/ux-upload/swfobject.js', onLoad: function () { console.log('swfobject ok'); }, onError: function () { console.log('swfobject error'); } });

Ext.define('Ext.ux.multiupload.Upload', {
    extend: 'Ext.flash.Component',
    requires: [
        'Ext.ux.multiupload.UploadManager'
    ],
    alias: 'widget.uploader',
    width: 101,
    height: 22,
    wmode: 'transparent',
    url: '../resources/ux-upload/Upload.swf',
    statics: {
        instanceId: 0
    },
    constructor: function (config) {
        config = config || {};
        config.instanceId = Ext.String.format('upload-{0}', ++Ext.ux.multiupload.Upload.instanceId);
        config.flashVars = config.flashVars || {};
        config.flashVars = Ext.apply({
            instanceId: config.instanceId,
            buttonImagePath: '../resources/ux-upload/upload.png',
            buttonImageHoverPath: '../resources/ux-upload/upload-hover.png',
            fileFilters: 'Documentos|*.doc;*.docx;*.xls;*.xlsx;*.pdf;*.ppt;*.pptx',
            uploadUrl: '../upload',
            maxFileSize: 0,
            maxQueueLength: 0,
            maxQueueSize: 0,
            callback: 'Ext.ux.multiupload.UploadManager.uploadCallback'
        }, config.uploadConfig);

        this.addStateEvents(
            'fileadded',
            'uploadstart',
            'uploadprogress',
            'uploadcomplete',
            'uploaddatacomplete',
            'queuecomplete',
            'queuedatacomplete',
            'uploaderror'
        );

        this.callParent([config]);
    },
    initComponent: function () {
        Ext.ux.multiupload.UploadManager.register(this);
        this.callParent(arguments);
    },
    onDestroy: function () {
        Ext.ux.multiupload.UploadManager.unregister(this);
        this.callParent(arguments);
    }
});
