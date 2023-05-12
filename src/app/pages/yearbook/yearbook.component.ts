import { Component } from '@angular/core';

@Component({
  selector: 'app-yearbook',
  templateUrl: './yearbook.component.html',
  styleUrls: ['./yearbook.component.scss']
})
export class YearbookComponent {
  students = [
    {
      name: 'Lucas Vieira da Silva',
      img: 'https://avatars.githubusercontent.com/u/79713436?v=4.png'
    },
  ]
}
