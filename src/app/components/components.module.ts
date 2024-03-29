import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from "@angular/router";
import { IsdevPipe } from '../pipes/isdev.pipe';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent,
    LoadingComponent,
    FooterComponent,
    IsdevPipe
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    CardComponent,
    ToolbarComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
