import { Component, OnInit } from 'angular2/core';
import { Site } from './site';
import { Router } from 'angular2/router';
import { SiteService } from './site.service';

@Component({
	selector: 'my-sites',
	templateUrl: 'app/sites/html/site.component.html'
})

export class SitesComponent implements OnInit {
	sites: Site[];
	selectedSite = Site[2];
	
	constructor(private _router: Router, private _siteService: SiteService){	}
	
	getSites(){
		this._siteService.getSites().then(sites => this.sites = sites);
	}
	
	ngOnInit(){
		this.getSites();
	}
}