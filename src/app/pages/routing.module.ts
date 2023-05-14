import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from "./default/default.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { UserComponent } from "./user/user.component";
import { YearbookComponent } from "./yearbook/yearbook.component";

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
    path: 'aluno/:nickname',
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
export class RoutingModule { }
