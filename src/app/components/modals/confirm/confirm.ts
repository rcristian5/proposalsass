import { Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
	selector: 'modalconfirm',
	templateUrl: './confirm.pug',
	styleUrls: [ './confirm.styl' ]
})



export class ConfirmModalComponent {
	showLoader: boolean = false



	constructor(
		private $activeModal: NgbActiveModal
	) {}


	login (): void {
		this.showLoader = true
		setTimeout( () => {
			this.$activeModal.close()
		}, 3000)
	}



	cancel (): void {
		this.$activeModal.dismiss()
	}
}
