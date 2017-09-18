# Componente `Radio`

### Atributos


> `label` -string- : Define el texto que se mostrara para el radio.


> `checked` -boolean- : Define el estado del radio.



### Uso


```html

<radio label="Hombre", [checked]="radio === 1" ,(click)="radio = 1" ></radio>

<radio label="Mujer", [checked]="radio === 2" ,(click)="radio = 2" ></radio>

```