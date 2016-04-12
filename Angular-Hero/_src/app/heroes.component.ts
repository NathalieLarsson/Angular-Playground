import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-heroes',
	styleUrls: ['app/css/heroes.component.css'],
	template: `
		<ul class="heroes">
			<li *ngFor="#hero of heroes" 
				[class.selected]="herp === selectedHero" 
				(click)="onSelect(hero)">
				<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>
		
		<div *ngIf="selectedHero">
			<h2>
				{{selectedHero.name | uppercase}} is my hero
			</h2>
			<button (click)="gotoDetail()">View Details</button>
		</div>
	`,
	directives: [HeroDetailComponent]
})


export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero = Hero[4]; //selectedHero: Hero;
	
	constructor(private _router: Router, private _heroService: HeroService){	}
	
	getHeroes(){
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	ngOnInit(){
		this.getHeroes();
	}
	
	onSelect(hero: Hero){
		this.selectedHero = hero;
	}
	
	gotoDetail(){
		this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
	}
}