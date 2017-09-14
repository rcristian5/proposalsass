import { Component } from '@angular/core'



@Component({
	selector: 'tabless',
	templateUrl: './table.pug',
	styleUrls: [ './table.styl' ]
})



export class TableComponent {

	page: number = 4



	view (): void {
		console.log('Ver')
	}

}