import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { UserComponent } from './pages/user/user.component';
import { YearbookComponent } from './pages/yearbook/yearbook.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'alunos', component: YearbookComponent },
  { path: 'aluno', component: UserComponent },
  { path: 'galeria', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
