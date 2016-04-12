System.register(['angular2/core', 'angular2/common', './hello.component'], function(exports_1, context_1) {
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
    var core_1, common_1, hello_component_1;
    var AppComponent, PEOPLE;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (hello_component_1_1) {
                hello_component_1 = hello_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    //todoService:  any; //FirebaseArray;
                    //todoEdit: any;
                    // constructor(sync: AngularFire) {
                    //     //this.todoService = sync.asArray();
                    //     //this.todoEdit = null;
                    // }
                    this.title = "Title here";
                    this.people = PEOPLE;
                }
                AppComponent.prototype.vote = function (person, amount) {
                    person.votes += amount;
                };
                AppComponent.prototype.onSelect = function (person) {
                    this.selectedPerson = person;
                };
                AppComponent.prototype.addPerson = function ($event, newPerson) {
                    if ($event.which === 13) {
                        alert("Ny person: " + newPerson.value);
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app.html',
                        providers: [
                            hello_component_1.HelloApp
                        ],
                        directives: [common_1.NgFor]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            PEOPLE = [
                { "id": 1, "name": "Ana", "votes": 2 },
                { "id": 2, "name": "Mattias", "votes": 2 },
                { "id": 3, "name": "Nathalie", "votes": 2 },
                { "id": 4, "name": "Maja", "votes": 2 }
            ];
        }
    }
});
// class  Greeter{
//     constructor(public greeting: string){}
//     greet(){
//         return "<h3>" + this.greeting + "</h3>";
//     }
// };
// class Greeter {
//     constructor(public greeting: string) { }
//     greet() {
//         return "<h1>" + this.greeting + "</h1>";
//     }
// };
// var greeter = new Greeter("Hello, world!");
// document.body.innerHTML = greeter.greet();
//# sourceMappingURL=app.component.js.map