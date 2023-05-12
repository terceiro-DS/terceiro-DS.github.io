import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isContentHidden = true;

  toggleContent() {
    this.isContentHidden = !this.isContentHidden;
  }


}
