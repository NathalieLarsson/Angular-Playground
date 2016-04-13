import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { User } from './user';
import { UserDetailComponent } from './User-detail.component';
import { UserService } from './user.service';

@Component({
	selector: 'my-users',
	styleUrls: ['app/css/users.component.css'],
	template: `
		<ul class="users">
			<li *ngFor="#user of users" 
				[class.selected]="herp === selectedUser" 
				(click)="onSelect(user)">
				<span class="badge">{{user.id}}</span> {{user.name}}
			</li>
		</ul>
		
		<div *ngIf="selectedUser">
			<h2>
				{{selectedUser.name | uppercase}} is my user
			</h2>
			<button (click)="gotoDetail()">View Details</button>
		</div>
	`,
	directives: [UserDetailComponent]
})


export class UsersComponent implements OnInit {
	users: User[];
	selectedUser = User[4]; //selectedUser: user;
	
	constructor(private _router: Router, private _userService: UserService){	}
	
	getUsers(){
		this._userService.getUsers().then(users => this.users = users);
	}
	
	ngOnInit(){
		this.getUsers();
	}
	
	onSelect(user: User){
		this.selectedUser = user;
	}
	
	gotoDetail(){
		this._router.navigate(['userDetail', {id: this.selectedUser.id}]);
	}
}