import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { IUserData } from '../interfaces/IUserData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: IUserData[] = [];
  public viewData: IUserData;

  public initialized: boolean = false;

  constructor(private http: HttpClient) {
    this.initialize();
  }

  async initialize() {
    this.setData(await this.getAllFromJSON())
  }

  // PARAM SEARCH UTIL
  async getDataFromParam(key: string, value: string): Promise<IUserData | void> {
    const cachedData = await this.getData();
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

  // JSON UTIL
  async getAllFromJSON() {
    return await this.http
      .get<any>('../../../assets/content.json')
      .toPromise()
      .then((res: any) => res.data)
      .then((data: any) => {
        return data;
      });
  }

  // GETTERS AND SETTERS
  setData(data: IUserData[]): void {
    this.initialized = true;
    this.data = data;
  }

  async getData(): Promise<any> {
    if (!this.initialized) {
      await this.initialize();
    }
    return this.data;
  }

  removeData(): void {
    this.data = null;
  }

  // VIEW GETTERS AND SETTERS
  setViewData(viewData: IUserData): void {
    this.viewData = viewData;
  }

  getViewData(): IUserData {
    return this.viewData;
  }

  removeViewData(): void {
    this.viewData = null;
  }
}
