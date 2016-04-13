import { Component } from 'angular2/core';
import { UserService } from './user/user.service';
import { UsersComponent } from './user/user.component';
import { DashboardComponent } from './dashboard.component';
import { UserDetailComponent } from './user/user-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    styleUrls: ['app/css/app.component.css'],
    template: `
    	<h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Users']">Users</a>
        </nav>
		<router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        UserService
    ]
})

@RouteConfig([
    {
        path: '/Users',
        name: 'Users',
        component: UsersComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'UserDetail',
        component: UserDetailComponent    
    }
])

export class AppComponent {
    title = 'Tour of Users';
}
