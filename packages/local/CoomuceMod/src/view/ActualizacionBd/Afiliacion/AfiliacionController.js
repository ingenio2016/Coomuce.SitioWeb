Ext.define("CoomuceMod.view.ActualizacionBd.AfiliacionController", {
    extend: "Ext.app.ViewController",
    alias: "controller.actualizacionbd-afiliacion",

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
        console.log(sm);
        console.log(selected);

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

    onBlurNumber: function (number, event, eOpts) {
        number.setRawValue(Ext.util.Format.usMoney(number.getValue()));
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

                o.setReadOnly(record.get("idTipoRegimen") == 1 ? false : true);
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
                idTipoSexo: 0, 
                compTipoSexo: "",
                fechaNacimientoFuanAfiliado: "", 
                idTipoEtnia: 0, 
                compTipoEtnia: "",
                idTipoDiscapacidad: 0, 
                compTipoDiscapacidad: "",
                idCondicionDiscapacidad: 0, 
                compCondicionDiscapacidad: "",
                numCarnetFuanAfiliado: "", 
                idGrupoPoblacional: 0, 
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
                primerApellidoConyugueFuanAfiliado: null, 
                segundoApellidoConyugueFuanAfiliado: null, 
                primerNombreConyugueFuanAfiliado: null, 
                segundoNombreConyugueFuanAfiliado: null, 
                idTipoIdentificacionConyugue: null, 
                identificacionConyugueFuanAfiliado: null, 
                idTipoSexoConyugue: null, 
                fechaNacimientoConyugueFuanAfiliado: null,
                upcFuanAfiliado: 0
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

                var infoFuan = {
                    idFuan: 0, // inicializo este campo que no se captura en pantalla
                    idTipoTramite: parseInt(infoForm.idTipoTramite),
                    idTipoAfiliacion: infoForm.idTipoAfiliacion,
                    idTipoRegimen: infoForm.idTipoRegimen,
                    idTipoAfiliado: infoForm.idTipoAfiliado,
                    idTipoCotizante: infoForm.idTipoCotizante,
                    codigoCotizanteFuan: infoForm.codigoCotizanteFuan,
                    idUsuario: Coomuce.Util.DatosUsuario.idUsuario
                };

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
                    puntajeSisbenFuanAfiliado: infoForm.puntajeSisbenFuanAfiliado,
                    numCarnetFuanAfiliado: infoForm.numCarnetFuanAfiliado, 
                    idGrupoPoblacional: (infoForm.idGrupoPoblacional != null) ? infoForm.idGrupoPoblacional : null, 
                    arlFuanAfiliado: infoForm.arlFuanAfiliado, 
                    pensionFuanAfiliado: infoForm.pensionFuanAfiliado, 
                    ibcFuanAfiliado: (infoForm.ibcFuanAfiliado != null) ? infoForm.ibcFuanAfiliado : null, 
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
                    idTipoIdentificacionConyugue: (infoForm.idTipoIdentificacionConyugue != null) ? infoForm.idTipoIdentificacionConyugue : null,
                    identificacionConyugueFuanAfiliado: infoForm.identificacionConyugueFuanAfiliado,
                    idTipoSexoConyugue: (infoForm.idTipoSexoConyugue != null) ? infoForm.idTipoSexoConyugue : null,
                    fechaNacimientoConyugueFuanAfiliado: infoForm.fechaNacimientoConyugueFuanAfiliado,
                    upcFuanAfiliado: 0,
                    cabezafamilia: 1,
                    grupofamiliar: infoForm.identificacionFuanAfiliado
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
                    idTipoIdentificacion: infoForm.idTipoIdentificacion, 
                    identificacionFuanEmpleadorAfiliado: infoForm.identificacionFuanEmpleadorAfiliado, 
                    tipoPagadorFuanEmpleadorAfiliado: infoForm.tipoPagadorFuanEmpleadorAfiliado, 
                    direccionFuanEmpleadorAfiliado: infoForm.direccionFuanEmpleadorAfiliado,
                    telefonoFuanEmpleadorAfiliado: infoForm.telefonoFuanEmpleadorAfiliado, 
                    emailFuanEmpleadorAfiliado: infoForm.emailFuanEmpleadorAfiliado, 
                    idCiudad: infoForm.idCiudadV
                };

                var gridBeneficiarios = Ext.getCmp("Grid-Beneficiarios");
                var gridIps = Ext.getCmp("Grid-IpsPrimaria");
                var gridDeclaracion = Ext.getCmp("Grid-DeclaracionAutorizacion");

                Ext.each(gridBeneficiarios.getStore().data.items, function (ob, index, all) {
                    var dato = ob.data;
                    dato.cabezafamilia = 0;
                    dato.grupofamiliar =  infoForm.identificacionFuanAfiliado;
                    afiliados.push(dato);
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

                var conf = {
                    url: Coomuce.Url.Funciones + "AfiliacionGuardar",
                    data: {
                        infoFuan: infoFuan,
                        afiliado: afiliados,
                        ips: ips,
                        declaracion: declaracion,
                        //entidadTerritorial: entidadTerritorial,
                        empleador: empleador
                    },
                    targetMask: form,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        me.onBotonCancelarClick();
                    }
                };

                console.log(conf.data);
                //Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonCancelarClick: function () {
        Ext.getCmp("Form-Afiliacion").getForm().reset();
        var tabPanel = Ext.getCmp("CoomuceAfiliacion");
        tabPanel.destroy();
    },

    onUploadFirmaDataComplete: function (source, file) {
        var titleView = this.getTitleView();
        var botonEliminar = this.lookupReference("botonEliminarFirma");
        var firmaNovedad = this.lookupReference("firmaNovedad");

        botonEliminar.setText(file.data);
        firmaNovedad.setValue(file.data);

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

        var firmaNovedad = this.lookupReference("firmaNovedad");
        firmaNovedad.setValue("");
    }

});