import { Component, Input, Output, EventEmitter } from '@angular/core'
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
	@Output('onChange') onChange: EventEmitter<any> = new EventEmitter()



	constructor( private config: NgbDropdownConfig ) {
		config.autoClose = true
	}



	selectOption ( _option: object ): void {
		this.selectedOption = _option
		this.onChange.emit( _option )
	}

}