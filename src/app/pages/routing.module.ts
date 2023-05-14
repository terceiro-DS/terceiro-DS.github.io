import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YearbookComponent} from "./yearbook/yearbook.component";
import {UserComponent} from "./user/user.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {DefaultComponent} from "./default/default.component";

//Components


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'alunos',
    component: YearbookComponent,
  },
  {
    path: 'user/:nickname',
    component: UserComponent,
  },
  {
    path: 'galeria',
    component: GalleryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
