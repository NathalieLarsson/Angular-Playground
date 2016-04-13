import {USERS} from '../mock/mock-users';
import {User} from '/User';
import {Injectable} from 'angular2/core';

@Injectable()
export class UserService{
	getUsers(){
		return Promise.resolve(USERS);
	}
	
	getUser(id: number){
		return Promise.resolve(USERS).then(
			Users => Users.filter(user => user.id === id)[0]
		);
	}
	
	getUsersSlowly() {
		return new Promise<User[]>(resolve =>
			setTimeout(()=>resolve(USERS), 2000) // 2 seconds
		);
	}
}