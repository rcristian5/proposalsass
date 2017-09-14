import { Component } from '@angular/core'




@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.pug',
	styleUrls: [ './dashboard.styl' ]
})



export class DashboardComponent {

	categoryList: Array<string> = [
		'accessibility',
		'autorenew',
		'android',
		'cached',
		'assignment_returned',
		'subscriptions',
		'build',
		'explore',
		'gif',
		'motorcycle',
		'payment',
		'print',
		'room',
		'stars',
		'theaters',
		'album'
	]
}