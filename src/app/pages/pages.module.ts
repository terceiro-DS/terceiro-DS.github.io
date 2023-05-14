import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Module routing
import { RoutingModule } from './routing.module';
import {ComponentsModule} from "../components/components.module";
import {DefaultComponent} from "./default/default.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {UserComponent} from "./user/user.component";
import {YearbookComponent} from "./yearbook/yearbook.component";


@NgModule({
  declarations: [
    DefaultComponent,
    GalleryComponent,
    UserComponent,
    YearbookComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
