import { Injectable } from '@angular/core';
import { IUserData } from '../interfaces/IUserData';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: any = [];
  public allData: any = [];

  constructor(private http: HttpClient) {
  }

  async runGetAll() {
    this.allData = await this.getAll();
    return;
  }

  setData(data: any) {
    this.data = data;
    return;
  }
  async getDataFromParam(key: string, value: string): Promise<IUserData | void> {
    return await this.allData.forEach((data: any) => {
      const dataKey = data[key];
      if (dataKey && dataKey.toLowerCase() === value.toLowerCase()) {
        console.log(data);
        return data;
      }
    })
  }

  getAll() {
    return this.http
      .get<any>('../../../assets/content.json')
      .toPromise()
      .then((res: any) => res.data)
      .then((data: any) => {
        return data;
      });
  }

  getData(): any {
    return this.data;
  }

  removeData(): void {
    this.data = null;
  }
}
