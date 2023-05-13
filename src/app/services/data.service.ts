import { Injectable } from '@angular/core';
import { IUserData } from '../interfaces/IUserData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data?: IUserData | null;

  setData(data: any): boolean {
    this.data = data;
    return data != null;
  }

  getData(): any {
    return this.data;
  }

  removeData(): void {
    this.data = null;
  }
}
