import { Component, Input } from '@angular/core'
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap'



@Component({
	selector: 'selects',
	templateUrl: './select.pug',
	styleUrls: [ './select.styl' ],
	providers: [NgbDropdownConfig]
})



export class SelectComponent {

	selectedOption: object = null
	@Input('mark') mark: boolean = false
	@Input('position') position: string = 'bottom-left'
	@Input('placeholder') placeholder: string = 'Selecciona...'
	@Input('options') options: Array<object> = []


	constructor( private config: NgbDropdownConfig ) {
		config.autoClose = true
	}



	selectOption ( _option: object ): void {
		this.selectedOption = _option
	}

}