Ext.define("CoomuceMod.view.DemandaInducida.PurisuController", {
    extend: "Ext.app.ViewController",
    alias: "controller.demandainducida-purisu",

    statusComponent: false,
    components: [
    "idDepartamento", "idCiudad", "botonGuardar", "botonCancelar",
    "botonGridAdicionar", "botonGridRemover"
    ],

    getTitleView: function () {
        return this.getView().getTitle();
    },

    fnLimpiarDatos: function () {
        var form = Ext.getCmp("Form-Purisu-Principal");
        form.getForm().reset();

        var storeGrid = Ext.getCmp('Grid-Purisu-Principal').getStore();
        storeGrid.removeAll();
    },

    fnEnableDisableComponent: function () {
        var me = this;

        for (var i = 0; i < me.components.length; i++) {
            var obj = me.lookupReference(me.components[i]);

            if (me.statusComponent) {
                obj.disable();
            }
            else {
                obj.enable();
            }
        }

        var botonNuevaPlanilla = me.lookupReference("botonNuevaPlanilla");
        var botonBuscarAfiliado = me.lookupReference("botonBuscarAfiliado");

        if (me.statusComponent) {
            botonNuevaPlanilla.enable();
            botonBuscarAfiliado.disable();

            me.statusComponent = false;
        }
        else {
            botonNuevaPlanilla.disable();
            botonBuscarAfiliado.enable();

            me.fnLimpiarDatos();
            me.statusComponent = true;
        }
    },

    onBotonNuevaPlanillaClick: function (btn) {
        var me = this;

        me.fnEnableDisableComponent();
    },

    onBotonCancelarClick: function () {
        var me = this;

        Ext.Msg.confirm(this.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                me.fnLimpiarDatos();
                me.fnEnableDisableComponent();
                var tabPanel = Ext.getCmp("CoomucePurisu");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();

        var grid = Ext.getCmp('Grid-Purisu-Principal');
        var storeGrid = grid.getStore();
        
        if(storeGrid.data.items.length == 0) {
            Coomuce.Util.ShowMessage({ type: "INFO", title: "Atención", msg: "Debe agregar datos a la lista para continuar" });
        }else {
            Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
                if (btn === "yes") {
                //var fechaAtencionPurisu = me.lookupReference("fechaAtencionPurisu");
                var form = Ext.getCmp("Form-Purisu-Principal");
                var infoForm = form.getForm().getValues();
                var infoPurisu = {
                    idInfoPurisu: 0, // inicializo este campo que no se captura en pantalla
                    fechaAtencionPurisu: infoForm.fechaAtencionPurisu,
                    idDepartamento: infoForm.idDepartamento,
                    idCiudad: infoForm.idCiudad,
                    idUsuario: Coomuce.Util.DatosUsuario.idUsuario,
                    tipoDiligenciamientoInfoPurisu: infoForm.tipoDiligenciamientoInfoPurisu
                };

                var grid = Ext.getCmp('Grid-Purisu-Principal');
                var storeGrid = grid.getStore();

                var listaPurisuModel = [];
                //var itemsValidar = [];

                Ext.each(storeGrid.data.items, function (ob, index, all) {
                    var dato = ob.data;
                    dato.idTipoVisitaDomiciliaria = Ext.isEmpty(dato.idTipoVisitaDomiciliaria) ? null : dato.idTipoVisitaDomiciliaria;
                    dato.idProgramaResolucion412 = Ext.isEmpty(dato.idProgramaResolucion412) ? null : dato.idProgramaResolucion412;
                    dato.idGrupoInteres = Ext.isEmpty(dato.idGrupoInteres) ? null : dato.idGrupoInteres;
                    dato.idSeguimientoProgramasIntervencionRiesgo = Ext.isEmpty(dato.idSeguimientoProgramasIntervencionRiesgo) ? null : dato.idSeguimientoProgramasIntervencionRiesgo;
                    dato.idGruposFocales = Ext.isEmpty(dato.idGruposFocales) ? null : dato.idGruposFocales;

                    if (dato.idMotivoConsulta.length > 0) {
                        dato.idMotivoConsulta = dato.idMotivoConsulta.split(",");
                    }
                    if (dato.idMotivoContacto.length > 0) {
                        dato.idMotivoContacto = dato.idMotivoContacto.split(",");
                    }
                    if (dato.idPiezasInformativas.length > 0) {
                        dato.idPiezasInformativas = dato.idPiezasInformativas.split(",");
                    }

                    dato.idEje = Ext.isEmpty(dato.idEje) ? null : dato.idEje;
                    dato.idEje1 = Ext.isEmpty(dato.idEje1) ? null : dato.idEje1;
                    dato.idModulo = Ext.isEmpty(dato.idModulo) ? null : dato.idModulo;
                    dato.idModulo1 = Ext.isEmpty(dato.idModulo1) ? null : dato.idModulo1;
                    dato.idUnidad = Ext.isEmpty(dato.idUnidad) ? null : dato.idUnidad;
                    dato.idUnidad1 = Ext.isEmpty(dato.idUnidad1) ? null : dato.idUnidad1;
                    //dato.numCarnePurisu = dato.numCarnetFuanAfiliado;
                    //if (ob.dirty) {
                        //if (ob.phantom) {
                            listaPurisuModel.push(dato);
                        //}
                        //else {
                        //    viejos.push(ob.data);
                        //}

                        //itemsValidar.push(ob);
                    //}
                });


                var conf = {
                    url: Coomuce.Url.Funciones + "PurisuGuardar",
                    data: {
                        infoPurisu: infoPurisu,
                        listaPurisuModel: listaPurisuModel
                    },
                    targetMask: form,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        me.fnLimpiarDatos();
                        me.fnEnableDisableComponent();
                        //form.getForm().reset();
                        //firmaPurisu.setValue("");
                        //botonEliminar.setText("");
                        Ext.getCmp("Grid-MotivosConsulta").selModel.deselectAll();
                        Ext.getCmp("Grid-MotivosContacto").selModel.deselectAll();
                        Ext.getCmp("Grid-PiezasInformativas").selModel.deselectAll();
                        var tabPanel = Ext.getCmp("CoomucePurisu");
                        tabPanel.destroy();
                    }
                };
                console.log(conf);
                Coomuce.Util.EnviarPost(conf);
            }
        });
}
},

