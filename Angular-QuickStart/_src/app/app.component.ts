import {Component, provide} from 'angular2/core';
//import {AngularFire, FirebaseArray} from './firebase/angularfire';
import {NgFor} from 'angular2/common';
import {HelloApp} from './hello.component';
import {Person} from './person';

@Component({
    selector: 'my-app',
    templateUrl: 'app.html',
    providers: [
        HelloApp
        //AngularFire,
        //provide(Firebase, { useValue: new Firebase('https://webapi.firebaseio-demo.com/test') })
    ],
    directives: [NgFor]
})

export class AppComponent {
    //todoService:  any; //FirebaseArray;
    //todoEdit: any;

    // constructor(sync: AngularFire) {
    //     //this.todoService = sync.asArray();
    //     //this.todoEdit = null;
    // }

    title = "Title here";
    people = PEOPLE;

    selectedPerson: Person;

    vote(person: Person, amount) {
        person.votes += amount;
    }

    onSelect(person: Person) {
        this.selectedPerson = person;
    }

    addPerson($event, newPerson) {
        if ($event.which === 13) {
            alert("Ny person: " + newPerson.value);
        }
    }
}

var PEOPLE: Person[] = [
    { "id": 1, "name": "Ana", "votes": 2 },
    { "id": 2, "name": "Mattias", "votes": 2 },
    { "id": 3, "name": "Nathalie", "votes": 2 },
    { "id": 4, "name": "Maja", "votes": 2 }
];


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
