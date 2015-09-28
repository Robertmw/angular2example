
import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {FriendsService} from '../services/Friends.service';

@Component({
	selector: 'welcome',
	bindings: [FriendsService]
})
@View({
	directives: [NgFor],
	templateUrl: 'templates/welcome.html'
})

export class WelcomeComponent {

	visible: any;
	names: Array<string>;
	
	constructor(@Inject(FriendsService) friendsService) {
		this.visible = true;
		this.names = friendsService.names;
	}

	toggle() {
		this.visible = !this.visible;
	}

}

