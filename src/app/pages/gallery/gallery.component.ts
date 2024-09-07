import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IMediaData } from 'src/app/interfaces/IMediaData';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photos: IMediaData[] = []
  videos: IMediaData[] = []

  images: IMediaData[] = []

  loadingAnimation: boolean = false;

  currentPhoto: any;

  driveUrl: string = 'https://lh3.google.com/u/0/d/';

  showLoadMoreButton = true;

  startIndex = 0;
  endIndex = 15;

  img: any;

  constructor(private cdr: ChangeDetectorRef, private galleryService: GalleryService) { }

  range(start: number, end: number) {
    const number = [];
    for (let i = start; i <= end; i++) {
      number.push(i);
    }
    return number;
  }

  checkSize(event: any) {
    const target = event.target;
    document.body.style.overflowY = 'hidden';
    document.body.style.height = '100%';
    document.body.style.minHeight = '100%';
    if (window.matchMedia("(max-width: 767px)").matches) {
      target.style.maxWidth = '85vw';
      return;
    }
    const x = target.width;
    const y = target.height;
    let scale = 1;
    if (y >= 700 && y < 800) {
      target.style.maxWidth = '40vw';
    }
    else if (y >= 800 && y < 1000) {
      target.style.maxWidth = '30vw';
    }
    else if (y >= 1000) {
      target.style.maxWidth = '20vw';
    } else if (x <= 416 && y <= 312) {
      scale = 1.2
      target.style.width = `${x * scale}px`;
      target.style.height = `${y * scale}px`;
      target.style.maxWidth = `50vw`;
    }
  }

  floor(num: number): number {
    return Math.floor(num);
  }

  closeModal() {
    document.body.style.overflowY = 'visible';
    document.body.style.height = 'fit-content';
    document.body.style.minHeight = '100vh';
    this.currentPhoto = null;
  }

  showModal(photoData: any) {
    this.currentPhoto = photoData;
  }

  onZoom(e: any) {
    if (!this.img) {
      return;
    }
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    console.log(x, y)
    this.img.style.transformOrigin = `${x}px ${y}px`;
    this.img.style.transform = "scale(2.5)";
  }

  offZoom() {
    if (!this.img) {
      return;
    }
    this.img.style.transformOrigin = `center center`;
    this.img.style.transform = "scale(1)";
  }

  loadCursorZoom() {
    this.img = document.getElementById("modal-img");
  }

  async ngOnInit() {
    this.photos = await this.galleryService.getGallery('photos');
    this.videos = await this.galleryService.getGallery('videos');
    this.loadCursorZoom();
    this.loadMoreImages();
  }

  loadMoreImages() {
    this.loadingAnimation = true;
    const additionalImages = this.getAdditionalImages(this.startIndex, this.endIndex);
    this.showLoadMoreButton = additionalImages.length > 0;
    if (additionalImages.length > 0) {
      this.images = this.images.concat(additionalImages);
      this.startIndex = this.endIndex + 1;
      this.endIndex = this.startIndex + 15;
      setTimeout(() => {
        this.loadingAnimation = false;
      }, 1000)
    }
  }

  getAdditionalImages(startIndex: number, endIndex: number) {
    return this.photos.slice(startIndex, endIndex + 1);
  }
}
