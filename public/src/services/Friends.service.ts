/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Injectable} from 'angular2/angular2';

@Injectable()
export class FriendsService {
	names: Array<string>;

	constructor() {
		this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
	}
}