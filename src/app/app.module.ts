import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CursorBallComponent } from './components/cursor-ball/cursor-ball.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DefaultComponent } from './pages/default/default.component';
import { UserComponent } from './pages/user/user.component';
import { YearbookComponent } from './pages/yearbook/yearbook.component';
import { GalleryComponent } from './pages/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    YearbookComponent,
    CardComponent,
    LoadingComponent,
    CursorBallComponent,
    ToolbarComponent,
    UserComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
