# Componente `Dropdowm`

### Atributos


> `mark` -boolean- : Define si deseas agregar un icono (triangulo) al elemento, caracteristico del dropdowm. (opcional)


> `position` -string- : Define la posicion dobre la que saldra las opciones del select, las opcipnes disponibles son: "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-top", "left-bottom", "right", "right-top", "right-bottom". (opcional).


### Uso

El uso del dropdowm tiene plantillas embebidas para su mejor adaptacion.

Consta de dos slot `slot-toggle` y `slot-options`.

Usa `slot-toggle` para colodar dentro el template como boton para desplegar las opciones.

Usa `slot-options` para colocar el template de las opciones, todos los elementos hijos deben llevar la `class="item"`, para colocarle los estilos correctos.


```html

<dropdown position="bottom-right">

	<div class="slot-toggle">
		<i class="material-icons">more_vert</i>
	</div>

	<div class="slot-options">
		<div (click)="view()" class="item">
			<i class="material-icons">remove_red_eye</i>
			<span>Ver</span>
		</div>

		<div class="item">
			<i class="material-icons">create</i>
			<span>Editar</span>
		</div>

		<div class="item">
			<i class="material-icons">delete</i>
			<span>Eliminar</span>
		</div>
	</div>

</dropdown>

```