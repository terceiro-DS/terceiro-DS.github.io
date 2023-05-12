import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yearbook',
  templateUrl: './yearbook.component.html',
  styleUrls: ['./yearbook.component.scss']
})
export class YearbookComponent implements OnInit {
  students = [
    {
      name: 'Luqueta',
      img: '../../../assets/luqueta.jpg',
      quote: 'Cooler Lucas AAAAAAAAAAAAAAA'
    },
    {
      name: 'Vitão',
      img: 'https://avatars.githubusercontent.com/u/79660123?v=4.png',
      quote: 'Comi o do lado'
    },
    {
      name: 'João Eriko',
      img: 'https://avatars.githubusercontent.com/u/79710675?v=4',
      quote: 'Ovo'
    },
    {
      name: 'Arthur',
      img: 'https://pps.whatsapp.net/v/t61.24694-24/345732228_1334738210410025_740127326239582076_n.jpg?ccb=11-4&oh=01_AdT5eeJ1SVNGMEICbnFv-kaz9PsVjAFaBOfBAHteRm3O6g&oe=646A7C6B',
      quote: 'Ovo'
    },
    {
      name: 'Pepe',
      img: '../../../assets/photos/foto_pepe.png',
      quote: 'Abacaxi'
    },
    {
      name: 'Marcelinha',
      img: 'https://avatars.githubusercontent.com/u/101807905?v=4',
      quote: 'Firo Firo'
    },
    {
      name: 'Jão',
      img: 'https://avatars.githubusercontent.com/u/89457335?v=4',
      quote: 'Bispo'
    },
  ]

  ngOnInit() {
    this.students.sort((a, b) => a.name.localeCompare(b.name));
  }
}
