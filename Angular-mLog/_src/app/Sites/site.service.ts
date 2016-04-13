import {SITES} from '../mock/mock-sites';
import {Site} from '/Site';
import {Injectable} from 'angular2/core';

@Injectable()
export class SiteService{
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
			setTimeout(()=>resolve(SITES), 2000) // 2 seconds
		);
	}
}