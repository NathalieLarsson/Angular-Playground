import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { User } from './user/user';
import { UserService } from './user/user.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: '../dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    users: User[] = [];
    constructor(private _router: Router, private _userService: UserService) { }
    
    ngOnInit() {
        this._userService.getUsers()
            .then(users => this.users = users.slice(1,5));
    }
    
    gotoDetail(user: User){ 
        let link = ['UserDetail', { id: user.id }];
        this._router.navigate(link);
    }
}