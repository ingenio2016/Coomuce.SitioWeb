Ext.define('CoomuceMod.view.CaracterizacionPoblacional.IfppirController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.caracterizacionpoblacional-ifppir',

    statusComponent: false,
    components: [
    "nombreCompletoAfiliado", "codigoTipoIdentificacion", "identificacionFuanAfiliado", "numCarnetFuanAfiliado", "fechaNacimientoFuanAfiliado",
    "compDepartamento", "compCiudad", "direccionFuanAfiliado", "telefonoFuanAfiliado", "celularFuanAfiliado", "ipsPrimariaIfppir", "edadFuanAfiliado",
    "puntajeSisbenFuanAfiliado", "razaIfppir", "escolaridadIfppir", "nombreTipoZona", "nombreTipoSexo", "familiarCercanoIfppir", "telefonoFamiliarIfppir",
    "gestanteIfppir", "fechaAplicacionIfppir", "pesoIfppir", "tallaIfppir", "masaCorporalIfppir", "perimetroAbdominalIfppir",
    "sistolicaIfppir", "diastolicaIfppir", "nacidoVivoIfppir", "furIfppir", "fppIfppir", "colesterolTotalIfppir", "colesterolLdlIfppir", "colesterolHdlIfppir",
    "glicemiaIfppir", "gIfppir", "pIfppir", "cIfppir", "aIfppir", "observacionIfppir", "botonGuardar", "botonCancelar"
    ],

    getTitleView: function () {
        return this.getView().getTitle();
    },

    fnLimpiarDatos: function () {
        var form = Ext.getCmp("Form-Ifppir-Principal");
        form.getForm().reset();

        var storeGrid = Ext.getCmp('Grid-Ifppir-Principal').getStore();
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

        var botonNuevaFicha = me.lookupReference("botonNuevaFicha");
        var botonBuscarAfiliado = me.lookupReference("botonBuscarAfiliado");

        if (me.statusComponent) {
            botonNuevaFicha.enable();
            botonBuscarAfiliado.disable();

            me.statusComponent = false;
        }
        else {
            botonNuevaFicha.disable();
            botonBuscarAfiliado.enable();

            me.fnLimpiarDatos();

            me.statusComponent = true;
        }
    },

    onBotonNuevaFichaClick: function (btn) {
        var me = this;

        me.fnEnableDisableComponent();
    },

    onBotonCancelarClick: function () {
        var me = this;

        Ext.Msg.confirm(this.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                me.fnLimpiarDatos();
                me.fnEnableDisableComponent();
                var tabPanel = Ext.getCmp("CoomuceIfppir");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var form = Ext.getCmp("Form-Ifppir-Principal");
                var infoIfppir = form.getForm().getValues();
                if(infoIfppir.idFuanAfiliado == 0 || infoIfppir.idFuanAfiliado == undefined || infoIfppir.nombreCompletoAfiliado == ""){
                    Ext.Msg.alert('Advertencia', "Los datos del Usuario estan incompletos. Por favor verifique", Ext.emptyFn);
                    return false;
                }
                if(infoIfppir.pesoIfppir == "") {
                    Ext.Msg.alert('Advertencia', "El campo peso es requerido", Ext.emptyFn);
                    return false;
                }
                if(infoIfppir.tallaIfppir == "") {
                    Ext.Msg.alert('Advertencia', "El campo altura es requerido", Ext.emptyFn);
                    return false;
                }
                if(infoIfppir.perimetroAbdominalIfppir == "") {
                    Ext.Msg.alert('Advertencia', "El campo perimetro abdominal es requerido", Ext.emptyFn);
                    return false;
                }                
                if(infoIfppir.sistolicaIfppir < 100 || infoIfppir.sistolicaIfppir > 230) {
                    Ext.Msg.alert('Advertencia', "El campo sistólica debe ser mayor a 100 y menor a 230", Ext.emptyFn);
                    return false;
                }
                if(infoIfppir.diastolicaIfppir < 50 || infoIfppir.diastolicaIfppir > 140) {
                    Ext.Msg.alert('Advertencia', "El campo diastólica debe ser mayor a 50 y menor a 140", Ext.emptyFn);
                    return false;
                }
                if(infoIfppir.gestanteIfppir){
                    if(infoIfppir.gestanteIfppir == "on"){
                        if(infoIfppir.furIfppir == "") {
                            Ext.Msg.alert('Advertencia', "El campo fecha ultima menstruación es requerido", Ext.emptyFn);
                            return false;
                        }
                        if(infoIfppir.gIfppir == "") {
                            Ext.Msg.alert('Advertencia', "El campo gestaciones es requerido", Ext.emptyFn);
                            return false;
                        }
                        if(infoIfppir.pIfppir == "") {
                            Ext.Msg.alert('Advertencia', "El campo partos es requerido", Ext.emptyFn);
                            return false;
                        }
                        if(infoIfppir.cIfppir == "") {
                            Ext.Msg.alert('Advertencia', "El campo cesareas es requerido", Ext.emptyFn);
                            return false;
                        }
                        if(infoIfppir.aIfppir == "") {
                            Ext.Msg.alert('Advertencia', "El campo abortos es requerido", Ext.emptyFn);
                            return false;
                        }
                        if(infoIfppir.nacidoVivoIfppir == "") {
                            Ext.Msg.alert('Advertencia', "El campo nacido vivo es requerido", Ext.emptyFn);
                            return false;
                        }
                    }
                }
                infoIfppir.numCarneIfppir = infoIfppir.numCarnetFuanAfiliado;
                infoIfppir.idInfoIfppir = 0; // inicializo este campo que no se captura en pantalla
                infoIfppir.gestanteIfppir = (infoIfppir.gestanteIfppir === "on" ? true : false);
                infoIfppir.pesoIfppir = parseFloat(infoIfppir.pesoIfppir).toFixed(2);
                infoIfppir.tallaIfppir = parseInt(infoIfppir.tallaIfppir);
                infoIfppir.masaCorporalIfppir = parseFloat(infoIfppir.masaCorporalIfppir).toFixed(2);
                infoIfppir.perimetroAbdominalIfppir = parseInt(infoIfppir.perimetroAbdominalIfppir);
                infoIfppir.sistolicaIfppir = parseInt(infoIfppir.sistolicaIfppir);
                infoIfppir.diastolicaIfppir = parseInt(infoIfppir.diastolicaIfppir);
                infoIfppir.colesterolLdlIfppir = (infoIfppir.colesterolLdlIfppir)?String(infoIfppir.colesterolLdlIfppir):"0";
                infoIfppir.colesterolHdlIfppir = (infoIfppir.colesterolHdlIfppir)?String(infoIfppir.colesterolHdlIfppir):"0";
                infoIfppir.colesterolTotalIfppir = (infoIfppir.colesterolTotalIfppir)?String(infoIfppir.colesterolTotalIfppir):"0";
                infoIfppir.idUsuario = Coomuce.Util.DatosUsuario.idUsuario;
                
                var grid = Ext.getCmp('Grid-Ifppir-Principal');
                var storeGrid = grid.getStore();

                var listaIfppirModel = [];
                //var itemsValidar = [];

                Ext.each(storeGrid.data.items, function (ob, index, all) {
                    //if (ob.dirty) {
                        //if (ob.phantom) {
                            listaIfppirModel.push(ob.data);
                        //}
                        //else {
                        //    viejos.push(ob.data);
                        //}

                        //itemsValidar.push(ob);
                    //}
                });

                // solo validar cuando se edita o adiciona registros
                //if (itemsValidar.length > 0) {
                //    var validator = Coomuce.Util.dataValidate(itemsValidar);

                //    if (!validator.success) {
                //        Coomuce.Util.ShowMessage({ type: "ERROR", title: titleView, msg: validator.msg });

                //        return false;
                //    }
                //}

                var conf = {
                    url: Coomuce.Url.Funciones + "IfppirGuardar",
                    data: {
                        infoIfppir: infoIfppir,
                        listaIfppirModel: listaIfppirModel
                    },
                    targetMask: form,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        me.fnLimpiarDatos();
                        me.fnEnableDisableComponent();
                        var tabPanel = Ext.getCmp("CoomuceIfppir");
                        tabPanel.destroy();
                    }
                };
                Coomuce.Util.EnviarPost(conf);
                
            }
        });
},

