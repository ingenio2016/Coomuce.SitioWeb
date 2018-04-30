Ext.define("CoomuceMod.view.InformacionOrientacion.EncuestaIpsController", {
    extend: "Ext.app.ViewController",
    alias: "controller.informacionorientacion-encuestaips",

    getTitleView: function () {
        return this.getView().getTitle();
    },

    fnGenerarPlantilla: function (data) {
        var contenedorEncuesta = Ext.getCmp("ContenidoEncuestaIps");

        Ext.Array.each(data, function (itemCat) {
            var fs = Ext.create("Ext.form.FieldSet", {
                anchor: "100%",
                defaults: { anchor: "100%" },
                layout: "anchor",
                style: "padding-top: 5px;padding-bottom: 5px;",
                title: itemCat.nombreEncuestaCategoria
            });

            Ext.Array.each(itemCat.preguntas, function (itemPre) {
                var obj, label;

                label = Ext.create("Ext.form.Label", {
                    text: itemPre.textoEncuestaPregunta
                });

                fs.add(label);

                switch (itemPre.tipoPreEncuestaPregunta) {
                    case 1: // "ÚNICA RESPUESTA"
                        obj = Ext.create("Ext.form.RadioGroup", {
                            allowBlank: false,
                            columns: 1,
                            name: "id_pre_" + itemPre.idEncuestaPregunta,
                            vertical: false
                        })

                        for (var i = 0; i < itemPre.literales.length; i++) {
                            obj.add({
                                boxLabel: itemPre.literales[i].textoEncuestaLiteral,
                                inputValue: itemPre.literales[i].valorEncuestaLiteral,
                                checked: itemPre.literales[i].checkedEncuestaLiteral
                            });
                        }

                        //obj = Ext.create("Ext.form.RadioGroup", {
                        //    name: "id_pre_" + itemPre.idEncuestaPregunta,
                        //    items: [
                        //        { boxLabel: "SI", inputValue: itemPre.valorEncuestaPregunta },
                        //        { boxLabel: "NO", inputValue: 0, checked: true }
                        //    ],
                        //    vertical: true
                        //});

                        break;
                    case 2: // "MÚLTIPLES RESPUESTAS"
                        obj = Ext.create("Ext.form.CheckboxGroup", {
                            allowBlank: false,
                            columns: 1,
                            vertical: false
                        });

                        for (var i = 0; i < itemPre.literales.length; i++) {
                            obj.add({
                                boxLabel: itemPre.literales[i].textoEncuestaLiteral,
                                name: "id_lit_" + itemPre.literales[i].idEncuestaLiteral,
                                inputValue: itemPre.literales[i].valorEncuestaLiteral
                            });
                        }

                        break;
                    case 3: //"SELECCIONE UNA"
                        obj = Ext.create("Ext.form.RadioGroup", {
                            allowBlank: false,
                            columns: 1,
                            vertical: false
                        })

                        for (var i = 0; i < itemPre.literales.length; i++) {
                            obj.add({
                                boxLabel: itemPre.literales[i].textoEncuestaLiteral,
                                name: "id_lit_" + itemPre.literales[i].idEncuestaLiteral,
                                inputValue: itemPre.literales[i].valorEncuestaLiteral
                            });
                        }

                        break;
                }

                fs.add(obj);
            });

            contenedorEncuesta.add(fs);
        });
    },

    onAfterRender: function (view) {
        var me = this;

        var store = me.getViewModel().getStore("getEncuesta");

        store.on("load", function (store, records, successful, operation, eOpts) {
            var res = Ext.decode(operation._response.responseText);

            me.fnGenerarPlantilla(res.data);
        });
        store.load({ params: { idDomVista: me.getView().getId() } });
    },

    onBotonGuardarClick: function () {
        var me = this;
        var titleView = me.getTitleView();

        Ext.Msg.confirm(titleView, "Desea guardar las modificaciones?", function (btn) {
            if (btn === "yes") {
                var form = Ext.getCmp("Form-EncuestaIps");

                if (!form.getForm().isValid()) {
                    Coomuce.Util.ShowMessage({ type: "ERROR", title: titleView, msg: "Hay campos obligatorios que deben ser diligenciados." });
                    return false;
                }
                var datos = form.getForm().getValues();

                var encuestaIps = {};
                var resPre = [];
                var resLit = [];

                for (var key in datos) {
                    if (key === 'length' || !datos.hasOwnProperty(key)) continue;

                    var value = datos[key];
                    switch (key.substring(0, 6)) {
                        case "id_pre":
                            resPre.push({
                                idEncuestaIps: 0, // inicializo este campo que no se captura en pantalla
                                idEncuestaPregunta: parseInt(key.substring(7)),
                                valorEncuestaIpsRespPregunta: value
                            });
                            break;
                        case "id_lit":
                            resLit.push({
                                idEncuestaIps: 0, // inicializo este campo que no se captura en pantalla
                                idEncuestaLiteral: parseInt(key.substring(7)),
                                valorEncuestaIpsRespLiteral: value
                            });
                            break;
                        default:
                            encuestaIps[key] = value;
                            break;
                    }
                }

                encuestaIps.idUsuario = Coomuce.Util.DatosUsuario.idUsuario;

                var conf = {
                    url: Coomuce.Url.Funciones + "EncuestaIpsGuardar",
                    data: {
                        encuestaIps: encuestaIps,
                        respPregunta: resPre,
                        respLiteral: resLit
                    },
                    targetMask: form,
                    msgMask: "Guardando datos...",
                    fnSuccess: function (response) {
                        form.getForm().reset();
                        var tabPanel = Ext.getCmp("CoomuceEncuestaIPS");
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
                var form = Ext.getCmp("Form-EncuestaIps");

                form.getForm().reset();
                var tabPanel = Ext.getCmp("CoomuceEncuestaIPS");
                tabPanel.destroy();
            }
        });
    }

});