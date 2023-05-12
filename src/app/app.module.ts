import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './pages/default/default.component';
import { YearbookComponent } from './pages/yearbook/yearbook.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    YearbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
