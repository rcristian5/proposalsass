import { Component, ViewContainerRef } from '@angular/core'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'



@Component({
	selector: 'forms',
	templateUrl: './form.pug',
	styleUrls: [ './form.styl' ]
})



export class FormComponent {

	user: any = {}
	types: Array<object> = [
		{ label: 'Masculino' },
		{ label: 'Femenino' }
	]



	constructor(
		private $toastr: ToastsManager,
		private $viewContainerRef: ViewContainerRef
	) {
		this.$toastr.setRootViewContainerRef($viewContainerRef);
	}


	saveData (): void {

		this.$toastr.warning('Debes llenar todos los datos del formulario', 'Formulario', {
			toastLife: 5000,
			newestOnTop: true,
			positionClass: 'toast-bottom-center',
			showCloseButton: true,
			animate: 'flyLeft'
		})
	}

}