import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoadingComponent } from './loading/loading.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    CardComponent,
    ToolbarComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
