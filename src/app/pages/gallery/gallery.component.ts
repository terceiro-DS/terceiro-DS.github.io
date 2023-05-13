import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  imagens = [
    { url: 'imagem1.jpg', width: 0, height: 0 },
    { url: 'imagem2.jpg', width: 0, height: 0 },
    { url: 'imagem3.jpg', width: 0, height: 0 },
    // adicione quantas imagens quiser
  ];

  @ViewChild('fotos')
  fotos!: ElementRef;

  ngAfterViewInit() {
    // obtém o tamanho da div pai
    const divPaiWidth = this.fotos.nativeElement.offsetWidth;
    const divPaiHeight = this.fotos.nativeElement.offsetHeight;

    // define um tamanho aleatório para cada imagem
    this.imagens.forEach(imagem => {
      const width = Math.floor(Math.random() * divPaiWidth) + 1;
      const height = Math.floor(Math.random() * divPaiHeight) + 1;
      imagem.width = width;
      imagem.height = height;
    });
  }
}
