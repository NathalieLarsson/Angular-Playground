import { Component, OnInit } from 'angular2/core';
import { Site } from './site';
import { Data } from '../_data/data';
import { Router } from 'angular2/router';
import { SiteService } from './site.service';
import { RootObject } from '../_data/mbiz';

@Component({
	selector: 'my-sites',
	templateUrl: 'app/sites/html/site.component.html'
})

export class SitesComponent implements OnInit {
	sites: Site[];
	mbizData: RootObject;
	selectedSite = Site[2];
	dataCollection: Data[];
	errorMessage: string;
	screen: string;
	
	constructor(
		private _router: Router, 
		private _siteService: SiteService
	){}
	
	getSites(){
		this._siteService.getSites().then(sites => {
			this.sites = sites;
			this.mapSites(sites);
			return sites;
		});
	}

	ngOnInit(){
		this.getSites();
		this.mbizData = this.getmBizDataMap();
	}
	
	mapSites(sites: Site[]){
		sites.forEach(function(site){
			site.data == this._siteService.getData((site.id));
		}, this);
	}
	
	getmBizDataMap(){
		this.mbizData = undefined;
		
		this._siteService.getmBizDataMap().subscribe(rootObj => this.mbizData = rootObj);
		
		return this.mbizData;
	}
}