import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  img = '';

  @Input()
  name = "n/a"

  @Input()
  quote = "Nada..."
}
