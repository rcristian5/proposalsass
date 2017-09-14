import { Component, Input } from '@angular/core'



@Component({
	selector: 'radio',
	templateUrl: './radio.pug',
	styleUrls: [ './radio.styl' ]
})


export class RadioComponent {

	@Input('checked') checked: boolean = false
	@Input('label') label: string = ''

}