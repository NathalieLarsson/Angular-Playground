import { Component, Input, OnInit } from 'angular2/core';
import { User } from './user';
import { RouteParams } from 'angular2/router';
import { UserService } from './user.service';

@Component({
    selector: 'my-user-detail',
    templateUrl: '../user-detail.component.html',
	styleUrls: ['app/css/user-detail.component.css']
})

export class UserDetailComponent implements OnInit{
	@Input() user: User;
	
	constructor( private _userService: UserService, private _routeParams: RouteParams ){}
	
	ngOnInit(){
		let id = +this._routeParams.get("id");
		this._userService.getUser(id).then(user => this.user = user);
	}
	
	goBack(){
		window.history.back();
	}
}