onSelectCombo: function (combo, record, eOpts) {
    var me = this;

    if (combo.dependent) {
            //var rec = Ext.getCmp("Grid-Purisu-Principal").selModel.getSelection();

        //    if (combo.updateRecords !== undefined) {
        //        for (var i = 0; i < combo.campos.length; i++) {
        //            var ob = me.lookupReference(combo.campos[i]);
        //            ob.setValue(record.get(combo.campos[i]));
        //        }
        //    }
        //    else {
        //        rec[0].set(combo.idCampo, record.get(combo.idCampo));
        //    }
        //}
        //else {
            var ob = me.lookupReference(combo.campoDependent);

            var name = "";
            if (combo.name === "idEje1" || combo.name === "idUnidad1" || combo.name === "idModulo1") {
                name = combo.name.substring(0, combo.name.length - 1);
            }
            else {
                name = combo.name;
            }
            var params = {};
            params[name] = record.get(name);

            ob.getStore().load({ params: params });
        }
    },

    onSelectionChange: function (sm, selected, eOpts) {
        var me = this;

        if (selected.length > sm.maxSelection) {
            for (var i = sm.maxSelection; i < selected.length; i++) {
                var rec = selected[i];
                sm.deselect(rec, true); // deseleccionar registros que sobrepasan el limite
            }
            return false;
        }

        if (selected.length > 0) {
            var valueId = selected.map(function (item) {
                return item.data[sm.idCampo];
            });

            var valueComp = selected.map(function (item) {
                return item.data[sm.compCampo];
            })

            var ob = me.lookupReference(sm.idCampo);
            ob.setValue(valueId);

            ob = me.lookupReference(sm.compCampo);
            ob.setValue(valueComp);
        }
    },

    onBotonGridAdicionarClick: function (btn) {
        var me = this;
        if(Ext.getCmp('identificacionFuanAfiliado').getValue() == ""){
            Coomuce.Util.ShowMessage({ type: "INFO", title: "Atención", msg: "Debe Cargar un Afiliado para continuar" });
        }else{
            var botonEliminar = this.lookupReference("botonEliminar");
            var firmaPurisu = me.lookupReference("firmaPurisu");
            var form = Ext.getCmp("Form-Datos");
            var datos = form.getForm().getValues();

            var grid = Ext.getCmp('Grid-Purisu-Principal');
            var storeGrid = grid.getStore();
            var nextId = storeGrid.max("idPurisu");
            var ult = storeGrid.getCount();

            datos.idInfoPurisu = 0;
            datos.idPurisu = (nextId === undefined ? 1 : nextId + 1);
            for (var i = 0; i < btn.combos.length; i++){
                var ob = me.lookupReference(btn.combos[i]);

                datos[btn.campos[i]] = ob.getRawValue();
            }

            datos.idFuanAfiliado = parseInt(datos.idFuanAfiliado);
            datos.numCarnePurisu = datos.numCarnetFuanAfiliado;
            datos.usisPurisu = (datos.usisPurisu == undefined ? false : (datos.usisPurisu === "on" ? true : false));
            datos.ipsPrimariaPurisu = (datos.ipsPrimariaPurisu == undefined ? false : (datos.ipsPrimariaPurisu === "on" ? true : false));
            datos.telefonicaPurisu = (datos.telefonicaPurisu == undefined ? false : (datos.telefonicaPurisu === "on" ? true : false));
            datos.cauPurisu = (datos.cauPurisu == undefined ? false : (datos.cauPurisu === "on" ? true : false));
            datos.actividadExtramuralPurisu = (datos.actividadExtramuralPurisu == undefined ? false : (datos.actividadExtramuralPurisu === "on" ? true : false));
            datos.firmaPurisu = firmaPurisu.getValue();


            console.log(datos);
            var row = [];
            row.push(datos);

            storeGrid.insert(ult, row);

            Ext.Msg.confirm("Atención", "Desea agregar una nueva Canalización a este Afiliado?", function (btn) {
                if (btn === "yes") {

                }else {
                    form.getForm().reset();
                    firmaPurisu.setValue("");
                    botonEliminar.setText("");
                    Ext.getCmp("Grid-MotivosConsulta").selModel.deselectAll();
                    Ext.getCmp("Grid-MotivosContacto").selModel.deselectAll();
                    Ext.getCmp("Grid-PiezasInformativas").selModel.deselectAll();
                }
            });
        }
    },

    onBotonGridRemoverClick: function () {
        var storeGrid = Ext.getCmp('Grid-Purisu-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onUploadDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminar");
        var firmaPurisu = this.lookupReference("firmaPurisu");

        botonEliminar.setText(file.data);
        firmaPurisu.setValue(file.data);

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
        btn.setText("");

        var firmaPurisu = this.lookupReference("firmaPurisu");
        firmaPurisu.setValue("");
    },

    onUploadAudioDataComplete: function (source, file) {
        var titleView = this.getTitleView();

        var record = source.getWidgetRecord();

        record.set("archivoAudioInfoPurisu", file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Archivo de audio importado correctamente." });
    },

    onBotonEliminarArchivoAudioClick: function (btn) {
        var record = btn.getWidgetRecord();

        record.set("archivoAudioInfoPurisu", "");
    },

    onBotonImportarArchivoClick: function () {
        var me = this;

        var store = Ext.create("Ext.data.Store", {
            autoLoad: true,
            fields: [
            "idInfoPurisu", "tipoDiligenciamientoInfoPurisu", { name: "fechaAtencionPurisu", convert: Coomuce.Util.parseDate },
            "nombreCompletoUsuario", "idCiudad", "idUsuario", "archivoAudioInfoPurisu"
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetPurisuAll",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        });

        var pagingBar = Ext.widget("pagingtoolbar", {
            store: store,
            displayInfo: true,
            displayMsg: "Registros {0} - {1} de {2}"
        });

        var grid = Ext.create("Ext.grid.Panel", {
            bbar: pagingBar,
            columns: [
            { dataIndex: "idInfoPurisu", header: "No. Plantilla" },
            { dataIndex: "tipoDiligenciamientoInfoPurisu", header: "Tipo Diligenciamiento" },
            { xtype: "datecolumn", dataIndex: "fechaAtencionPurisu", format: "d/m/Y", header: "Fecha" },
            { dataIndex: "nombreCompletoUsuario", header: "Usuario" },
            {
                xtype: "widgetcolumn", header: "", width: 60, widget: {
                    xtype: 'uploader',
                    uploadConfig: {
                        uploadUrl: Coomuce.Url.Funciones + "ImportarAudioPurisu",
                        maxFileSize: 10 * 1024 * 1024
                    },
                    inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                    listeners: {
                        'uploaddatacomplete': me.onUploadAudioDataComplete,
                        'uploaderror': me.onUploadError
                    }
                }
            },
            {
                xtype: "widgetcolumn", dataIndex: "archivoAudioInfoPurisu", header: "Archivo de audio", width: 200, widget: {
                    xtype: "button",
                    iconCls: "x-fa fa-minus-circle",
                    textAlign: "left",
                    handler: me.onBotonEliminarArchivoAudioClick
                }
            }
            ],
            columnLines: true,
            loadMask: true,
            store: store
        });

        var fnGuardarCambios = function () {
            var datos = [];

            Ext.each(store.data.items, function (ob, index, all) {
                if (ob.dirty) {
                    if (!ob.phantom) {
                        datos.push({
                            idInfoPurisu: ob.data.idInfoPurisu,
                            idCiudad: ob.data.idCiudad,
                            idUsuario: ob.data.idUsuario,
                            archivoAudioInfoPurisu: ob.data.archivoAudioInfoPurisu,
                            tipoDiligenciamientoInfoPurisu: ob.data.tipoDiligenciamientoInfoPurisu
                        });
                    }
                }
            });

            Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
                if (btn === "yes") {
                    var conf = {
                        url: Coomuce.Url.Funciones + "PurisuGuardarCambios",
                        data: {
                            datos: datos
                        },
                        targetMask: grid,
                        msgMask: "Guardando datos...",
                        fnSuccess: function (response) {
                            store.load();
                        }
                    };

                    Coomuce.Util.EnviarPost(conf);
                }
            });
        };

        var window = Ext.create("Ext.window.Window", {
            height: 500,
            items: grid,
            layout: "fit",
            modal: true,
            tbar: {
                items: [
                { text: "Guardar cambios", handler: fnGuardarCambios }
                ]
            },
            title: "Importar archivo de audio",
            width: 500
        });

        window.show();
    }

});