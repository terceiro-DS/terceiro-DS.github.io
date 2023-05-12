import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    ToolbarComponent
  ]
})
export class ComponentsModule { }
