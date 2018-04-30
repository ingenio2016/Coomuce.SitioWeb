Ext.define('CoomuceMod.view.ReportesIndividuales.Interfaces.FichaIdentificacionController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.reportes-individuales-interfaces-fichaidentificacion',

	onBotonGenerarReporteClick: function () {
		var opcional = "&documento=" + Ext.getCmp("FDI-ParamDocumento").getValue() + 
					   "&fechaFicha=" + Ext.getCmp("FDI-ParamFichas").getValue();

		Coomuce.Util.lanzarReporte(this.getView(), {
			idReporte: this.getView().idReporte,
			optional: opcional
		});
	},
	onBotonBuscarClick: function () {
		var form = Ext.getCmp("Form-Ifppir-Report");
		var conf = {
			url: Coomuce.Url.Funciones + "IfppirConsultar",
			data: {
				documento: Ext.getCmp("FDI-ParamDocumento").getValue()
			},
			targetMask: form,
			msgMask: "Buscando Fichas...",
			fnSuccess: function (response) {
				if(response.data.length > 0){
					var fichasStore = Ext.getStore('getFichasStore');
					fichasStore.removeAll();
					fichasStore.add(response.data);
				}
			}
		};

		Coomuce.Util.EnviarPost(conf);   
	}
});
