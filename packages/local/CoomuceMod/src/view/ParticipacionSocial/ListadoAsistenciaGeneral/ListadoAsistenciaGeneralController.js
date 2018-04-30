Ext.define("CoomuceMod.view.ParticipacionSocial.ListadoAsistenciaGeneralController", {
    extend: "Ext.app.ViewController",
    alias: "controller.participacionsocial-listadoasistenciageneral",

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();

        var form = Ext.getCmp("Form-ListadoAsistenciaGeneral-Principal");

        // hay datos en los campos
        if (!form.getForm().isValid()) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: titleView, msg: "Se encontraron campos obligatorios que deben ser diligenciados." });

            return false;
        }

        var storeGrid = Ext.getCmp('Grid-ListadoAsistenciaGeneral').getStore();

        var listaAsistencia = [];

        Ext.each(storeGrid.data.items, function (ob, index, all) {
            if (ob.dirty) {
                if (ob.phantom && ob.data.idFuanAfiliado !== 0) {
                    var cont = 0;
                    console.log(ob.data);
                    listaAsistencia.forEach(function(item) {
                        if(ob.data.identificacionFuanAfiliado == listaAsistencia.identificacionFuanAfiliado){
                            cont++;
                        }
                    })
                    if(cont == 0){
                        listaAsistencia.push(ob.data);
                    }
                }
            }
        });

        // validar si registros en el listado
        if (listaAsistencia.length === 0) {
            Coomuce.Util.ShowMessage({ type: "ERROR", title: titleView, msg: "Debe agregar items en la lista." });

            return false;
        }
        
        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var infoAsistencia = form.getForm().getValues();
                infoAsistencia.idAsistenciaGeneral = Ext.isEmpty(infoAsistencia.idAsistenciaGeneral) ? 0 : parseInt(infoAsistencia.idAsistenciaGeneral);
                infoAsistencia.idUsuario = Coomuce.Util.DatosUsuario.idUsuario;

                var conf = {
                    url: Coomuce.Url.Funciones + "ListaAsistenciaGeneralGuardar",
                    data: {
                        infoAsistencia: infoAsistencia,
                        listaAsistencia: listaAsistencia
                    },
                    targetMask: form,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        form.getForm().reset();
                        storeGrid.removeAll();
                        var tabPanel = Ext.getCmp("CoomuceListadoAsistenciaGeneral");
                        tabPanel.destroy();
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });

    },

    onBotonCancelarClick: function () {
        var me = this;

        Ext.Msg.confirm(me.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var form = Ext.getCmp("Form-ListadoAsistenciaGeneral-Principal");
                form.getForm().reset();

                var storeGrid = Ext.getCmp('Grid-ListadoAsistenciaGeneral').getStore();
                storeGrid.removeAll();
                var tabPanel = Ext.getCmp("CoomuceListadoAsistenciaGeneral");
                tabPanel.destroy();
            }
        });
    },

    onBotonConsultarClick: function () {
        var me = this;

        var store = me.getViewModel().getStore("getAsistenciaGeneral");

        var grid = Ext.create("Ext.grid.Panel", {
            columns: [
                { dataIndex: "idAsistenciaGeneral", header: "No. Formato", width: 100 },
                { xtype: "datecolumn", dataIndex: "fechaAsistenciaGeneral", format: "d/m/Y", header: "Fecha", width: 100 },
                { dataIndex: "formadorAsistenciaGeneral", header: "Formador", width: 200 }
            ],
            columnLines: true,
            listeners: {
                rowdblclick: function (grd, record, tr, rowIndex, e, eOpts) {
                    var obCiudad = me.lookupReference("idCiudad");
                    var obUnidad = me.lookupReference("idUnidad");
                    var obModulo = me.lookupReference("idModulo");

                    obCiudad.getStore().load({
                        params: {
                            idDepartamento: record.get("idDepartamento")
                        }
                    });
                    obUnidad.getStore().load({
                        params: {
                            idEje: record.get("idEje")
                        }
                    });
                    obModulo.getStore().load({
                        params: {
                            idUnidad: record.get("idUnidad")
                        }
                    });

                    var form = Ext.getCmp("Form-ListadoAsistenciaGeneral-Principal");
                    var storeGrid = Ext.getCmp('Grid-ListadoAsistenciaGeneral').getStore();

                    form.loadRecord(record);
                    storeGrid.add(record.data.listaAsistencia);

                    win.close();
                }
            },
            store: store
        });

        var win = Ext.create("Ext.window.Window", {
            height: 400,
            items: [grid],
            layout: "fit",
            modal: true,
            title: "Consulta Asistencia General",
            width: 500
        });

        win.show();
        store.load();
    },

    onBotonGridAdicionarClick: function () {
        var me = this;

        var idAsistenciaGeneral = me.lookupReference("idAsistenciaGeneral");

        var grid = Ext.getCmp('Grid-ListadoAsistenciaGeneral');
        // Create a record instance
        var storeGrid = grid.getStore();
        var ult = storeGrid.getCount();

        var id = Ext.isEmpty(idAsistenciaGeneral.getValue()) ? 0 : parseInt(idAsistenciaGeneral.getValue());
        var row = [
            {
                idAsistenciaGeneral: id,
                idFuanAfiliado: 0,
                nombreCompletoAfiliado: "",
                codigoTipoIdentificacion: "",
                identificacionFuanAfiliado: "",
                direccionFuanAfiliado: "",
                areaEntidadListaAsistenciaGeneral: "",
                telefonoFuanAfiliado: "",
                firmaListaAsistenciaGeneral: ""
            }
        ];

        storeGrid.insert(ult, row);
        grid.focus();
        grid.getSelectionModel().select(ult);
    },

    onBotonGridRemoverClick: function () {
        var storeGrid = Ext.getCmp('Grid-ListadoAsistenciaGeneral');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;
        console.log(combo);
        if (!combo.dependent) {
            var rec = Ext.getCmp("Grid-ListadoAsistenciaGeneral").selModel.getSelection();

            if (combo.updateRecords !== undefined) {
                for (var i = 0; i < combo.campos.length; i++) {
                    rec[0].set(combo.campos[i], record.get(combo.campos[i]));
                }
            }
            else {
                rec[0].set(combo.idCampo, record.get(combo.idCampo));
            }
        }
        else {
            if (combo.campoReference != undefined) {
                var ob = me.lookupReference(combo.campoReference);

                ob.setValue(record.get(combo.campo));
            }
            else {
                var ob = me.lookupReference(combo.campoDependent);
                console.log(ob.getStore());
                var params = {};
                params[combo.name] = record.get(combo.name);
                ob.getStore().load({ params: params });
            }
        }
    },

    onUploadDataComplete: function (source, file) {
        var titleView = this.getTitleView();

        var record = source.getWidgetRecord();

        record.set("firmaListaAsistenciaGeneral", file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Archivo de firma importado correctamente." });
    },

    onUploadError: function (src, data) {
        var me = this;
        var titleView = me.getTitleView();

        var msg = 'ErrorType: ' + data.errorType;

        switch (data.errorType) {
            case 'FileSize':
                msg = 'Este archivo es demasiado grande: ' + Ext.util.Format.fileSize(data.fileSize) +
                '. El tamaño máximo de subida es ' + Ext.util.Format.fileSize(data.maxFileSize) + '.';
                break;

            case 'QueueLength':
                msg = 'La longitud de la cola es demasiado larga: ' + data.queueLength +
                '. La longitud máxima de la cola es ' + data.maxQueueLength + '.';
                break;
        }

        Coomuce.Util.ShowMessage({ type: "ERROR", title: titleView, msg: msg });
    },

    onBotonEliminarArchivoClick: function (btn) {
        var record = btn.getWidgetRecord();

        record.set("firmaListaAsistenciaGeneral", "");
    }

});