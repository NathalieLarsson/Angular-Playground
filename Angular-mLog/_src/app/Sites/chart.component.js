System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var DoughnutChartDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DoughnutChartDemo = (function () {
                function DoughnutChartDemo() {
                    // Doughnut
                    this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
                    this.doughnutChartData = [350, 450, 100];
                    this.doughnutChartType = 'Doughnut';
                    console.log('doughnut demo');
                }
                // events
                DoughnutChartDemo.prototype.chartClicked = function (e) {
                    console.log(e);
                };
                DoughnutChartDemo.prototype.chartHovered = function (e) {
                    console.log(e);
                };
                DoughnutChartDemo = __decorate([
                    core_1.Component({
                        selector: 'doughnut-chart-demo',
                        templateUrl: './doughnut-chart-demo.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DoughnutChartDemo);
                return DoughnutChartDemo;
            }());
            exports_1("DoughnutChartDemo", DoughnutChartDemo);
        }
    }
});
//# sourceMappingURL=chart.component.js.map