import {Pipe, PipeTransform} from '@angular/core';



@Pipe({
	name: 'filter'
})



export class FilterPipe implements PipeTransform {

	transform( _array: any, _filter: any): any {

		if ( _filter === undefined ) {
			return _array
		}

		let properties = this.getPropertiesCompare( _filter )

		return _array.filter( _flow => {
			return this.searchProperties( _flow, properties )
		})
	}



	private searchProperties ( _obj: object, _properties: Array<any> ): boolean {
		return !(_properties.find( _property => {
			let value = this.climbProperties(_obj, _property.key.split('.'))
			return !( value && value.toLowerCase().match( _property.value.toLowerCase() ) )
		}))
	}




	private climbProperties ( _obj: object, _properties: Array<string> ): any {
		let temProperty = _obj

		_properties.find( _property => {
			if ( temProperty.hasOwnProperty( _property ) ){
				temProperty = temProperty[ _property ]
			}
			else {
				temProperty =  null
				return true
			}
		})

		return temProperty
	}



	private getPropertiesCompare ( _filter: object ): Array<string> {
		let properties = []

		for (let filter in _filter) {
			properties.push({
				key: filter,
				value: _filter[ filter ]
			})
		}

		return properties
	}

}
