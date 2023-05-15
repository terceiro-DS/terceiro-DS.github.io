import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { IUserData } from '../interfaces/IUserData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: any = [];
  public allData: any = [];

  constructor(private http: HttpClient) {
  }

  async runGetAll() {
    if (this.allData.length > 0) {
      return;
    }
    this.allData = await this.getAll();
    return;
  }

  setData(data: any) {
    this.data = data;
    return;
  }

  async getDataFromParam(key: string, value: string): Promise<IUserData | void> {
    let temp;
    const promises: any = this.allData.map(async (data: any) => {
      const dataKey = data[key];
      if (dataKey && dataKey.toLowerCase() === value.toLowerCase()) {
        temp = data;
        return data;
      }
    })
    await Promise.all(promises);
    return temp;
  }

  getAll() {
    return this.http
      .get<any>('../../../assets/content.json')
      .toPromise()
      .then((res: any) => res.data)
      .then((data: any) => {
        if (this.allData.length == 0) {
          this.allData = data;
        }
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
