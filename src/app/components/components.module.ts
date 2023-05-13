import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent,
    ModalComponent
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
