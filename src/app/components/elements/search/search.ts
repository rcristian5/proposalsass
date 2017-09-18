import { Component, Input, ContentChild, TemplateRef, OnInit, Output, EventEmitter } from '@angular/core'
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap'
import { FilterPipe } from '../../../pipes/filter'

@Component({
	selector: 'search',
	templateUrl: './search.pug',
	styleUrls: [ './search.styl' ],
	providers: [ NgbDropdownConfig ]
})



export class SearchComponent implements OnInit {

	templateContext: object
	filterPipe: FilterPipe

	@Input('list') list: Array<any> = []
	@Input('filter') mainFilter: any = ''
	@Output('onFilter') onFilterEmitter: EventEmitter<any> = new EventEmitter
	@ContentChild(TemplateRef) templateRef: TemplateRef<any>



	constructor (
		private config: NgbDropdownConfig
	){
		config.placement = 'bottom-right'
		config.autoClose = false
	}



	ngOnInit (): void {
		this.setupVars()
	}


	setupVars (): void {
		this.templateContext = {
			$implicit: {
				onFilter: this.onFilter,
				field: {
					main: ''
				}
			},
		}


		this.filterPipe = new FilterPipe()

		let mainFilterAux = {}
		this.mainFilter.split(',').map(_itemFilter => mainFilterAux[_itemFilter] = this.templateContext['$implicit'].field.main)
		this.mainFilter = mainFilterAux
	}



	filterByMainField( _valueMainField ): void  {
		let a = []
		for (let key in this.mainFilter) {
			this.mainFilter[key] = _valueMainField
			console.log( key )
			var b = this.filterPipe.transform(this.list, { [key]: _valueMainField })
			a.concat(b)
			console.log(b)
		}
		console.log('all')
		console.log( a )
		// let filteredList = this.filterPipe.transform(this.list, this.mainFilter)
		// this.onFilterEmitter.emit(filteredList)
	}



	onFilter = ( ) => {
		let filteredList = this.filterPipe.transform( this.list, this.mainFilter )
		this.onFilterEmitter.emit( filteredList )
	}



}