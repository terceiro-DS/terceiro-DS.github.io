import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  spin(event: any) {
    if (event.target.classList.contains("animate-spin")) {
      event.target.classList.remove("animate-spin");
    } else {
      event.target.classList.add("animate-spin");
    }
  }
}
