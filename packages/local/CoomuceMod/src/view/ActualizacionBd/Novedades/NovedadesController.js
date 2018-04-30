Ext.define("CoomuceMod.view.ActualizacionBd.NovedadesController", {
    extend: "Ext.app.ViewController",
    alias: "controller.actualizacionbd-novedades",

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var form = Ext.getCmp("Form-Novedades");
                var infoForm = form.getForm().getValues();
                var idFuanAfiliado = parseInt(infoForm.idFuanAfiliado);

                var tipoNovedad = [];
                var gridTipoNovedad = Ext.getCmp("Grid-TipoNovedad");

                Ext.each(gridTipoNovedad.getStore().data.items, function (ob, index, all) {
                    var dato = ob.data;
                    tipoNovedad.push(dato);
                });

                var idTipoIdentificacion = me.lookupReference("idTipoIdentificacion");
                var idTipoSexo = me.lookupReference("idTipoSexo");
                var idMotivoTraslado = me.lookupReference("idMotivoTraslado");
                var idDepartamento = me.lookupReference("idDepartamento");
                var idCiudad = me.lookupReference("idCiudad");

                var novedad = {
                    primerApellidoFuanAfiliado: infoForm.primerApellidoFuanAfiliado,
                    segundoApellidoFuanAfiliado: infoForm.segundoApellidoFuanAfiliado,
                    primerNombreFuanAfiliado: infoForm.primerNombreFuanAfiliado,
                    segundoNombreFuanAfiliado: infoForm.segundoNombreFuanAfiliado,
                    idTipoIdentificacion: infoForm.idTipoIdentificacion,
                    compTipoIdentificacion: idTipoIdentificacion.getRawValue(),
                    identificacionFuanAfiliado: infoForm.identificacionFuanAfiliado,
                    idTipoSexo: infoForm.idTipoSexo,
                    compTipoSexo: idTipoSexo.getRawValue(),
                    fechaNacimientoFuanAfiliado: infoForm.fechaNacimientoFuanAfiliado,
                    epsAnteriorFuanAfiliado: infoForm.epsAnteriorFuanAfiliado,
                    idMotivoTraslado: infoForm.idMotivoTraslado,
                    compMotivoTraslado: idMotivoTraslado.getRawValue(),
                    pensionFuanAfiliado: infoForm.pensionFuanAfiliado,
                    idDepartamento: infoForm.idDepartamento,
                    compDepartamento: idDepartamento.getRawValue(),
                    idCiudad: infoForm.idCiudad,
                    compCiudad: idCiudad.getRawValue(),
                    firmaNovedad: infoForm.firmaNovedad
                };

                var conf = {
                    url: Coomuce.Url.Funciones + "NovedadesGuardar",
                    data: {
                        idFuanAfiliado: idFuanAfiliado,
                        idUsuario: Coomuce.Util.DatosUsuario.idUsuario,
                        tipoNovedad: tipoNovedad,
                        novedad: novedad
                    },
                    targetMask: form,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        me.onBotonCancelarClick();
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonCancelarClick: function () {
        Ext.getCmp("Form-Novedades").getForm().reset();
        var tabPanel = Ext.getCmp("CoomuceImportarBaseAfiliados");
        tabPanel.destroy();
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
    },

    onSelectCombo: function (combo, record, eOpts) {
        var me = this;

        if (combo.ubicacion !== undefined) {
            var idCiudad = me.lookupReference(combo.ciudadReference);
            idCiudad.getStore().load({ params: { idDepartamento: record.get("idDepartamento") } });
        }
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