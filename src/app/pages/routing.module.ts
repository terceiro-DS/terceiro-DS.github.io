import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from "./gallery/gallery.component";
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserComponent } from "./user/user.component";
import { YearbookComponent } from "./yearbook/yearbook.component";

const routes: Routes = [
  {
    path: '',
    component: YearbookComponent
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
  {
    path: 'projetos',
    component: ProjectsComponent
  },
  {
    path: 'projeto/:title',
    component: ProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
