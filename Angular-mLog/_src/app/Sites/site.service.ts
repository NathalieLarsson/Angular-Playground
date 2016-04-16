import { SITES } from '../_data/mock-sites';
import { DATA } from '../_data/mock-data';
import { Site } from './Site';
import { Data } from '../_data/data';
import { RootObject } from '../_data/mbiz';
import { Injectable } from 'angular2/core';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';

@Injectable()
export class SiteService{
	mbizData: string;
	screen: string;
	objectData: RootObject;
	
	constructor(public _http:Http) {}
	
	getSites(){
		return Promise.resolve(SITES);
	}
	
	getSite(id: number){
		return Promise.resolve(SITES).then(
			Sites => Sites.filter(site => site.id === id)[0]
		);
	}
	
	getSitesSlowly() {
		return new Promise<Site[]>(resolve =>
			setTimeout(()=>resolve(SITES), 2000)
		);
	}
	
	getData(id: number){
		return Promise.resolve(DATA).then(
			Data => Data.filter(data => data.siteId === id)[0]
		);
	}

	getmBizData(){
		return this._http.get('app/_data/mbiz-data.json').map((response) => response.json());//.then(this.extractDataPro).catch(this.handleErrorPro);
	}
	
	private extractData(res: Response) {
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		
		let body = res.json();
		
		this.objectData = res.json();
		//console.log(this.objectData);
		
		return this.objectData || { };
	}
	
	private handleError (error: any) {
		let errMsg = error.message || 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
	
	private extractDataPro(res: Response) {
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		let body = res.json();
		
		//this.objectData = res.json();
		console.log(res.json());
		
		//return this.objectData || { };
		return body || { };
	}
	private handleErrorPro (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error.message || 'Server error';
		console.error(errMsg); // log to console instead
		return Promise.reject(errMsg);
	}
}