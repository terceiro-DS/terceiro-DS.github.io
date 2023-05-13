import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/interfaces/IUserData';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-yearbook',
  templateUrl: './yearbook.component.html',
  styleUrls: ['./yearbook.component.scss']
})
export class YearbookComponent implements OnInit {
  students: IUserData[] | any = []

  constructor(private dataService: DataService, private route: Router, private http: HttpClient) { }

  async getAll() {
    return this.http
      .get<any>('../../../assets/content.json')
      .toPromise()
      .then((res: any) => res.data)
      .then((data: any) => {
        return data;
      });
  }

  async ngOnInit() {
    this.students = await this.getAll();
    this.students.sort((a: IUserData, b: IUserData) => a.name.localeCompare(b.name));
  }

  showInfoModal(userData: IUserData) {
    console.log(userData);
    this.dataService.setData(userData);
    this.route.navigateByUrl('/aluno');
  }
}
