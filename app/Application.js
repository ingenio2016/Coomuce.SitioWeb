// definición de utilidades para funciones y variables globales
Ext.define("Coomuce.Util", {
    DatosUsuario: {},
    singleton: true,
    BaseUrl: baseServiceUrl,
    //LanzadorReporteUrl: "http://localhost:58987/Lanzador.aspx?",
    LanzadorReporteUrl: reportServiceUrl + "Lanzador.aspx?",

    ShowMessage: function (cfg) {
        var icon;

        switch (cfg.type) {
            case "ERROR": icon = Ext.MessageBox.ERROR; break;
            case "INFO": icon = Ext.MessageBox.INFO; break;
            case "WARNING": icon = Ext.MessageBox.WARNING; break;
        }

        Ext.MessageBox.show({
            title: cfg.title || "COOMUCE",
            msg: cfg.msg,
            buttons: Ext.MessageBox.OK,
            icon: icon,
            fn: cfg.fn || null
        });
    },

    EnviarPost: function (conf) {
        var swMask = false;
        if (conf.targetMask !== undefined) {
            swMask = true;
            var mask = new Ext.LoadMask({
                msg: conf.msgMask,
                target: conf.targetMask
            });
            mask.show();
        }

        // si no esta viajando la confirmación del mensaje, entonces por defecto lo presento
        if (conf.showMsgConfirm === undefined) {
            conf.showMsgConfirm = true;
        }

        Ext.Ajax.request({
            url: conf.url,
            jsonData: conf.data,
            params: conf.params,
            timeout: conf.timeout || 20000,
            useDefaultXhrHeader: false,
            method: conf.method || "POST",
            headers: { "Content-Type": "application/json" },
            success: conf.success || function (response) {
                var res = Ext.decode(response.responseText);


                if (swMask) {
                    mask.hide();
                }

                if (!res.success) { //Si el resultado obtenido no fué exitoso. (Problema de BD.)
                    Coomuce.Util.ShowMessage({ type: "ERROR", title: "COOMUCE", msg: res.message });

                    // si hay un fallo o la respuesta del success = false, entonces ejecuto la función
                    if (conf.fnFailure !== undefined) {
                        conf.fnFailure();
                    }
                }
                else {//Si el Resultado fué exitoso
                    if (conf.showMsgConfirm) {
                        Coomuce.Util.ShowMessage({ type: "INFO", title: "COOMUCE", msg: res.message });
                    }

                    conf.fnSuccess(res);
                }
            },
            failure: function (response) {
                var msg = 'Error: ' + (response.statusText || "Posible Falla en la Comunicación con El Servidor.") + ". <br />Por favor intente nuevamente. Si el problema persiste comuniquese con soporte.";

                Coomuce.Util.ShowMessage({ type: "ERROR", title: "COOMUCE", msg: msg });

                if (swMask) {
                    mask.hide();
                }

                if (conf.fnFailure !== undefined) {
                    conf.fnFailure();
                }
            }
        });
    },

    dataValidate: function (items) {
        var msg = "";

        Ext.each(items, function (item, index, allItems) {
            if (!item.isValid()) {
                msg += "El record con indice " + index + " presenta datos obligatorios que no han sido diligenciados.<br />";
            }
        });

        return {
            msg: msg,
            success: Ext.isEmpty(msg)
        };
    },

    parseDate: function (v) {
        if (v != null) {
            var input = v;
            input = input.replace(new RegExp('/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)/', 'g'), '(new Date($1))');
            v = eval(input);
        }
        return v;
    },

    lanzarReporte: function (panel, cfg) {
        cfg.condicion = (cfg.condicion != undefined ? '&condicion=' + encodeURIComponent(cfg.condicion) : "");
        cfg.optional = (cfg.optional != undefined ? cfg.optional : "");

        var frame = '<iframe src="' + Coomuce.Util.LanzadorReporteUrl +
        'idReporte=' + cfg.idReporte +
        cfg.optional +
        cfg.condicion + '" style="width:100%;height:100%;border:none;"></iframe>';

        // {modulo} se refiere al modulo de la aplicación que en este caso es calibración
        // {idReporte} se refiere al reporte que se va a presentar
        panel.setHtml(frame);
    },

    barraFiltroReportes: function (dataFiltro, view, paramReport) {
        var onAddClick = function () {
            var row = [
            {
                criterio: "",
                nombreCriterio: "",
                operador: "",
                condicion: "",
                funcionesLogicas: ""
            }
            ];

            storeListaFiltros.insert(0, row);
        };

        var onEliminarClick = function () {
            storeListaFiltros.remove(grid.selModel.getSelection());
        };

        var storeListaFiltros = Ext.create("Ext.data.Store", {
            fields: [
            "tipoDatoCriterio", "criterio", "nombreCriterio", "operador", "condicion", "idFuncionesLogicas", "funcionesLogicas"
            ]
        });

        var grid = Ext.create("Ext.grid.Panel", {
            columns: [
            {
                dataIndex: "nombreCriterio", header: "Criterio", width: 150, editor: {
                    xtype: 'combo',
                    allowBlank: false,
                    displayField: 'nombreCriterio',
                    editable: false,
                    listeners: {
                        select: function (combo, record, eOpts) {
                            var rec = grid.selModel.getSelection();

                            rec[0].set("criterio", record.data.criterio);
                            rec[0].set("tipoDatoCriterio", record.data.tipoDato);
                        }
                    },
                    queryMode: 'local',
                    store: Ext.create("Ext.data.ArrayStore", {
                        fields: ["criterio", "nombreCriterio", "tipoDato"],
                        data: dataFiltro
                    }),
                    valueField: 'nombreCriterio'
                }
            },
            {
                dataIndex: "operador", header: "Operador", width: 60, editor: {
                    xtype: "combo",
                    allowBlank: false,
                    displayField: "operador",
                    editable: false,
                    queryMode: "local",
                    store: Ext.create("Ext.data.ArrayStore", {
                        fields: ["operador"],
                        data: [
                        ["="], ["<>"], ["<"], [">"], [">="], ["<="], ["like"]
                        ]
                    }),
                    valueField: "operador"
                }
            },
            {
                dataIndex: "condicion", header: "Condición", width: 200, editor: {
                    allowBlank: false
                }
            },
            {
                dataIndex: "funcionesLogicas", header: "Func. Lógica", width: 50, editor: {
                    xtype: "combo",
                    displayField: "funcionesLogicas",
                    editable: false,
                    listeners: {
                        select: function (combo, record, eOpts) {
                            var rec = grid.selModel.getSelection();

                            rec[0].set("idFuncionesLogicas", record.data.idFuncionesLogicas);
                        }
                    },
                    queryMode: "local",
                    store: Ext.create("Ext.data.ArrayStore", {
                        fields: ["idFuncionesLogicas", "funcionesLogicas"],
                        data: [
                        ["", ""], ["and", "Y"], ["or", "O"]
                        ]
                    }),
                    valueField: "funcionesLogicas"
                }
            }
            ],
            columnLines: true,

            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            selModel: {
                type: 'checkboxmodel',
                checkOnly: false //Hacer esto para seleccionar elementos de un grid sólo cuando se checken
            },
            sortableColumns: false,
            store: storeListaFiltros
        });

        var windowFiltros = Ext.create("Ext.window.Window", {
            bodyPadding: 10,
            closeAction: "hide",
            closeToolText: "Cerrar",
            height: 300,
            items: [
            { html: "Agregue los filtros deseados para el reporte<br />Tenga en cuenta que el formato para los filtros de fecha es AAAA-MM-DD" },
            { frame: true, height: 200, items: grid, layout: "fit" }
            ],
            modal: true,
            title: "Filtros",
            tools: [
            { type: "plus", tooltip: "Agregar nuevo filtro", handler: onAddClick },
            { type: "minus", tooltip: "Eliminar filtros seleccionados", handler: onEliminarClick }
            ],
            width: 540
        });

        return {
            items: [
            {
                iconCls: "x-fa fa-filter", text: "Filtros", handler: function () {
                    windowFiltros.show();
                }
            }, "->",
            {
                text: "Generar", handler: function () {
                    var condicion = "";

                    Ext.each(storeListaFiltros.getData().items, function (item, index, allItems) {
                        if (item.data.tipoDatoCriterio === "string") {
                            condicion += "(" + item.data.criterio + " " +
                            (item.data.operador === "like" ? item.data.operador + " '%" + item.data.condicion + "%') " : item.data.operador + " '" + item.data.condicion + "') ") +
                            (item.data.idFuncionesLogicas != undefined ? item.data.idFuncionesLogicas : "") + " ";
                        }
                        else if (item.data.tipoDatoCriterio === "int") {
                            condicion += "(" + item.data.criterio + " " +
                            item.data.operador + " " + item.data.condicion + ") " +
                            (item.data.idFuncionesLogicas != undefined ? item.data.idFuncionesLogicas : "") + " ";
                        }
                        else if (item.data.tipoDatoCriterio === "date") {
                            condicion += "(cast(" + item.data.criterio + " as date) " +
                            item.data.operador + " '" + item.data.condicion + "') " +
                            (item.data.idFuncionesLogicas != undefined ? item.data.idFuncionesLogicas : "") + " ";
                        }
                    });

                    Coomuce.Util.lanzarReporte(view.getView(), { idReporte: paramReport.idReporte, condicion: condicion });
                }
            }
            ],
            storeFiltro: storeListaFiltros
        };
    },

    buscarAfiliado: function (btn) {
        var me = btn.getController();

        var store = Ext.create("Ext.data.Store", {
            autoLoad: false,
            fields: [
            { name: "idFuanAfiliado", type: "int" },
            { name: "primerApellidoFuanAfiliado", type: "string" },
            { name: 'segundoApellidoFuanAfiliado', type: 'string' },
            { name: 'primerNombreFuanAfiliado', type: 'string' },
            { name: "segundoNombreFuanAfiliado", type: "string" },
            { name: "codigoTipoIdentificacion", type: "string" },
            { name: "identificacionFuanAfiliado", type: "string" },
            { name: "fechaNacimientoFuanAfiliado", type: "date", convert: Coomuce.Util.parseDate },
            { name: "edadFuanAfiliado", type: "int" },
            { name: "compDepartamento", type: "string" },
            { name: "compCiudad", type: "string" },
            { name: "puntajeSisbenFuanAfiliado", type: "string" },
            { name: "direccionFuanAfiliado", type: "string" },
            { name: "telefonoFuanAfiliado", type: "string" },
            { name: "celularFuanAfiliado", type: "string" },
            { name: "emailFuanAfiliado", type: "string" },
            { name: "nombreTipoEtnia", type: "string" },
            { name: "nombreTipoZona", type: "string" },
            { name: "idTipoSexo", type: "int" },
            { name: "nombreTipoSexo", type: "string" },
            { name: "fechaUltFicha", type: "date", convert: Coomuce.Util.parseDate },
            { name: "fechaUltHistoria", type: "date", convert: Coomuce.Util.parseDate },
            {
                name: "compAfiliado", convert: function (v, record) {
                    return record.get("identificacionFuanAfiliado") + " - " +
                    record.get("primerApellidoFuanAfiliado") + " " + 
                    record.get("segundoApellidoFuanAfiliado") + " " +
                    record.get("primerNombreFuanAfiliado") + " " +
                    record.get("segundoNombreFuanAfiliado");
                }
            },
            {
                name: "nombreCompletoAfiliado", convert: function (v, record) {
                    return record.get("primerApellidoFuanAfiliado") + " " +
                    record.get("segundoApellidoFuanAfiliado") + " " +
                    record.get("primerNombreFuanAfiliado") + " " +
                    record.get("segundoNombreFuanAfiliado");
                }
            },
            { name: "numCarnetFuanAfiliado", type: "string" }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetFuanAfiliadoConsultar",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        });

        var grid = Ext.create("Ext.grid.Panel", {
            columns: [
            { dataIndex: "numCarnetFuanAfiliado", header: "Carnet" },
            { dataIndex: "identificacionFuanAfiliado", header: "Identificación" },
            { dataIndex: "primerApellidoFuanAfiliado", header: "Primer Apellido" },
            { dataIndex: "segundoApellidoFuanAfiliado", header: "Segundo Apellido" },
            { dataIndex: "primerNombreFuanAfiliado", header: "Primer Nombre" },
            { dataIndex: "segundoNombreFuanAfiliado", header: "Segundo Nombre" }
            ],
            columnLines: true,
            listeners: {
                rowdblclick: function (grd, record, tr, rowIndex, e, eOpts) {
                    if (btn.inGrid === true) {
                        var recordGrid = btn.getWidgetRecord();

                        for (var i = 0; i < btn.componentReference.length; i++) {
                            recordGrid.set(btn.componentReference[i], record.get(btn.componentReference[i]));
                        }
                    }
                    else {
                        if (btn.validarFormato && record.get(btn.fechaUltFormato) != null) {
                            var d = record.get(btn.fechaUltFormato);
                            var year = d.getFullYear();
                            var month = d.getMonth();
                            var day = d.getDate();

                            var c = new Date(year + 1, month, day)

                            if (d < c) {
                                Coomuce.Util.ShowMessage({ type: "ERROR", title: "Validación", msg: "No puede generar formato para el afiliado seleccionado hasta la fecha: " + c.toLocaleDateString() });

                                return false;
                            }
                        }

                        for (var i = 0; i < btn.componentReference.length; i++) {
                            var o = Ext.ComponentQuery.query('[name=' + btn.componentReference[i] + ']')[0];

                            o.setValue(record.get(btn.componentReference[i]));
                        }
                        // esto es en el caso que se requiera inhabilitar componentes
                        if (record.get("nombreTipoSexo") != "Femenino") {
                            if (btn.disabledBySexo != undefined) {
                                for (var i = 0; i < btn.disabledBySexo.length; i++) {
                                    var ob = Ext.ComponentQuery.query('[name=' + btn.disabledBySexo[i] + ']')[0];
                                    ob.setDisabled(true);
                                }
                            }
                        }

                        if (btn.preguntasIdentificacion != undefined) {
                            var storeGrid = Ext.getCmp('Grid-Ifppir-Principal').getStore();
                            storeGrid.load({ params: { edad: record.get("edadFuanAfiliado"), sexo: record.get("idTipoSexo") } });
                        }
                    }
                    window.close();
                }
            },
            sortableColumns: false,
            store: store
        });

        var window = Ext.create("Ext.window.Window", {
            bodyPadding: 10,
            closeToolText: "Cerrar",
            height: 400,
            items: [
            {
                layout: {
                    type: "table",
                    columns: 2
                },
                items: [
                {
                    items: [
                    {
                        xtype: "combo",
                        displayField: "nombre",
                        fieldLabel: "Campo",
                        queryMode: "local",
                        id: "campoBusqueda",
                        store: Ext.create("Ext.data.ArrayStore", {
                            fields: ["id", "nombre"],
                            data: [
                            ["numCarnetFuanAfiliado", "Carnet"],
                            ["identificacionFuanAfiliado", "Identificación"],
                            ["primerApellidoFuanAfiliado", "Primer Apellido"],
                            ["segundoApellidoFuanAfiliado", "Segundo Apellido"],
                            ["primerNombreFuanAfiliado", "Primer Nombre"]
                            ]
                        }),
                        valueField: "id"
                    },
                    {
                        xtype: "textfield",
                        fieldLabel: "Criterio",
                        id: "criterioBusqueda"
                    }
                    ],
                    width: 350
                },
                {
                    items: [
                    {
                        xtype: "button",
                        text: "Buscar",
                        handler: function () {
                            var campo = Ext.getCmp("campoBusqueda").getValue();
                            var criterio = Ext.getCmp("criterioBusqueda").getValue();

                            store.load({
                                params: {
                                    campo: campo,
                                    criterio: criterio
                                }
                            });
                        }
                    }
                    ]
                }
                ]
            },
            { frame: true, height: 200, items: grid, layout: "fit" }
            ],
            modal: true,
            title: "Lista de Afiliados",
            width: 540
        });

        window.show();
    },

    buscarAfiliadoFicha: function (btn) {
        var me = btn.getController();
        var store = Ext.create("Ext.data.Store", {
            autoLoad: false,
            fields: [
            { name: "idFuanAfiliado", type: "int" },
            { name: "primerApellidoFuanAfiliado", type: "string" },
            { name: 'segundoApellidoFuanAfiliado', type: 'string' },
            { name: 'primerNombreFuanAfiliado', type: 'string' },
            { name: "segundoNombreFuanAfiliado", type: "string" },
            { name: "codigoTipoIdentificacion", type: "string" },
            { name: "identificacionFuanAfiliado", type: "string" },
            { name: "fechaNacimientoFuanAfiliado", type: "date", convert: Coomuce.Util.parseDate },
            { name: "edadFuanAfiliado", type: "int" },
            { name: "compDepartamento", type: "string" },
            { name: "compCiudad", type: "string" },
            { name: "puntajeSisbenFuanAfiliado", type: "string" },
            { name: "direccionFuanAfiliado", type: "string" },
            { name: "telefonoFuanAfiliado", type: "string" },
            { name: "celularFuanAfiliado", type: "string" },
            { name: "emailFuanAfiliado", type: "string" },
            { name: "nombreTipoEtnia", type: "string" },
            { name: "nombreTipoZona", type: "string" },
            { name: "idTipoSexo", type: "int" },
            { name: "nombreTipoSexo", type: "string" },
            { name: "fechaUltFicha", type: "date", convert: Coomuce.Util.parseDate },
            { name: "fechaUltHistoria", type: "date", convert: Coomuce.Util.parseDate },
            {
                name: "compAfiliado", convert: function (v, record) {
                    return record.get("identificacionFuanAfiliado") + " - " +
                    record.get("primerApellidoFuanAfiliado") + " " + 
                    record.get("segundoApellidoFuanAfiliado") + " " +
                    record.get("primerNombreFuanAfiliado") + " " +
                    record.get("segundoNombreFuanAfiliado");
                }
            },
            {
                name: "nombreCompletoAfiliado", convert: function (v, record) {
                    return record.get("primerApellidoFuanAfiliado") + " " +
                    record.get("segundoApellidoFuanAfiliado") + " " +
                    record.get("primerNombreFuanAfiliado") + " " +
                    record.get("segundoNombreFuanAfiliado");
                }
            },
            { name: "numCarnetFuanAfiliado", type: "string" }
            ],
            proxy: {
                timeout: 600000,
                useDefaultXhrHeader: false,
                type: 'ajax',
                url: Coomuce.Url.Funciones + "GetFuanAfiliadoConsultar",
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: "total"
                }
            }
        });

        var grid = Ext.create("Ext.grid.Panel", {
            columns: [
            { dataIndex: "numCarnetFuanAfiliado", header: "Carnet" },
            { dataIndex: "identificacionFuanAfiliado", header: "Identificación" },
            { dataIndex: "primerApellidoFuanAfiliado", header: "Primer Apellido" },
            { dataIndex: "segundoApellidoFuanAfiliado", header: "Segundo Apellido" },
            { dataIndex: "primerNombreFuanAfiliado", header: "Primer Nombre" },
            { dataIndex: "segundoNombreFuanAfiliado", header: "Segundo Nombre" }
            ],
            columnLines: true,
            listeners: {
                rowdblclick: function (grd, record, tr, rowIndex, e, eOpts) {
                    var carnet = record.data.numCarnetFuanAfiliado;
                    var user = "9010434770";
                    var pass = "U$u@r10W3b$3v1c3";
                    var responseData = null;
                    var form = Ext.getCmp("Form-Ifppir-Principal");
                    $('body').loading({
                        theme: 'dark',
                        message: 'Consultando WebService ...'
                    });
                    // Varifico con el WebService de Ficha
                    var conf = {
                        url: Coomuce.Url.Funciones + "ConsultarWSFicha",
                        data: JSON.stringify({ Usuario: '9010434770', Contraseña: 'U$u@r10W3b$3v1c3', Carnet: carnet }),
                        targetMask: undefined,
                        msgMask: "Consultando WebService ...",
                        fnSuccess: function (response) {
                            $('body').loading('stop');
                            mask.hide();
                        }
                    }; 


                    var swMask = false;
                    if (conf.targetMask !== undefined) {
                        swMask = true;
                        var mask = new Ext.LoadMask({
                            msg: conf.msgMask,
                            target: conf.targetMask
                        });
                        mask.show();
                    }

                    if (conf.showMsgConfirm === undefined) {
                        conf.showMsgConfirm = true;
                    }
                    
                    if (btn.inGrid === true) {
                        var recordGrid = btn.getWidgetRecord();
                        for (var i = 0; i < btn.componentReference.length; i++) {
                            recordGrid.set(btn.componentReference[i], record.get(btn.componentReference[i]));
                        }
                        $('body').loading('stop');
                    }
                    else {
                        //verifico en BD si el usuario tiene fichas recientes
                        var d = record.get(btn.fechaUltFormato);
                        if(d != null){
                            var year = d.getFullYear();
                            var month = d.getMonth();
                            var day = d.getDate();
                            var c = new Date(year + 1, month, day)

                            if (d < c) {
                                $('body').loading('stop');
                                Coomuce.Util.ShowMessage({ type: "ERROR", title: "Validación", msg: "No puede generar formato para el afiliado seleccionado hasta la fecha: " + c.toLocaleDateString() });
                                return false;
                            }
                        }
                        $.ajax({
                            url: conf.url,
                            method: 'post',
                            contentType: "application/json;charset=utf-8",
                            data: conf.data,
                            dataType: 'json',
                            success: function (resp) {
                                $('body').loading('stop');
                                if (swMask) {
                                    mask.hide();
                                }
                                if(resp.data.length > 0){
                                    responseData = resp.data[0];
                                    console.log(responseData);
                                    if(responseData.ExisteAfiliado){
                                        if(responseData.ExisteFicha){
                                            var dFicha = new Date(responseData.FechaFicha);
                                            console.log(dFicha);
                                            if(dFicha != null){
                                                var year = dFicha.getFullYear();
                                                var month = dFicha.getMonth();
                                                var day = dFicha.getDate();
                                                var cFicha = new Date(year + 1, month, day)

                                                if (dFicha < cFicha) {
                                                    $('body').loading('stop');
                                                    Coomuce.Util.ShowMessage({ type: "ERROR", title: "Validación", msg: "No puede generar formato para el afiliado seleccionado hasta la fecha: " + cFicha.toLocaleDateString() });
                                                    return false;
                                                }
                                            }
                                        }
                                    }

                                    for (var i = 0; i < btn.componentReference.length; i++) {
                                        var o = Ext.ComponentQuery.query('[name=' + btn.componentReference[i] + ']')[0];

                                        o.setValue(record.get(btn.componentReference[i]));
                                    }
                                    if (record.get("nombreTipoSexo") != "Femenino") {
                                        if (btn.disabledBySexo != undefined) {
                                            for (var i = 0; i < btn.disabledBySexo.length; i++) {
                                                var ob = Ext.ComponentQuery.query('[name=' + btn.disabledBySexo[i] + ']')[0];
                                                ob.setDisabled(true);
                                            }
                                        }
                                    }

                                    if (btn.preguntasIdentificacion != undefined) {
                                        var storeGrid = Ext.getCmp('Grid-Ifppir-Principal').getStore();
                                        storeGrid.load({ params: { edad: record.get("edadFuanAfiliado"), sexo: record.get("idTipoSexo") } });
                                    }
                                }
                            },
                            error: function (err) {
                                $('body').loading('stop');
                                if (swMask) {
                                    mask.hide();
                                }
                                for (var i = 0; i < btn.componentReference.length; i++) {
                                    var o = Ext.ComponentQuery.query('[name=' + btn.componentReference[i] + ']')[0];

                                    o.setValue(record.get(btn.componentReference[i]));
                                }
                                if (record.get("nombreTipoSexo") != "Femenino") {
                                    if (btn.disabledBySexo != undefined) {
                                        for (var i = 0; i < btn.disabledBySexo.length; i++) {
                                            var ob = Ext.ComponentQuery.query('[name=' + btn.disabledBySexo[i] + ']')[0];
                                            ob.setDisabled(true);
                                        }
                                    }
                                }

                                if (btn.preguntasIdentificacion != undefined) {
                                    var storeGrid = Ext.getCmp('Grid-Ifppir-Principal').getStore();
                                    storeGrid.load({ params: { edad: record.get("edadFuanAfiliado"), sexo: record.get("idTipoSexo") } });
                                }
                            }
                        });
                    }

                    window.close();
                }
},
sortableColumns: false,
store: store
});
var window = Ext.create("Ext.window.Window", {
    bodyPadding: 10,
    closeToolText: "Cerrar",
    height: 400,
    items: [
    {
        layout: {
            type: "table",
            columns: 2
        },
        items: [
        {
            items: [
            {
                xtype: "combo",
                displayField: "nombre",
                fieldLabel: "Campo",
                queryMode: "local",
                id: "campoBusqueda",
                store: Ext.create("Ext.data.ArrayStore", {
                    fields: ["id", "nombre"],
                    data: [
                    ["numCarnetFuanAfiliado", "Carnet"],
                    ["identificacionFuanAfiliado", "Identificación"],
                    ["primerApellidoFuanAfiliado", "Primer Apellido"],
                    ["segundoApellidoFuanAfiliado", "Segundo Apellido"],
                    ["primerNombreFuanAfiliado", "Primer Nombre"]
                    ]
                }),
                valueField: "id"
            },
            {
                xtype: "textfield",
                fieldLabel: "Criterio",
                id: "criterioBusqueda"
            }
            ],
            width: 350
        },
        {
            items: [
            {
                xtype: "button",
                text: "Buscar",
                handler: function () {
                    var campo = Ext.getCmp("campoBusqueda").getValue();
                    var criterio = Ext.getCmp("criterioBusqueda").getValue();

                    store.load({
                        params: {
                            campo: campo,
                            criterio: criterio
                        }
                    });
                }
            }
            ]
        }
        ]
    },
    { frame: true, height: 200, items: grid, layout: "fit" }
    ],
    modal: true,
    title: "Lista de Afiliados",
    width: 540
});

window.show();
},

buscarAfiliadoHistoria: function (btn) {
    var me = btn.getController();
    var store = Ext.create("Ext.data.Store", {
        autoLoad: false,
        fields: [
        { name: "idFuanAfiliado", type: "int" },
        { name: "primerApellidoFuanAfiliado", type: "string" },
        { name: 'segundoApellidoFuanAfiliado', type: 'string' },
        { name: 'primerNombreFuanAfiliado', type: 'string' },
        { name: "segundoNombreFuanAfiliado", type: "string" },
        { name: "codigoTipoIdentificacion", type: "string" },
        { name: "identificacionFuanAfiliado", type: "string" },
        { name: "fechaNacimientoFuanAfiliado", type: "date", convert: Coomuce.Util.parseDate },
        { name: "edadFuanAfiliado", type: "int" },
        { name: "compDepartamento", type: "string" },
        { name: "compCiudad", type: "string" },
        { name: "puntajeSisbenFuanAfiliado", type: "string" },
        { name: "direccionFuanAfiliado", type: "string" },
        { name: "telefonoFuanAfiliado", type: "string" },
        { name: "celularFuanAfiliado", type: "string" },
        { name: "emailFuanAfiliado", type: "string" },
        { name: "nombreTipoEtnia", type: "string" },
        { name: "nombreTipoZona", type: "string" },
        { name: "idTipoSexo", type: "int" },
        { name: "nombreTipoSexo", type: "string" },
        { name: "fechaUltFicha", type: "date", convert: Coomuce.Util.parseDate },
        { name: "fechaUltHistoria", type: "date", convert: Coomuce.Util.parseDate },
        {
            name: "compAfiliado", convert: function (v, record) {
                return record.get("identificacionFuanAfiliado") + " - " +
                record.get("primerApellidoFuanAfiliado") + " " + 
                record.get("segundoApellidoFuanAfiliado") + " " +
                record.get("primerNombreFuanAfiliado") + " " +
                record.get("segundoNombreFuanAfiliado");
            }
        },
        {
            name: "nombreCompletoAfiliado", convert: function (v, record) {
                return record.get("primerApellidoFuanAfiliado") + " " +
                record.get("segundoApellidoFuanAfiliado") + " " +
                record.get("primerNombreFuanAfiliado") + " " +
                record.get("segundoNombreFuanAfiliado");
            }
        },
        { name: "numCarnetFuanAfiliado", type: "string" }
        ],
        proxy: {
            timeout: 600000,
            useDefaultXhrHeader: false,
            type: 'ajax',
            url: Coomuce.Url.Funciones + "GetFuanAfiliadoConsultar",
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: "total"
            }
        }
    });
    var grid = Ext.create("Ext.grid.Panel", {
        columns: [
        { dataIndex: "numCarnetFuanAfiliado", header: "Carnet" },
        { dataIndex: "identificacionFuanAfiliado", header: "Identificación" },
        { dataIndex: "primerApellidoFuanAfiliado", header: "Primer Apellido" },
        { dataIndex: "segundoApellidoFuanAfiliado", header: "Segundo Apellido" },
        { dataIndex: "primerNombreFuanAfiliado", header: "Primer Nombre" },
        { dataIndex: "segundoNombreFuanAfiliado", header: "Segundo Nombre" }
        ],
        columnLines: true,
        listeners: {
            rowdblclick: function (grd, record, tr, rowIndex, e, eOpts) {
                var carnet = record.data.numCarnetFuanAfiliado;
                var user = "9010434770";
                var pass = "U$u@r10W3b$3v1c3";
                var responseData = null;
                var form = Ext.getCmp("Form-Hfdfr-Principal");
                var swMask = false;
                $('body').loading({
                        theme: 'dark',
                        message: 'Consultando WebService ...'
                    });
                var conf = {
                    url: Coomuce.Url.Funciones + "ConsultarWSHistoria",
                    data: JSON.stringify({ Usuario: '9010434770', Contraseña: 'U$u@r10W3b$3v1c3', Carnet: carnet }),
                    targetMask: undefined,
                    msgMask: "Consultando WebService ...",
                    fnSuccess: function (response) {
                        $('body').loading('stop');
                        mask.hide();
                    }
                };

                
                if (conf.targetMask !== undefined) {
                    swMask = true;
                    var mask = new Ext.LoadMask({
                        msg: conf.msgMask,
                        target: conf.targetMask
                    });
                    mask.show();
                }

                    // si no esta viajando la confirmación del mensaje, entonces por defecto lo presento
                    if (conf.showMsgConfirm === undefined) {
                        conf.showMsgConfirm = true;
                    }

                    if (btn.inGrid === true) {
                        var recordGrid = btn.getWidgetRecord();

                        for (var i = 0; i < btn.componentReference.length; i++) {
                            recordGrid.set(btn.componentReference[i], record.get(btn.componentReference[i]));
                        }
                        $('body').loading('stop');
                    }
                    else {
                        var d = record.get(btn.fechaUltFormato);
                        if(d != null){
                            var year = d.getFullYear();
                            var month = d.getMonth();
                            var day = d.getDate();

                            var c = new Date(year + 1, month, day)

                            if (d < c) {
                                Coomuce.Util.ShowMessage({ type: "ERROR", title: "Validación", msg: "No puede generar formato para el afiliado seleccionado hasta la fecha: " + c.toLocaleDateString() });
                                return false;
                            }
                        }

                        $.ajax({
                            url: conf.url,
                            method: 'post',
                            contentType: "application/json;charset=utf-8",
                            data: conf.data,
                            dataType: 'json',
                            success: function (resp) {
                                $('body').loading('stop');
                                if (swMask) {
                                    mask.hide();
                                }
                                if(resp.data.length > 0){
                                    responseData = resp.data[0];
                                    console.log(responseData);
                                    if(responseData.ExisteAfiliado){
                                        if(responseData.ExisteFicha){
                                            var dFicha = new Date(responseData.FechaFicha);
                                            console.log(dFicha);
                                            if(dFicha != null){
                                                var year = dFicha.getFullYear();
                                                var month = dFicha.getMonth();
                                                var day = dFicha.getDate();
                                                var cFicha = new Date(year + 1, month, day)

                                                if (dFicha < cFicha) {
                                                    $('body').loading('stop');
                                                    Coomuce.Util.ShowMessage({ type: "ERROR", title: "Validación", msg: "No puede generar formato para el afiliado seleccionado hasta la fecha: " + cFicha.toLocaleDateString() });
                                                    return false;
                                                }
                                            }
                                        }
                                    }

                                    for (var i = 0; i < btn.componentReference.length; i++) {
                                        var o = Ext.ComponentQuery.query('[name=' + btn.componentReference[i] + ']')[0];
                                        o.setValue(record.get(btn.componentReference[i]));
                                    }
                                    if (record.get("nombreTipoSexo") != "Femenino") {
                                        if (btn.disabledBySexo != undefined) {
                                            for (var i = 0; i < btn.disabledBySexo.length; i++) {
                                                var ob = Ext.ComponentQuery.query('[name=' + btn.disabledBySexo[i] + ']')[0];
                                                ob.setDisabled(true);
                                            }
                                        }
                                    }

                                    if (btn.preguntasIdentificacion != undefined) {
                                        var storeGrid = Ext.getCmp('Grid-Ifppir-Principal').getStore();
                                        storeGrid.load({ params: { edad: record.get("edadFuanAfiliado"), sexo: record.get("idTipoSexo") } });
                                    }
                                }
                            },
                            error: function (err) {
                                $('body').loading('stop');
                                if (swMask) {
                                    mask.hide();
                                }
                                for (var i = 0; i < btn.componentReference.length; i++) {
                                    var o = Ext.ComponentQuery.query('[name=' + btn.componentReference[i] + ']')[0];
                                    o.setValue(record.get(btn.componentReference[i]));
                                }
                                if (record.get("nombreTipoSexo") != "Femenino") {
                                    if (btn.disabledBySexo != undefined) {
                                        for (var i = 0; i < btn.disabledBySexo.length; i++) {
                                            var ob = Ext.ComponentQuery.query('[name=' + btn.disabledBySexo[i] + ']')[0];
                                            ob.setDisabled(true);
                                        }
                                    }
                                }

                                if (btn.preguntasIdentificacion != undefined) {
                                    var storeGrid = Ext.getCmp('Grid-Ifppir-Principal').getStore();
                                    storeGrid.load({ params: { edad: record.get("edadFuanAfiliado"), sexo: record.get("idTipoSexo") } });
                                }
                            }
                        });
}
window.close();
}
},
sortableColumns: false,
store: store
});

var window = Ext.create("Ext.window.Window", {
    bodyPadding: 10,
    closeToolText: "Cerrar",
    height: 400,
    items: [
    {
        layout: {
            type: "table",
            columns: 2
        },
        items: [
        {
            items: [
            {
                xtype: "combo",
                displayField: "nombre",
                fieldLabel: "Campo",
                queryMode: "local",
                id: "campoBusqueda",
                store: Ext.create("Ext.data.ArrayStore", {
                    fields: ["id", "nombre"],
                    data: [
                    ["numCarnetFuanAfiliado", "Carnet"],
                    ["identificacionFuanAfiliado", "Identificación"],
                    ["primerApellidoFuanAfiliado", "Primer Apellido"],
                    ["segundoApellidoFuanAfiliado", "Segundo Apellido"],
                    ["primerNombreFuanAfiliado", "Primer Nombre"]
                    ]
                }),
                valueField: "id"
            },
            {
                xtype: "textfield",
                fieldLabel: "Criterio",
                id: "criterioBusqueda"
            }
            ],
            width: 350
        },
        {
            items: [
            {
                xtype: "button",
                text: "Buscar",
                handler: function () {
                    var campo = Ext.getCmp("campoBusqueda").getValue();
                    var criterio = Ext.getCmp("criterioBusqueda").getValue();

                    store.load({
                        params: {
                            campo: campo,
                            criterio: criterio
                        }
                    });
                }
            }
            ]
        }
        ]
    },
    { frame: true, height: 200, items: grid, layout: "fit" }
    ],
    modal: true,
    title: "Lista de Afiliados",
    width: 540
});

window.show();
},

buscarIps: function (btn) {
    var me = btn.getController();

    var store = Ext.create("Ext.data.Store", {
        autoLoad: true,
        fields: ["idIps", "codigoIps", "identificacionIps", "razonIps", "nombreCompletoIps"],
        proxy: {
            timeout: 600000,
            useDefaultXhrHeader: false,
            type: 'ajax',
            url: Coomuce.Url.Funciones + "GetIpsAll",
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: "total"
            }
        }
    });

    var grid = Ext.create("Ext.grid.Panel", {
        columns: [
        { dataIndex: "codigoIps", header: "Código" },
        { dataIndex: "identificacionIps", header: "Identificación", width: 200 },
        { dataIndex: "razonIps", header: "Razón Social", width: 300 }
        ],
        columnLines: true,
        listeners: {
            rowdblclick: function (grd, record, tr, rowIndex, e, eOpts) {
                for (var i = 0; i < btn.componentReference.length; i++) {
                    var o = Ext.ComponentQuery.query('[name=' + btn.componentReference[i] + ']')[0];
                    o.setValue(record.get(btn.componentReference[i]));
                }
                window.close();
            }
        },
        sortableColumns: false,
        store: store
    });

    var window = Ext.create("Ext.window.Window", {
        bodyPadding: 10,
        closeToolText: "Cerrar",
        height: 400,
        items: [
        {
            layout: {
                type: "table",
                columns: 2
            },
            items: [
            {
                items: [
                {
                    xtype: "combo",
                    displayField: "nombre",
                    fieldLabel: "Campo",
                    queryMode: "local",
                    id: "campoBusqueda",
                    store: Ext.create("Ext.data.ArrayStore", {
                        fields: ["id", "nombre"],
                        data: [
                        ["codigoIps", "Código"],
                        ["identificacionIps", "Identificación"],
                        ["razonIps", "Razón Social"]
                        ]
                    }),
                    valueField: "id"
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Criterio",
                    id: "criterioBusqueda"
                }
                ],
                width: 350
            },
            {
                items: [
                {
                    xtype: "button",
                    text: "Buscar",
                    handler: function () {
                        var campo = Ext.getCmp("campoBusqueda").getValue();
                        var criterio = Ext.getCmp("criterioBusqueda").getValue();

                        store.clearFilter();
                        store.filter(campo, criterio);
                    }
                }
                ]
            }
            ]
        },
        { frame: true, height: 200, items: grid, layout: "fit" }
        ],
        modal: true,
        title: "Lista de IPS",
        width: 540
    });

    window.show();
},

buscarArl: function (btn) {
    var me = btn.getController();

    var store = Ext.create("Ext.data.Store", {
        autoLoad: true,
        fields: ["Id", "codigo", "nit", "nombre", "nombreCompleto"],
        proxy: {
            timeout: 600000,
            useDefaultXhrHeader: false,
            type: 'ajax',
            url: Coomuce.Url.Funciones + "GetArlAll",
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: "total"
            }
        }
    });

    var grid = Ext.create("Ext.grid.Panel", {
        columns: [
        { dataIndex: "codigo", header: "Código" },
        { dataIndex: "nit", header: "Nit", width: 200 },
        { dataIndex: "nombre", header: "Razón Social", width: 300 }
        ],
        columnLines: true,
        listeners: {
            rowdblclick: function (grd, record, tr, rowIndex, e, eOpts) {
                for (var i = 0; i < btn.componentReference.length; i++) {
                    var o = Ext.ComponentQuery.query('[name=' + btn.componentReference[i] + ']')[0];
                    o.setValue(record.get(btn.componentReference[i]));
                }
                window.close();
            }
        },
        sortableColumns: false,
        store: store
    });

    var window = Ext.create("Ext.window.Window", {
        bodyPadding: 10,
        closeToolText: "Cerrar",
        height: 400,
        items: [
        {
            layout: {
                type: "table",
                columns: 2
            },
            items: [
            {
                items: [
                {
                    xtype: "combo",
                    displayField: "nombre",
                    fieldLabel: "Campo",
                    queryMode: "local",
                    id: "campoBusqueda",
                    store: Ext.create("Ext.data.ArrayStore", {
                        fields: ["Id", "nombre"],
                        data: [
                        ["codigo", "Código"],
                        ["nit", "Nit"],
                        ["nombre", "Razón Social"]
                        ]
                    }),
                    valueField: "id"
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Criterio",
                    id: "criterioBusqueda"
                }
                ],
                width: 350
            },
            {
                items: [
                {
                    xtype: "button",
                    text: "Buscar",
                    handler: function () {
                        var campo = Ext.getCmp("campoBusqueda").getValue();
                        var criterio = Ext.getCmp("criterioBusqueda").getValue();

                        store.clearFilter();
                        store.filter(campo, criterio);
                    }
                }
                ]
            }
            ]
        },
        { frame: true, height: 200, items: grid, layout: "fit" }
        ],
        modal: true,
        title: "Lista de ARL",
        width: 540
    });

    window.show();
},

buscarAfp: function (btn) {
    var me = btn.getController();

    var store = Ext.create("Ext.data.Store", {
        autoLoad: true,
        fields: ["Id", "codigo", "nit", "nombre", "nombreCompleto"],
        proxy: {
            timeout: 600000,
            useDefaultXhrHeader: false,
            type: 'ajax',
            url: Coomuce.Url.Funciones + "GetAfpAll",
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: "total"
            }
        }
    });

    var grid = Ext.create("Ext.grid.Panel", {
        columns: [
        { dataIndex: "codigo", header: "Código" },
        { dataIndex: "nit", header: "Nit", width: 200 },
        { dataIndex: "nombre", header: "Razón Social", width: 300 }
        ],
        columnLines: true,
        listeners: {
            rowdblclick: function (grd, record, tr, rowIndex, e, eOpts) {
                for (var i = 0; i < btn.componentReference.length; i++) {
                    var o = Ext.ComponentQuery.query('[name=' + btn.componentReference[i] + ']')[0];
                    o.setValue(record.get(btn.componentReference[i]));
                }
                window.close();
            }
        },
        sortableColumns: false,
        store: store
    });

    var window = Ext.create("Ext.window.Window", {
        bodyPadding: 10,
        closeToolText: "Cerrar",
        height: 400,
        items: [
        {
            layout: {
                type: "table",
                columns: 2
            },
            items: [
            {
                items: [
                {
                    xtype: "combo",
                    displayField: "nombre",
                    fieldLabel: "Campo",
                    queryMode: "local",
                    id: "campoBusqueda",
                    store: Ext.create("Ext.data.ArrayStore", {
                        fields: ["Id", "nombre"],
                        data: [
                        ["codigo", "Código"],
                        ["nit", "Nit"],
                        ["nombre", "Razón Social"]
                        ]
                    }),
                    valueField: "id"
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Criterio",
                    id: "criterioBusqueda"
                }
                ],
                width: 350
            },
            {
                items: [
                {
                    xtype: "button",
                    text: "Buscar",
                    handler: function () {
                        var campo = Ext.getCmp("campoBusqueda").getValue();
                        var criterio = Ext.getCmp("criterioBusqueda").getValue();

                        store.clearFilter();
                        store.filter(campo, criterio);
                    }
                }
                ]
            }
            ]
        },
        { frame: true, height: 200, items: grid, layout: "fit" }
        ],
        modal: true,
        title: "Lista de AFP",
        width: 540
    });

    window.show();
},

