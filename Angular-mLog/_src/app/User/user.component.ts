import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { User } from './user';
import { UserDetailComponent } from './user-detail.component';
import { UserService } from './user.service';

@Component({
	selector: 'my-users',
	styleUrls: ['app/user/css/users.component.css'],
	templateUrl: 'app/user/html/user.component.html',
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