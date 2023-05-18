import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from "./components/components.module";
import { IsdevPipe } from './pipes/isdev.pipe';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    NgxSkeletonLoaderModule
  ],
  providers: [HttpClientModule, IsdevPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
