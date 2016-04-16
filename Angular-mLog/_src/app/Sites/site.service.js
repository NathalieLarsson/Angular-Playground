System.register(['../_data/mock-sites', '../_data/mock-data', 'angular2/core', 'rxjs/Rx', 'rxjs/Observable', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_sites_1, mock_data_1, core_1, Observable_1, http_1;
    var SiteService;
    return {
        setters:[
            function (mock_sites_1_1) {
                mock_sites_1 = mock_sites_1_1;
            },
            function (mock_data_1_1) {
                mock_data_1 = mock_data_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SiteService = (function () {
                function SiteService(_http) {
                    this._http = _http;
                }
                SiteService.prototype.getSites = function () {
                    return Promise.resolve(mock_sites_1.SITES);
                };
                SiteService.prototype.getSite = function (id) {
                    return Promise.resolve(mock_sites_1.SITES).then(function (Sites) { return Sites.filter(function (site) { return site.id === id; })[0]; });
                };
                SiteService.prototype.getSitesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_sites_1.SITES); }, 2000);
                    });
                };
                SiteService.prototype.getData = function (id) {
                    return Promise.resolve(mock_data_1.DATA).then(function (Data) { return Data.filter(function (data) { return data.siteId === id; })[0]; });
                };
                SiteService.prototype.getmBizData = function () {
                    return this._http.get('app/_data/mbiz-data.json').map(function (response) { return response.json(); }); //.then(this.extractDataPro).catch(this.handleErrorPro);
                };
                SiteService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    this.objectData = res.json();
                    //console.log(this.objectData);
                    return this.objectData || {};
                };
                SiteService.prototype.handleError = function (error) {
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                SiteService.prototype.extractDataPro = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    //this.objectData = res.json();
                    console.log(res.json());
                    //return this.objectData || { };
                    return body || {};
                };
                SiteService.prototype.handleErrorPro = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Promise.reject(errMsg);
                };
                SiteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SiteService);
                return SiteService;
            }());
            exports_1("SiteService", SiteService);
        }
    }
});
//# sourceMappingURL=site.service.js.map