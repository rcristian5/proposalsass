import { Component } from '@angular/core'
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap'


@Component({
	selector: 'search',
	templateUrl: './search.pug',
	styleUrls: [ './search.styl' ],
	providers: [ NgbDropdownConfig ]
})



export class SearchComponent {

	value: string = ''


	constructor( private config: NgbDropdownConfig) {
		config.placement = 'bottom-right'
		config.autoClose = false
	}

}