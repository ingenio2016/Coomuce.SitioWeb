Ext.define('CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoFactorRiesgoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportes-individuales-interfaces-consolidadofactorriesgo',

    onBotonGenerarReporteClick: function () {
		var opcional = "&documento=" + Ext.getCmp("CFR-ParamDocumento").getValue() + 
					   "&fechahistoria=" + Ext.getCmp("CFR-ParamFichas").getValue();

		Coomuce.Util.lanzarReporte(this.getView(), {
			idReporte: this.getView().idReporte,
			optional: opcional
		});
	},
	onBotonBuscarClick: function () {
		var form = Ext.getCmp("Form-Hfdfr-Report");
		var conf = {
			url: Coomuce.Url.Funciones + "HfdfrConsultar",
			data: {
				documento: Ext.getCmp("CFR-ParamDocumento").getValue()
			},
			targetMask: form,
			msgMask: "Buscando Historias...",
			fnSuccess: function (response) {
				if(response.data.length > 0){
					var historiaStore = Ext.getStore('getHistoriasStore');
					historiaStore.removeAll();
					historiaStore.add(response.data);
				}
			}
		};
		console.log(conf);

		Coomuce.Util.EnviarPost(conf);   
	}

});
