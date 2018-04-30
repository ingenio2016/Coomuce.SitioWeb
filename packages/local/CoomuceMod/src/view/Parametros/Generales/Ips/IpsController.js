Ext.define('CoomuceMod.view.Parametros.Generales.IpsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.parametros-generales-ips',

    getTitleView: function () {
        return this.getView().getTitle();
    },

    onGridSelectionChange: function (sm, selections) {
        this.getReferences().eliminarButton.setDisabled(selections.length === 0);
    },

    onBotonAdicionarClick: function () {
        // Create a record instance
        var storeGrid = Ext.getCmp('Grid-Ips-Principal').getStore();
        var nextId = storeGrid.max("idIps");

        var row = [
            {
                idIps: (nextId == undefined ? 1 : nextId + 1), 
                codigoIps: "", 
                razonIps: "", 
                idTipoIdentificacion: 0, 
                compTipoIdentificacion: "",
                identificacionIps: "", 
                direccionIps: "", 
                telefonoIps: "", 
                idDepartamento: 0,
                compDepartamento: "",
                idCiudad: 0, 
                compCiudad: "",
                representanteIps: "", 
                nivelIps: "", 
                contactoIps: "", 
                emailIps: ""
            }
        ];

        storeGrid.insert(0, row);
    },

    onBotonCancelarClick: function () {
        Ext.Msg.confirm(this.getTitleView(), "Desea cancelar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var storeGrid = Ext.getCmp('Grid-Ips-Principal').getStore();
                storeGrid.rejectChanges();
                var tabPanel = Ext.getCmp("CoomuceIps");
                tabPanel.destroy();
            }
        });
    },

    onBotonGuardarClick: function () {
        var titleView = this.getTitleView();

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var grid = Ext.getCmp('Grid-Ips-Principal');
                var storeGrid = grid.getStore();

                var nuevos = [];
                var viejos = [];
                var eliminados = [];
                var itemsValidar = [];

                Ext.each(storeGrid.data.items, function (ob, index, all) {
                    if (ob.dirty) {
                        if (ob.phantom) {
                            nuevos.push(ob.data);
                        }
                        else {
                            viejos.push(ob.data);
                        }

                        itemsValidar.push(ob);
                    }
                });

                Ext.each(storeGrid.getRemovedRecords(), function (ob, index) {
                    if (!ob.phantom) {
                        eliminados.push(ob.getData());
                    }
                });

                // solo validar cuando se edita o adiciona registros
                if (itemsValidar.length > 0) {
                    var validator = Coomuce.Util.dataValidate(itemsValidar);

                    if (!validator.success) {
                        Coomuce.Util.ShowMessage({ type: "ERROR", title: titleView, msg: validator.msg });

                        return false;
                    }
                }

                var conf = {
                    url: Coomuce.Url.Parametros + "IpsCUD",
                    data: {
                        nuevos: nuevos,
                        viejos: viejos,
                        eliminados: eliminados
                    },
                    targetMask: grid,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        storeGrid.load();
                    }
                };

                Coomuce.Util.EnviarPost(conf);
            }
        });
    },

    onBotonEliminarClick: function () {
        var storeGrid = Ext.getCmp('Grid-Ips-Principal');
        storeGrid.getStore().remove(storeGrid.selModel.getSelection());
    },

    onBotonImportarClick: function (btn) {
        var titleView = this.getTitleView();

        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "Este funcionalidad se encuentra en desarrollo." });

        return false;

        var form = Ext.create("Ext.form.Panel", {
            bodyPadding: 10,
            buttons: [
                {
                    text: 'Importar',
                    handler: function () {
                        var data = [];
                        var form = this.up('form');//.getForm();
                        //if (form.isValid()) {
                            var file = form.down("filefield").getEl().down("input[type=file]").dom.files[0];
                            var reader = new FileReader();
                            reader.onload = (function (theFile) {
                                return function (e) {
                                    data.push(e.target.result);
                                    //console.log(e.target.result);
                                };
                            })(file);
                            reader.readAsBinaryString(file);
                            console.log(data);

                            //form.submit({
                            //    url: Coomuce.Url.Parametros + "IpsImportar",
                            //    waitMsg: 'Importando archivo...',
                            //    success: function (fp, o) {
                            //        Coomuce.Util.ShowMessage({ type: "INFO", title: titleView, msg: "El archivo ha sido importado correctamente." });
                            //    }
                            //});
                        //}
                    }
                }
            ],
            items: [
                {
                    xtype: 'filefield',
                    name: 'archivo',
                    fieldLabel: 'Archivo',
                    labelWidth: 50,
                    msgTarget: 'side',
                    allowBlank: false,
                    anchor: '100%',
                    buttonText: 'Seleccione archivo plano...'
                }
            ]
        });

        var win = Ext.create("Ext.window.Window", {
            //height: 200,
            items: [form],
            modal: true,
            title: btn.text,
            width: 400
        });

        win.show();
    },

    onSelectCombo: function (combo, record, eOpts) {
        var rec = Ext.getCmp("Grid-Ips-Principal").selModel.getSelection();

        rec[0].set(combo.idCampo, record.get(combo.idCampo));
    },

    onFocusCombo: function (combo, event, eOpts) {
        var record = Ext.getCmp("Grid-Ips-Principal").selModel.getSelection()[0];

        combo.getStore().load({ params: { idDepartamento: record.get("idDepartamento") } });
    }

});
