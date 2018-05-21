Ext.define("CoomuceMod.view.ActualizacionBd.AfiliacionController", {
    extend: "Ext.app.ViewController",
    alias: "controller.actualizacionbd-afiliacion",

    onAfterRender: function() {
        //var salarioBasico = Ext.getStore("confDataStore").data.items;
        var salarioControl = this.lookupReference("ibcFuanAfiliado");
        var salarioControl2 = this.lookupReference("ibcFuanAfiliadoCurrency");
        salarioControl.setValue(Coomuce.Util.DatosUsuario.salarioMinimo);
        salarioControl2.setValue(Coomuce.Util.DatosUsuario.salarioMinimo);
    },

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onBotonSiguienteClick: function (btn) {
        var me = this;

        var form = Ext.getCmp(btn.form);

        if (!form.getForm().isValid()) {
            Coomuce.Util.ShowMessage({ type: "ERROR", msg: "Debe rellenar todos los campos obligatorios." });
            return false;
        }

        var nextForm = Ext.getCmp(btn.nextForm);
        nextForm.setDisabled(false);
        Ext.getCmp("tabFuan").setActiveTab(nextForm);
    },

    onSelectionChange: function (sm, selected, eOpts) {
        var me = this;
        var selectedAuths = sm.selected.items;
        var storeAuth = Ext.getStore("declaracionAutorizacionStore").data.items;
        _.forEach(storeAuth, function(item) {
            item.data.valorFuanDeclaracionAutorizacion = false;
            _.forEach(selectedAuths, function(auth) {
                if(auth.data.idDeclaracionAutorizacion == item.data.idDeclaracionAutorizacion){
                    item.data.valorFuanDeclaracionAutorizacion = true;
                }
            })
        })
    },

    onBlurNumber: function (number, event, eOpts) {
        number.setRawValue(Ext.util.Format.usMoney(number.getValue()));
    },

    onDecimalNumber: function (number, event, eOpts) {
        number.setRawValue(Ext.util.Format.decimals(number.getValue()));
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;

        if (combo.ubicacion !== undefined) {
            var idCiudad = me.lookupReference(combo.ciudadReference);
            idCiudad.getStore().load({ params: { idDepartamento: record.get("idDepartamento") } });
        }
        else if (combo.regimen) {
            for (var i = 0; i < combo.componentReference.length; i++) {
                var o = me.lookupReference(combo.componentReference[i]);
                o.setValue(null);
                o.setReadOnly(record.get("idTipoRegimen") == 1 ? false : true);

                if(record.get("idTipoRegimen") == 1){
                    var salario = this.lookupReference("ibcFuanAfiliado");
                    salario.setValue(Coomuce.Util.DatosUsuario.salarioMinimo);
                    var salario2 = this.lookupReference("ibcFuanAfiliadoCurrency");
                    salario2.setValue(Coomuce.Util.DatosUsuario.salarioMinimo);
                }
            }
        }
        else {
            var rec = Ext.getCmp("Grid-Beneficiarios").selModel.getSelection();

            rec[0].set(combo.idCampo, record.get(combo.idCampo));
        }
    },

    onFocusCombo: function (combo, event, eOpts) {
        if (combo.checkRecord !== undefined) {
            var record = Ext.getCmp("Grid-TipoNovedad").selModel.getSelection()[0];

            if (!Ext.isEmpty(record.get("tipoValorCampoTipoNovedad"))) {
                combo.setReadOnly(false);
                if (record.get("tipoValorCampoTipoNovedad") === "Lista") {
                    var lista = record.get("valorCampoTipoNovedad").split(";");
                    var data = [];
                    for (var i = 0; i < lista.length; i++) {
                        var item = [];
                        item.push(lista[i]);
                        data.push(item);
                    }
                    combo.setHideTrigger(false);
                    combo.getStore().loadData(data);
                }
                else {
                    combo.setHideTrigger(true);
                }
            }
            else {
                combo.setReadOnly(true);
            }
        }
        else {
            var record = Ext.getCmp("Grid-Beneficiarios").selModel.getSelection()[0];

            combo.getStore().load({ params: { idDepartamento: record.get("idDepartamento") } });
        }
    },

    onToolBeneficiarioAdicionarClick: function () {
        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-Beneficiarios').getStore();
        //var nextId = storeGrid.max("idFuanBeneficiariosAfiliado");

        var row = [
        {
                //idFuanBeneficiariosAfiliado: (nextId == undefined ? 1 : nextId + 1),
                idFuanAfiliado: 0,
                idFuan: 0,
                tipoFuanAfiliado: "Beneficiario",
                primerApellidoFuanAfiliado: "",
                segundoApellidoFuanAfiliado: "",
                primerNombreFuanAfiliado: "", 
                segundoNombreFuanAfiliado: "", 
                idTipoIdentificacion: 0,
                compTipoIdentificacion: "",
                identificacionFuanAfiliado: "", 
                idTipoSexo: 1, 
                compTipoSexo: "",
                fechaNacimientoFuanAfiliado: "",
                idTipoParentesco: 0,
                compTipoParentesco: "",
                idTipoEtnia: 1, 
                compTipoEtnia: "",
                idTipoDiscapacidad: 0, 
                compTipoDiscapacidad: "",
                idCondicionDiscapacidad: 0, 
                compCondicionDiscapacidad: "",
                numCarnetFuanAfiliado: "", 
                idGrupoPoblacional: null, 
                arlFuanAfiliado: "", 
                pensionFuanAfiliado: "", 
                ibcFuanAfiliado: 0, 
                direccionFuanAfiliado: "", 
                telefonoFuanAfiliado: "", 
                celularFuanAfiliado: "", 
                emailFuanAfiliado: "", 
                idDepartamento: 0,
                compDepartamento: "",
                idCiudad: 0,
                compCiudad: "",
                idTipoZona: 0, 
                compTipoZona: "",
                barrioFuanAfiliado: "", 
                primerApellidoConyugueFuanAfiliado: "", 
                segundoApellidoConyugueFuanAfiliado: "", 
                primerNombreConyugueFuanAfiliado: "", 
                segundoNombreConyugueFuanAfiliado: "", 
                idTipoIdentificacionConyugue: null, 
                identificacionConyugueFuanAfiliado: "", 
                idTipoSexoConyugue: null, 
                fechaNacimientoConyugueFuanAfiliado: null,
                upcFuanAfiliado: 0,
                puntajeSisbenFuanAfiliado: "",
                upcFuanAfiliado: 0,
                firmaFuanAfiliado: "",
                grupofamiliar: null,
                identificacionAnexo: "",
                cabezafamilia:0
            }
            ];

            storeGrid.insert(0, row);
        },

        onToolBeneficiarioRemoverClick: function () {
            var storeGrid = Ext.getCmp('Grid-Beneficiarios');
            storeGrid.getStore().remove(storeGrid.selModel.getSelection());
        },

        onToolIpsPrimariaAdicionarClick: function () {
        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-IpsPrimaria').getStore();
        var nextId = storeGrid.max("idFuanIpsPrimariaAfiliado");

        var row = [
        {
            idFuanIpsPrimariaAfiliado: (nextId == undefined ? 1 : nextId + 1),
            idFuanAfiliado: 0,
            tipoFuanIpsPrimariaAfiliado: "",
            nombreFuanIpsPrimariaAfiliado: "",
            codigoFuanIpsPrimariaAfiliado: ""
        }
        ];

        storeGrid.insert(0, row);
    },

    onToolIpsPrimariaRemoverClick: function () {
        var storeGrid = Ext.getCmp('Grid-IpsPrimaria');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var form = Ext.getCmp("Form-Afiliacion");
                var infoForm = form.getForm().getValues();
                console.log(infoForm);
                var infoFuan = {
                    idFuan: 0, // inicializo este campo que no se captura en pantalla
                    idTipoTramite: parseInt(infoForm.idTipoTramite),
                    idTipoAfiliacion: infoForm.idTipoAfiliacion,
                    idTipoRegimen: infoForm.idTipoRegimen,
                    idTipoAfiliado: infoForm.idTipoAfiliado,
                    idTipoCotizante: infoForm.idTipoCotizante,
                    codigoCotizanteFuan: infoForm.codigoCotizanteFuan,
                    idUsuario: Coomuce.Util.DatosUsuario.idUsuario,
                    firmaAfiliado: (infoForm["firmaNovedad"])?infoForm["firmaNovedad"]:""
                };

                if(infoFuan.idTipoAfiliacion == "" || infoFuan.idTipoAfiliado == "" || infoFuan.idTipoCotizante == "" || infoFuan.idTipoRegimen == ""){
                    Coomuce.Util.ShowMessage({ type: "ATENCION", title: titleView, msg: "Débe completar correctamente la sección 1. DATOS DEL TRAMITE para continuar" });
                    return false;
                }

                if(infoForm.primerApellidoFuanAfiliado == "" || infoForm.primerNombreFuanAfiliado == "" || infoForm.idTipoIdentificacionII == "" || infoForm.identificacionFuanAfiliado == "" || infoForm.idTipoSexoII == "" || infoForm.fechaNacimientoFuanAfiliado == ""){
                    Coomuce.Util.ShowMessage({ type: "ATENCION", title: titleView, msg: "Débe completar correctamente la sección 2. DATOS BÁSICOS DE IDENTIFICACIÓN para continuar" });
                    return false;
                }

                if(infoForm.idTipoEtnia == "" || infoForm.idTipoDiscapacidad == "" || infoForm.idCondicionDiscapacidad == "" || infoForm.idTipoZona == "" || infoForm.idGrupoPoblacional == "" || infoForm.idDepartamento == "" || infoForm.idCiudadIII == ""){
                    Coomuce.Util.ShowMessage({ type: "ATENCION", title: titleView, msg: "Débe completar correctamente la sección 3. DATOS COMPLEMENTARIOS para continuar" });
                    return false;
                }

                var afiliados = [];

                afiliados.push({
                    idFuanAfiliado: 0, 
                    idFuan: 0, 
                    tipoFuanAfiliado: "Cotizante", 
                    primerApellidoFuanAfiliado: infoForm.primerApellidoFuanAfiliado, 
                    segundoApellidoFuanAfiliado: infoForm.segundoApellidoFuanAfiliado, 
                    primerNombreFuanAfiliado: infoForm.primerNombreFuanAfiliado, 
                    segundoNombreFuanAfiliado: infoForm.segundoNombreFuanAfiliado, 
                    idTipoIdentificacion: infoForm.idTipoIdentificacionII, 
                    identificacionFuanAfiliado: infoForm.identificacionFuanAfiliado, 
                    idTipoSexo: infoForm.idTipoSexoII, 
                    fechaNacimientoFuanAfiliado: infoForm.fechaNacimientoFuanAfiliado, 
                    idTipoEtnia: infoForm.idTipoEtnia, 
                    idTipoDiscapacidad: (infoForm.idTipoDiscapacidad != null) ? infoForm.idTipoDiscapacidad : null, 
                    idCondicionDiscapacidad: (infoForm.idCondicionDiscapacidad != null) ? infoForm.idCondicionDiscapacidad : null,
                    puntajeSisbenFuanAfiliado: (infoForm.puntajeSisbenFuanAfiliado)?infoForm.puntajeSisbenFuanAfiliado:0,
                    numCarnetFuanAfiliado: infoForm.numCarnetFuanAfiliado, 
                    idGrupoPoblacional: (infoForm.idGrupoPoblacional != null) ? infoForm.idGrupoPoblacional : null, 
                    arlFuanAfiliado: infoForm.arlFuanAfiliado, 
                    pensionFuanAfiliado: infoForm.pensionFuanAfiliado, 
                    ibcFuanAfiliado: (infoForm.ibcFuanAfiliado != null) ? infoForm.ibcFuanAfiliado : "", 
                    direccionFuanAfiliado: infoForm.direccionFuanAfiliado, 
                    telefonoFuanAfiliado: infoForm.telefonoFuanAfiliado, 
                    celularFuanAfiliado: infoForm.celularFuanAfiliado, 
                    emailFuanAfiliado: infoForm.emailFuanAfiliado, 
                    idCiudad: (infoForm.idCiudadIII != null) ? infoForm.idCiudadIII : null, 
                    idTipoZona: infoForm.idTipoZona, 
                    barrioFuanAfiliado: infoForm.barrioFuanAfiliado, 
                    primerApellidoConyugueFuanAfiliado: infoForm.primerApellidoConyugueFuanAfiliado, 
                    segundoApellidoConyugueFuanAfiliado: infoForm.segundoApellidoConyugueFuanAfiliado,
                    primerNombreConyugueFuanAfiliado: infoForm.primerNombreConyugueFuanAfiliado,
                    segundoNombreConyugueFuanAfiliado: infoForm.segundoNombreConyugueFuanAfiliado,
                    idTipoIdentificacionConyugue: (infoForm.idTipoIdentificacionConyugue != "") ? infoForm.idTipoIdentificacionConyugue : null,
                    identificacionConyugueFuanAfiliado: infoForm.identificacionConyugueFuanAfiliado,
                    idTipoSexoConyugue: (infoForm.idTipoSexoConyugueFuanAfiliado != "") ? infoForm.idTipoSexoConyugueFuanAfiliado : null,
                    fechaNacimientoConyugueFuanAfiliado: (infoForm.fechaNacimientoConyugueFuanAfiliado != "") ? infoForm.fechaNacimientoConyugueFuanAfiliado : null,
                    upcFuanAfiliado: 0,
                    cabezafamilia: 1,
                    grupofamiliar: (infoForm.identificacionFuanAfiliado != "") ? parseInt(infoForm.identificacionFuanAfiliado) : null,
                    identificacionAnexo: infoForm["documentoNovedad"],
                    firmaFuanAfiliado: (infoForm["firmaNovedad"])?infoForm["firmaNovedad"]:"",
                    idTipoParentesco: null
                });

                /*var entidadTerritorial = {
                    idFuan: 0, 
                    idCiudad: infoForm.idCiudadX,
                    numFichaSisbenFuanEntidadTerritorial: infoForm.numFichaSisbenFuanEntidadTerritorial, 
                    puntajeSisbenFuanEntidadTerritorial: infoForm.puntajeSisbenFuanEntidadTerritorial, 
                    nivelSisbenFuanEntidadTerritorial: infoForm.nivelSisbenFuanEntidadTerritorial, 
                    fechaRadicacionFuanEntidadTerritorial: infoForm.fechaRadicacionFuanEntidadTerritorial, 
                    fechaValidacionFuanEntidadTerritorial: infoForm.fechaValidacionFuanEntidadTerritorial, 
                    idUsuario: Coomuce.Util.DatosUsuario.idUsuario, 
                    observacionFuanEntidadTerritorial: infoForm.observacionFuanEntidadTerritorial
                };*/

                var empleador = {
                    idFuanEmpleadorAfiliado: 0, 
                    idFuanAfiliado: 0, 
                    nombreFuanEmpleadorAfiliado: infoForm.nombreFuanEmpleadorAfiliado,
                    idTipoIdentificacion: (infoForm.idTipoIdentificacion != "")?infoForm.idTipoIdentificacion:4, 
                    identificacionFuanEmpleadorAfiliado: infoForm.identificacionFuanEmpleadorAfiliado, 
                    tipoPagadorFuanEmpleadorAfiliado: infoForm.tipoPagadorFuanEmpleadorAfiliado, 
                    direccionFuanEmpleadorAfiliado: infoForm.direccionFuanEmpleadorAfiliado,
                    telefonoFuanEmpleadorAfiliado: infoForm.telefonoFuanEmpleadorAfiliado, 
                    emailFuanEmpleadorAfiliado: infoForm.emailFuanEmpleadorAfiliado, 
                    idCiudad: (infoForm.idCiudadV != "")?infoForm.idCiudadV:1
                };

                var gridBeneficiarios = Ext.getCmp("Grid-Beneficiarios");
                var gridIps = Ext.getCmp("Grid-IpsPrimaria");
                var gridDeclaracion = Ext.getCmp("Grid-DeclaracionAutorizacion");

                Ext.each(gridBeneficiarios.getStore().data.items, function (ob, index, all) {
                    var dato = ob.data;
                    dato.cabezafamilia = 0;
                    dato.grupofamiliar =  infoForm.identificacionFuanAfiliado;

                    if(dato.primerApellidoFuanAfiliado != "" || dato.primerNombreFuanAfiliado != "" || dato.idTipoIdentificacionII != "" || dato.identificacionFuanAfiliado != "" || dato.idTipoSexoII != "" || dato.fechaNacimientoFuanAfiliado != ""){
                        if(dato.idTipoEtnia != "" || dato.idTipoDiscapacidad != "" || dato.idCondicionDiscapacidad != "" || dato.idTipoZona != "" || dato.idGrupoPoblacional != "" || dato.idDepartamento != "" || dato.idCiudadIII == ""){
                            afiliados.push(dato);
                        }else{
                            Coomuce.Util.ShowMessage({ type: "ATENCION", title: titleView, msg: "Débe completar correctamente la sección de beneficiarios para continuar" });
                            return false;
                        }
                    }else{
                        Coomuce.Util.ShowMessage({ type: "ATENCION", title: titleView, msg: "Débe completar correctamente la sección de beneficiarios para continuar" });
                        return false;
                    }
                });

                var ips = [];
                Ext.each(gridIps.getStore().data.items, function (ob, index, all) {
                    var dato = ob.data;
                    ips.push(dato);
                });

                var declaracion = [];
                Ext.each(gridDeclaracion.getStore().data.items, function (ob, index, all) {
                    var dato = ob.data;
                    declaracion.push(dato);
                });

                var anexos = {
                    idFuan: 0,
                    totalAnexo56FuanAnexos: (infoForm.TotalQuantity != "")?parseInt(infoForm.TotalQuantity):0,
                    totalAnexo56CNFuanAnexos: (infoForm.CNQuantity != "")? infoForm.CNQuantity : 0,
                    totalAnexo56RCFuanAnexos: (infoForm.RCQuantity != "")? infoForm.RCQuantity : 0,
                    totalAnexo56TIFuanAnexos: (infoForm.TIQuantity != "")? infoForm.TIQuantity : 0,
                    totalAnexo56CCFuanAnexos: (infoForm.CCQuantity != "")? infoForm.CCQuantity : 0,
                    totalAnexo56PAFuanAnexos: (infoForm.PAQuantity != "")? infoForm.PAQuantity : 0,
                    totalAnexo56CEFuanAnexos: (infoForm.CEQuantity != "")? infoForm.CEQuantity : 0,
                    totalAnexo56CDFuanAnexos: (infoForm.CDQuantity != "")? infoForm.CDQuantity : 0,
                    totalAnexo56CSFuanAnexos: (infoForm.CSQuantity != "")? infoForm.CSQuantity : 0,
                    anexo57: infoForm["incapacidadPermanenteNovedad"],
                    anexo58: infoForm["registroCivilNovedad"],
                    anexo59: infoForm["escrituraPublicaNovedad"],
                    anexo60: infoForm["certificadoAdopcionNovedad"],
                    anexo61: infoForm["ordenJudicialNovedad"],
                    anexo62: infoForm["perdidaPPNovedad"],
                    anexo63: infoForm["authTrasladoNovedad"],
                    anexo64: infoForm["certificadoVinculacionNovedad"],
                    anexo65: infoForm["actoAdministrativoNovedad"]
                };



                var conf = {
                    url: Coomuce.Url.Funciones + "AfiliacionGuardar",
                    data: {
                        infoFuan: infoFuan,
                        afiliado: afiliados,
                        ips: ips,
                        declaracion: declaracion,
                        anexos: anexos,
                        empleador: empleador
                    },
                    targetMask: form,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        me.onBotonCancelarClick();
                    }
                };

                console.log(conf.data);
                Coomuce.Util.EnviarPost(conf);
            }
        });
},

