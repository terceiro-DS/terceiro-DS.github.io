import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { IMediaData } from 'src/app/interfaces/IMediaData';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  photos: IMediaData[] = []
  videos: IMediaData[] = []

  currentPhoto: any;

  driveUrl: string = 'https://drive.google.com/uc?id=';

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

  async ngOnInit() {
    this.photos = await this.galleryService.getGallery('photos');
    this.videos = await this.galleryService.getGallery('videos');
  }

}
