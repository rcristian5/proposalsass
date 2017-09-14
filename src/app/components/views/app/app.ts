import { Component } from '@angular/core'
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { ConfirmModalComponent } from '../../modals/confirm/confirm'


@Component({
	selector: 'app-root',
	templateUrl: './app.pug',
	styleUrls: ['./app.styl']
})



export class AppComponent {
	title = 'app'



	constructor (
		private $modalSrv: NgbModal
	) {}




	login (): void {
		this.$modalSrv
			.open( ConfirmModalComponent, {
				backdrop: true,
				windowClass: 'animation'
			})
			// .componentInstance.name = 'World'
	}


	showModal (): void {
		console.log('show modal')
	}
}
