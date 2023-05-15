import { Component, ElementRef, ViewChild, ChangeDetectorRef  } from '@angular/core';

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

  constructor(private cdr: ChangeDetectorRef) {}

  floor(num: number): number {
    return Math.floor(num);
  }

  getImageStyle(i: number) {
    const imgWidth = 400; // Largura máxima da imagem
    const imgHeight = [250, 300, 350, 450, 500, 550, 600, 650, 700, 750, 800, 850]; // Alturas possíveis da imagem
    const img = new Image();
    img.src = `../../../assets/photos/foto${i}.jpeg`;
    const aspectRatio = img.naturalWidth / img.naturalHeight; // Proporção da imagem
    const height = aspectRatio >= 1 ? imgWidth / aspectRatio : imgHeight[Math.floor(Math.random() * imgHeight.length)];
    // Definir a altura com base na proporção da imagem
    return { 'width': imgWidth + 'px', 'height': height + 'px', 'object-fit': 'fill' };
  }



}
