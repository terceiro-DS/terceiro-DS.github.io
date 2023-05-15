import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  range(start: number, end: number) {
    const number = [];
    for (let i = start; i <= end; i++) {
      number.push(i);
    }
    return number;
  }

  @ViewChild('fotos')
  fotos!: ElementRef;

  ngAfterViewInit() {

  }
}
