import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CatalogComponent }  from './catalog.component';
import { CatalogService } from './catalog.service';

@NgModule({
  declarations: [
    AppComponent,
	CatalogComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	ReactiveFormsModule
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
