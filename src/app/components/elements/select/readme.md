# Componente `Select`

### Atributos

> `options` -array- : Define las opciones que se mostraran en el select, cada elemento del array debe tener una propiedad `label` que es el texto que se mostrara en las opciones.


> `mark` -boolean- : Define si deseas agregar un icono (triangulo) al elemento, caracteristico del select. (opcional)


> `position` -string- : Define la posicion dobre la que saldra las opciones del select, las opcipnes disponibles son: "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-top", "left-bottom", "right", "right-top", "right-bottom". (opcional)


> `placeholder` -string- : Define el texto a mostrar sin tener una opcion seleccionada. (opcional).


> `onChange` -event- : Es un evento que se ejecutara al seleccionar una opcion y pasara como argumento todo el objeto de la opcion seleccionada. (opcional)


### Uso

```javascript

options: Array<object> = [
	{ label: 'Masculino', name: 'hey name', id: 'hey id' },
	{ label: 'Femenino' }
]

changeSelect ( __option ): void {
	console.log( _option )
}

```


```html

<selects placeholder="Tipo", [mark]="true", [options]="options", (onChange)="changeSelect($event)"></selects>

```