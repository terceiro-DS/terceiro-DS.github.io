import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { YearbookComponent } from './pages/yearbook/yearbook.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'alunos', component: YearbookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
