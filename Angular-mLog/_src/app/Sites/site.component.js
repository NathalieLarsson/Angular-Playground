System.register(['angular2/core', './site', 'angular2/router', './site.service'], function(exports_1, context_1) {
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
    var core_1, site_1, router_1, site_service_1;
    var SitesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (site_1_1) {
                site_1 = site_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (site_service_1_1) {
                site_service_1 = site_service_1_1;
            }],
        execute: function() {
            SitesComponent = (function () {
                function SitesComponent(_router, _siteService) {
                    this._router = _router;
                    this._siteService = _siteService;
                    this.selectedSite = site_1.Site[2];
                }
                SitesComponent.prototype.getSites = function () {
                    var _this = this;
                    this._siteService.getSites().then(function (sites) {
                        _this.sites = sites;
                        _this.mapSites(sites);
                        return sites;
                    });
                };
                SitesComponent.prototype.ngOnInit = function () {
                    this.getSites();
                    this.mbizData = this.getmBizDataMap();
                };
                SitesComponent.prototype.mapSites = function (sites) {
                    sites.forEach(function (site) {
                        site.data == this._siteService.getData((site.id));
                    }, this);
                };
                SitesComponent.prototype.getmBizDataMap = function () {
                    var _this = this;
                    this.mbizData = undefined;
                    this._siteService.getmBizDataMap().subscribe(function (rootObj) { return _this.mbizData = rootObj; });
                    return this.mbizData;
                };
                SitesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sites',
                        templateUrl: 'app/sites/html/site.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, site_service_1.SiteService])
                ], SitesComponent);
                return SitesComponent;
            }());
            exports_1("SitesComponent", SitesComponent);
        }
    }
});
//# sourceMappingURL=site.component.js.map