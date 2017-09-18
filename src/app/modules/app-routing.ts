import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastModule } from 'ng2-toastr/ng2-toastr'

import { FormComponent } from '../components/views/form/form'
import { DashboardComponent } from '../components/views/dashboard/dashboard'
import { TableComponent } from '../components/views/table/table'
import { DropdownComponent } from '../components/elements/dropdown/dropdown'
import { SelectComponent } from '../components/elements/select/select'
import { CheckboxComponent } from '../components/elements/checkbox/checkbox'
import { RadioComponent } from '../components/elements/radio/radio'
import { FilterPipe } from '../pipes/filter'

const appRoutes: Routes = [
	{ path: 'form', component: FormComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'table', component: TableComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	// { path: '**', component: PageNotFoundComponent }
]



@NgModule({
	declarations: [
		FormComponent,
		DashboardComponent,
		TableComponent,
		SelectComponent,
		DropdownComponent,
		CheckboxComponent,
		RadioComponent,
		FilterPipe
	],
	imports: [
		FormsModule,
		CommonModule,
		BrowserAnimationsModule,
		ToastModule.forRoot(),
		RouterModule.forRoot( appRoutes ),
		NgbModule,
	],
	exports: [
		RouterModule,
		SelectComponent,
		CheckboxComponent,
		RadioComponent,
		FilterPipe
	]
})



export class AppRoutingModule { }