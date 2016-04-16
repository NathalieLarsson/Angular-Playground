import { Component } from 'angular2/core';
import { UserService } from './user/user.service';
import { SiteService } from './sites/site.service';
import { UsersComponent } from './user/user.component';
import { SitesComponent } from './sites/site.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user/user-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@Component({
    selector: 'my-app',
    styleUrls: ['./app/app.component.css'],
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        UserService,
		SiteService
    ]
})

@RouteConfig([
    {
        path: '/Users',
        name: 'Users',
        component: UsersComponent
    },
	{
        path: '/Sites',
        name: 'Sites',
        component: SitesComponent
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
