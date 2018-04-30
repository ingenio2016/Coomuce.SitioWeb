var baseServiceUrl = "";
var reportServiceUrl = "";
var localBaseServiceUrl = "";
var localReportServiceUrl = "";

(function () {
    $.getJSON("./resources/configAppService.json")
        .done(function (data) {
            baseServiceUrl = data.BaseUrl[0].appService;
            reportServiceUrl = data.BaseUrl[0].reportService;
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
})();
