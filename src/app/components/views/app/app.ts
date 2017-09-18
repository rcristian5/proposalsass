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
	arrarListApp = [
		{ name: 'Cristian', lastname: 'Ramirez', live: true},
		{ name: 'Antoni', lastname: 'Shilon'}
	]

	exampleContext = {
		$implicit: 'default context property when none specified',
		aContextProperty: 'a context property'
	};



	constructor (
		private $modalSrv: NgbModal
	) {}




	login (): void {
		this.$modalSrv
			.open( ConfirmModalComponent, {
				backdrop: true,
				windowClass: 'animation'
			})
	}

	onFilter ( _arrayfilted ): void {
		console.log( 'lista filtrada' )
		console.log(_arrayfilted)
	}


	showModal (): void {
		console.log('show modal')
	}


	greet (): void {
		console.log('hello from  app')
	}
}
