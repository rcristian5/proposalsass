import { Component, Input } from '@angular/core'



@Component({
	selector: 'checkbox',
	templateUrl: './checkbox.pug',
	styleUrls: [ './checkbox.styl' ]
})


export class CheckboxComponent {

	@Input('label') label: string = ''
	@Input('checked') checked: boolean = false

}