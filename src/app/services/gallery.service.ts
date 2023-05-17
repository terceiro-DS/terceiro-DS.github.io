import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMediaData } from '../interfaces/IMediaData';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  public videos: IMediaData[] = [];
  public photos: IMediaData[] = [];

  public viewMedia: IMediaData;

  public initialized: boolean = false;

  constructor(private http: HttpClient) {
    this.initialize();
  }

  async initialize() {
    if (this.initialized) {
      return;
    }
    const videos = await this.getAllFromJSON('videos');
    const photos = await this.getAllFromJSON('photos');
    this.setGallery('videos', videos);
    this.setGallery('photos', photos);
    this.initialized = true;
  }

  async getAllFromJSON(key: string): Promise<any> {
    return await this.http
      .get<any>('../../../assets/photos-videos.json')
      .toPromise()
      .then((res: any) => res[key])
      .then((data: any) => {
        return data
      });
  }

  // PARAM SEARCH UTIL
  async getGalleryDataFromParam(type: string, key: string, value: string): Promise<IMediaData | void> {
    const cachedData = await this.getGallery(type);
    let cachedDataFromParam;
    const promises: any = cachedData.map(async (parsedData: any) => {
      const parsedDataKey = parsedData[key];
      if (parsedDataKey && parsedDataKey.toLowerCase() === value.toLowerCase()) {
        cachedDataFromParam = parsedData;
        return parsedData;
      }
    })
    await Promise.all(promises);
    return cachedDataFromParam;
  }

  // GETTERS AND SETTERS
  setGallery(id: string, projects: IMediaData[]): void {
    this.initialized = true;
    if (id === 'videos') {
      this.videos = projects;
    } else if (id === 'photos') {
      this.photos = projects;
    }
  }

  async getGallery(id: string): Promise<any> {
    if (!this.initialized) {
      await this.initialize();
    }
    return id === 'videos' ? this.videos : this.photos;
  }

  removeGallery(id: string): void {
    if (id === 'videos') {
      this.videos = null;
    } else if (id === 'photos') {
      this.photos = null;
    }
  }

  async getGalleryFromId(src: string, type: string): Promise<IMediaData | void> {
    let cachedMedia: IMediaData;
    const toIndex = type === 'videos' ? this.videos : this.photos;
    const promises: any = toIndex.map(async (media: IMediaData) => {
      if (media.src === src) {
        cachedMedia = media;
      }
    });
    await Promise.all(promises);
    return cachedMedia;
  }

  // VIEW GETTERS AND SETTERS
  setViewMedia(viewMedia: IMediaData): void {
    this.viewMedia = viewMedia;
  }

  getViewMedia(): IMediaData {
    return this.viewMedia;
  }

  removeViewMedia(): void {
    this.viewMedia = null;
  }
}
