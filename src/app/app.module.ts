import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMadLibComponent } from './create-mad-lib/create-mad-lib.component';
import { ViewMadLibsComponent } from './view-mad-libs/view-mad-libs.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMadLibComponent,
    ViewMadLibsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
