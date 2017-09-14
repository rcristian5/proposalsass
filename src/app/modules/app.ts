import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


import { AppComponent } from '../components/views/app/app'
import { SearchComponent } from '../components/elements/search/search'
import { LoaderComponent } from '../components/elements/loader/loader'
import { ConfirmModalComponent } from '../components/modals/confirm/confirm'
import { AppRoutingModule } from './app-routing'



@NgModule({
	declarations: [
		AppComponent,
		SearchComponent,
		ConfirmModalComponent,
		LoaderComponent,
	],
	entryComponents: [
		ConfirmModalComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		NgbModule.forRoot(),
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})



export class AppModule { }