onSelectCombo: function (combo, record, eOpts) {
    var me = this;

    if (combo.dependent) {
        var idCiudad = me.lookupReference("idCiudad");

        idCiudad.getStore().load({ params: { idDepartamento: record.get("idDepartamento") } });
    }
    else {
        for (var i = 0; i < combo.componentReference.length; i++) {
            var o = me.lookupReference(combo.componentReference[i]);

            o.setValue(record.get(combo.componentReference[i]));
        }
        if (record.get("nombreTipoSexo") != "Femenino") {
            for (var i = 0; i < combo.disabledBySexo.length; i++) {
                var ob = me.lookupReference(combo.disabledBySexo[i]);
                ob.setDisabled(true);
            }
        }
        var storeGrid = Ext.getCmp('Grid-Ifppir-Principal').getStore();
        storeGrid.load({ params: { edad: record.get("edadFuanAfiliado") } });
    }
},

onChangeNumber: function (field, value) {
    var me = this;

    var peso = me.lookupReference("pesoIfppir");
    var talla = me.lookupReference("tallaIfppir");
    var masa = me.lookupReference("masaCorporalIfppir");
    var estatura = 0;

    peso = (peso.getValue())?peso.getValue():0;
    talla = (talla.getValue())?(talla.getValue())/100:0;

        estatura = Math.pow(talla, 2); // parseFloat(talla.getValue()) * 2; //parseFloat(talla.getValue());
        if(estatura > 0){
            var imc = parseFloat(peso) / parseFloat(estatura);
            masa.setValue(imc);
        }        
    },

    onSelectDate: function (field, value, eOpts) {
        var me = this;

        var fpp = me.lookupReference("fppIfppir");

        // el siguiente enlace es un ejemplo de como realizar calculos con fechas en javascript
        // https://stackoverflow.com/questions/563406/add-days-to-javascript-date
        var dat = new Date(value.valueOf());
        dat.setDate((dat.getDate() + 280) - 7);

        fpp.setValue(dat);
    },

    onChangeCheck: function(field, newValue, oldValue, eOpts) {
        var me = this;

        var fur = me.lookupReference("furIfppir");
        var nacidoVivoIfppir = me.lookupReference("nacidoVivoIfppir");
        var idSexo = me.lookupReference("idTipoSexo");
        var edad = me.lookupReference("edadFuanAfiliado");

        fur.setReadOnly(!newValue);
        nacidoVivoIfppir.setReadOnly(!newValue);

        var storeGrid = Ext.getCmp('Grid-Ifppir-Principal').getStore();

        if (newValue) {
            storeGrid.proxy.setUrl(Coomuce.Url.Funciones + "GetPreguntasCicloVitalGestanteAll");
            storeGrid.load();
        }
        else {
            storeGrid.proxy.setUrl(Coomuce.Url.Funciones + "GetPreguntasFactorPorCicloAll");
            storeGrid.load({ params: { edad: edad.getValue(), sexo: idSexo.getValue() } });
        }
    },

    onGridColumnCheckChange: function (check, rowIndex, checked, eOpts) {
        console.log(check);
        console.log(rowIndex);
        var grid = Ext.getCmp("Grid-Ifppir-Principal");

        // selecciono la fila
        grid.selModel.select(rowIndex);

        var record = grid.selModel.getSelection()[0];

        if (check.dataIndex === "respuestaSiPregunta") {
            record.set("respuestaNoPregunta", !checked);
        }
        else {
            record.set("respuestaSiPregunta", !checked);
        }

        //    var param = {};
        //    param[combo.campoParam] = record.get(combo.campoParam);

        //    combo.getStore().load({ params: param });

    },

    onUploadDataComplete: function (source, file) {
        var titleView = this.getTitleView();

        var record = source.getWidgetRecord();

        record.set("archivoAudioIfppir", file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Archivo de audio importado correctamente." });
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

        record.set("archivoAudioIfppir", "");
    },

    onBotonImportarArchivoClick: function () {
        var me = this;

        var store = Ext.create("Ext.data.Store", {
            autoLoad: true,
            fields: [
            "idInfoIfppir", "tipoDiligenciamientoIfppir", "codigoTipoIdentificacion", "identificacionFuanAfiliado", "compAfiliado", "archivoAudioIfppir"
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetFunIfppirAll",
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
            { dataIndex: "idInfoIfppir", header: "No. Plantilla" },
            { dataIndex: "tipoDiligenciamientoIfppir", header: "Tipo Diligenciamiento" },
            { dataIndex: "codigoTipoIdentificacion", header: "Tipo Identificación" },
            { dataIndex: "identificacionFuanAfiliado", header: "Identificación" },
            { dataIndex: "compAfiliado", header: "Afiliado" },
            {
                xtype: "widgetcolumn", header: "", width: 60, widget: {
                    xtype: 'uploader',
                    uploadConfig: {
                        uploadUrl: Coomuce.Url.Funciones + "ImportarAudioIfppir",
                        maxFileSize: 10 * 1024 * 1024
                    },
                    inputAttrTpl: "data-qtip='Seleccione el archivo.'",
                    listeners: {
                        'uploaddatacomplete': me.onUploadDataComplete,
                        'uploaderror': me.onUploadError
                    }
                }
            },
            {
                xtype: "widgetcolumn", dataIndex: "archivoAudioIfppir", header: "Archivo de audio", width: 200, widget: {
                    xtype: "button",
                    iconCls: "x-fa fa-minus-circle",
                    textAlign: "left",
                    handler: me.onBotonEliminarArchivoClick
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
                            idInfoIfppir: ob.data.idInfoIfppir,
                            archivoAudioIfppir: ob.data.archivoAudioIfppir
                        });
                    }
                }
            });

            Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
                if (btn === "yes") {
                    var conf = {
                        url: Coomuce.Url.Funciones + "IfppirGuardarCambios",
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
    },

    onUploadFirmaDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarFirma");
        var firmaIfppir = this.lookupReference("firmaIfppir");

        botonEliminar.setText(file.data);
        firmaIfppir.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Archivo de firma importado correctamente." });
    },

    onUploadFirmaError: function (src, data) {
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

    onBotonEliminarFirmaClick: function (btn) {
        btn.setText("");

        var firmaIfppir = this.lookupReference("firmaIfppir");
        firmaIfppir.setValue("");
    }

});