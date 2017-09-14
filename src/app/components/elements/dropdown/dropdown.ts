import { Component, Input } from '@angular/core'



@Component({
	selector: 'dropdown',
	templateUrl: './dropdown.pug',
	styleUrls: [ './dropdown.styl' ]
})



export class DropdownComponent {

	@Input('mark') mark: boolean = false
	@Input('position') position: string = 'bottom-left'

}
