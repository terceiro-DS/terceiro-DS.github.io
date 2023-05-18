import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


//Module routing
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ComponentsModule } from "../components/components.module";
import { DefaultComponent } from "./default/default.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ProjectComponent } from './project/project.component';
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
    ProjectsComponent,
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule,
    NgxSkeletonLoaderModule
  ]
})
export class PagesModule { }
