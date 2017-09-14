import { Component, Input } from '@angular/core'



@Component({
	selector: 'loader',
	templateUrl: './loader.pug',
	styleUrls: [ './loader.styl' ]
})


export class LoaderComponent {

	@Input('show') show: boolean = true

}