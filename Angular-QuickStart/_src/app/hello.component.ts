import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {NgFor} from 'angular2/common';

@Component({
	selector: "hello-world",
	templateUrl: "hello.html",
	directives: [NgFor],
	//providers: [
	// 	AngularFire,
	// 	provide(Firebase, { useValue: new Firebase('https://webapi.firebaseio-demo.com/test') })
	//]
})

export class HelloApp{
	//helloService: FirebaseArray;
	//todoEdit: any;
	
	//  enterName($event, newName) {
	// 	 if($event.which === 13){
	// 	 	alert("Hello: " + newName.value);
	// 	 }	
	// }
	
	// addName(newName) {
	// 	this.helloService.add({
	// 		title: newName,
	// 		completed: false
	// 	});
	// }
}