onBotonCancelarClick: function () {
    Ext.getCmp("Form-Afiliacion").getForm().reset();
    var tabPanel = Ext.getCmp("CoomuceAfiliacion");
    tabPanel.destroy();
},

onUploadDataComplete: function (source, file) {
    var titleView = this.getTitleView();

    var record = source.getWidgetRecord();
    var tipoDocVar = record.get("idTipoIdentificacion");
    record.set("identificacionAnexo", file.data);

    if(tipoDocVar != null){
        if(tipoDocVar == 1){
            var cnq = this.lookupReference("CNQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 2){
            var cnq = this.lookupReference("RCQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 3){
            var cnq = this.lookupReference("TIQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 4){
            var cnq = this.lookupReference("CCQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 5){
            var cnq = this.lookupReference("CEQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 6){
            var cnq = this.lookupReference("PAQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 7){
            var cnq = this.lookupReference("CDQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
    }
    Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Archivo de firma importado correctamente." });
},

onUploadFirmaDataComplete: function (source, file) {
    var titleView = this.getTitleView();
    var botonEliminar = this.lookupReference("botonEliminarFirma");
    var firmaNovedad = this.lookupReference("firmaNovedad");

    botonEliminar.setText(file.data);
    firmaNovedad.setValue(file.data);

    Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Archivo de firma importado correctamente." });
},

onUploadDocumentoDataComplete: function (source, file) {
    var tipoDocVar = this.lookupReference("idTipoIdentificacionII").getValue();

    var titleView = this.getTitleView();
    var botonEliminar = this.lookupReference("botonEliminarDocumento");
    var documentoNovedad = this.lookupReference("documentoNovedad");

    if(tipoDocVar != null){
        if(tipoDocVar == 1){
            var cnq = this.lookupReference("CNQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 2){
            var cnq = this.lookupReference("RCQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 3){
            var cnq = this.lookupReference("TIQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 4){
            var cnq = this.lookupReference("CCQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 5){
            var cnq = this.lookupReference("CEQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 6){
            var cnq = this.lookupReference("PAQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
        if(tipoDocVar == 7){
            var cnq = this.lookupReference("CDQuantity");
            var total = this.lookupReference("TotalQuantity");
            cnq.setValue(cnq.getValue() + 1);
            total.setValue(total.getValue() + 1);
        }
    }
        //Aumento el contador del documento de identidad
        //var tipoDoc = this.lookupReference("idTipoIdentificacion");
        //console.log(tipoDoc.getValue());
        


        botonEliminar.setText(file.data);
        documentoNovedad.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Documento importado correctamente." });
    },

    onUploadIncapacidadPermanenteDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarIncapacidadPermanente");
        var incapacidadPermanenteNovedad = this.lookupReference("incapacidadPermanenteNovedad");

        botonEliminar.setText(file.data);
        incapacidadPermanenteNovedad.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Documento importado correctamente." });
    },

    onUploadEscrituraPublicaDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarEscrituraPublica");
        var escrituraPublicaNovedad = this.lookupReference("escrituraPublicaNovedad");

        botonEliminar.setText(file.data);
        escrituraPublicaNovedad.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Documento importado correctamente." });
    },

    onUploadOrdenJudicialDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarOrdenJudicial");
        var ordenJudicialNovedad = this.lookupReference("ordenJudicialNovedad");

        botonEliminar.setText(file.data);
        ordenJudicialNovedad.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Documento importado correctamente." });
    },

    onUploadCertificadoAdopcionDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarCertificadoAdopcion");
        var certificadoAdopcionNovedad = this.lookupReference("certificadoAdopcionNovedad");

        botonEliminar.setText(file.data);
        certificadoAdopcionNovedad.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Documento importado correctamente." });
    },

    onUploadPerdidaPPDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarPerdidaPP");
        var perdidaPPNovedad = this.lookupReference("perdidaPPNovedad");

        botonEliminar.setText(file.data);
        perdidaPPNovedad.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Documento importado correctamente." });
    },

    onUploadAuthTrasladoDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarAuthTraslado");
        var authTrasladoNovedad = this.lookupReference("authTrasladoNovedad");

        botonEliminar.setText(file.data);
        authTrasladoNovedad.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Documento importado correctamente." });
    },

    onUploadCertificadoVinculacionDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarCertificadoVinculacion");
        var certificadoVinculacionNovedad = this.lookupReference("certificadoVinculacionNovedad");

        botonEliminar.setText(file.data);
        certificadoVinculacionNovedad.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Documento importado correctamente." });
    },

    onUploadActoAdministrativoDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarActoAdministrativo");
        var actoAdministrativoNovedad = this.lookupReference("actoAdministrativoNovedad");

        botonEliminar.setText(file.data);
        actoAdministrativoNovedad.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Documento importado correctamente." });
    },

    onUploadRegistroCivilDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarRegistroCivil");
        var registroCivilNovedad = this.lookupReference("registroCivilNovedad");

        botonEliminar.setText(file.data);
        registroCivilNovedad.setValue(file.data);

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Documento importado correctamente." });
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

        var firmaNovedad = this.lookupReference("firmaNovedad");
        firmaNovedad.setValue("");
    },

    onBotonEliminarDocumentoClick: function (btn) {
        btn.setText("");

        var documentoNovedad = this.lookupReference("documentoNovedad");
        documentoNovedad.setValue("");
    },

    onBotonEliminarIncapacidadPermanenteClick: function (btn) {
        btn.setText("");

        var incapacidadPermanenteNovedad = this.lookupReference("incapacidadPermanenteNovedad");
        incapacidadPermanenteNovedad.setValue("");
    },

    onBotonEliminarEscrituraPublicaClick: function (btn) {
        btn.setText("");

        var escrituraPublicaNovedad = this.lookupReference("escrituraPublicaNovedad");
        escrituraPublicaNovedad.setValue("");
    },

    onBotonEliminarCertificadoAdopcionClick: function (btn) {
        btn.setText("");

        var certificadoAdopcionNovedad = this.lookupReference("certificadoAdopcionNovedad");
        certificadoAdopcionNovedad.setValue("");
    },

    onBotonEliminarOrdenJudicialClick: function (btn) {
        btn.setText("");

        var ordenJudicialNovedad = this.lookupReference("ordenJudicialNovedad");
        ordenJudicialNovedad.setValue("");
    },

    onBotonEliminarPerdidaPPClick: function (btn) {
        btn.setText("");

        var perdidaPPNovedad = this.lookupReference("perdidaPPNovedad");
        perdidaPPNovedad.setValue("");
    },

    onBotonEliminarAuthTrasladoClick: function (btn) {
        btn.setText("");

        var authTrasladoNovedad = this.lookupReference("authTrasladoNovedad");
        authTrasladoNovedad.setValue("");
    },

    onBotonEliminarCertificadoVinculacionClick: function (btn) {
        btn.setText("");

        var autorizacionTrasladoNovedad = this.lookupReference("certificadoVinculacionNovedad");
        certificadoVinculacionNovedad.setValue("");
    },

    onBotonEliminarActoAdministrativoClick: function (btn) {
        btn.setText("");

        var actoAdministrativoNovedad = this.lookupReference("actoAdministrativoNovedad");
        actoAdministrativoNovedad.setValue("");
    },

    onBotonEliminarRegistroCivilClick: function (btn) {
        btn.setText("");

        var registroCivilNovedad = this.lookupReference("registroCivilNovedad");
        registroCivilNovedad.setValue("");
    }

});