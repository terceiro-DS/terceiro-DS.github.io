import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


//Module routing
import { ComponentsModule } from "../components/components.module";
import { DefaultComponent } from "./default/default.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ProjectsComponent } from './projects/projects.component';
import { RoutingModule } from './routing.module';
import { UserComponent } from "./user/user.component";
import { YearbookComponent } from "./yearbook/yearbook.component";


@NgModule({
  declarations: [
    DefaultComponent,
    GalleryComponent,
    UserComponent,
    YearbookComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
