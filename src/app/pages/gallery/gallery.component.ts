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

  driveUrl: string = 'https://drive.google.com/uc?id=';

  showLoadMoreButton = true;

  startIndex = 0;
  endIndex = 10;

  img: any;

  range(start: number, end: number) {
    const number = [];
    for (let i = start; i <= end; i++) {
      number.push(i);
    }
    return number;
  }

  constructor(private cdr: ChangeDetectorRef, private galleryService: GalleryService) { }

  floor(num: number): number {
    return Math.floor(num);
  }

  closeModal() {
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
      this.endIndex = this.startIndex + 7;
      setTimeout(() => {
        this.loadingAnimation = false;
      }, 1000)
    }
  }

  getAdditionalImages(startIndex: number, endIndex: number) {
    return this.photos.slice(startIndex, endIndex + 1);
  }
}