buscarIpsAfiliacion: function (btn) {
    var me = btn.getController();

    var store = Ext.create("Ext.data.Store", {
        autoLoad: true,
        fields: ["idIps", "codigoIps", "identificacionIps", "razonIps", "nombreCompletoIps"],
        proxy: {
            timeout: 600000,
            useDefaultXhrHeader: false,
            type: 'ajax',
            url: Coomuce.Url.Funciones + "GetIpsAll",
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: "total"
            }
        }
    });

    var grid = Ext.create("Ext.grid.Panel", {
        columns: [
        { dataIndex: "codigoIps", header: "Código" },
        { dataIndex: "identificacionIps", header: "Identificación", width: 200 },
        { dataIndex: "razonIps", header: "Razón Social", width: 300 }
        ],
        columnLines: true,
        listeners: {
            rowdblclick: function (grd, record, tr, rowIndex, e, eOpts) {
                var ipsName = "";
                for (var i = 0; i < btn.componentReference.length; i++) {
                    var gridIps = Ext.getCmp("Grid-IpsPrimaria").getStore();
                    var gridRow = gridIps.data.items[0].data;
                    gridRow.nombreCompletoIps = record.get(btn.componentReference[i])
                    gridRow.nombreFuanIpsPrimariaAfiliado = gridRow.nombreCompletoIps;
                    var gridStore = Ext.getStore('ipsAfiliadoStore');
                    gridStore.remove(0);
                    gridStore.add(gridRow);

                    console.log(gridStore);
                }
                
                window.close();
            }
        },
        sortableColumns: false,
        store: store
    });

    var window = Ext.create("Ext.window.Window", {
        bodyPadding: 10,
        closeToolText: "Cerrar",
        height: 400,
        items: [
        {
            layout: {
                type: "table",
                columns: 2
            },
            items: [
            {
                items: [
                {
                    xtype: "combo",
                    displayField: "nombre",
                    fieldLabel: "Campo",
                    queryMode: "local",
                    id: "campoBusqueda",
                    store: Ext.create("Ext.data.ArrayStore", {
                        fields: ["id", "nombre"],
                        data: [
                        ["codigoIps", "Código"],
                        ["identificacionIps", "Identificación"],
                        ["razonIps", "Razón Social"]
                        ]
                    }),
                    valueField: "id"
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Criterio",
                    id: "criterioBusqueda"
                }
                ],
                width: 350
            },
            {
                items: [
                {
                    xtype: "button",
                    text: "Buscar",
                    handler: function () {
                        var campo = Ext.getCmp("campoBusqueda").getValue();
                        var criterio = Ext.getCmp("criterioBusqueda").getValue();

                        store.clearFilter();
                        store.filter(campo, criterio);
                    }
                }
                ]
            }
            ]
        },
        { frame: true, height: 200, items: grid, layout: "fit" }
        ],
        modal: true,
        title: "Lista de IPS",
        width: 540
    });

    window.show();
},

Menu: null,
reloj: null

});

// definición de url de servicios
Ext.define("Coomuce.Url", {
    singleton: true,

    Seguridad: Coomuce.Util.BaseUrl + "CoomuceSeguridad.svc/",
    Administracion: Coomuce.Util.BaseUrl + "CoomuceAdministracion.svc/",
    Parametros: Coomuce.Util.BaseUrl + "CoomuceParametros.svc/",
    Funciones: Coomuce.Util.BaseUrl + "CoomuceFunciones.svc/",

});

Ext.define('Coomuce.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Coomuce',

    onAppUpdate: function () {
        Ext.Msg.confirm("COOMUCE", 'Esta aplicación ha sido actualizada, ¿Desea recargarla?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
            );
    }
});
