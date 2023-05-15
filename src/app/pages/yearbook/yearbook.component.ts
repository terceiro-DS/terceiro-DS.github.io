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

  fillLorem() {
    const template = {
      name: 'Carregando',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEN59-81G1RHdwO1TdxNrQl6D_Kuz_c9diBBAard0rAYG3Ggt-Ln3OBPOFc0LnA7qM_s&usqp=CAU',
      quote: 'Carregando'
    }
    for (let i = 0; i < 40; i++) {
      if (!this.students[i]) {
        this.students.push(template)
      }
    }
  }

  showInfoModal(student: IUserData) {
    this.dataService.setData(student);
    this.route.navigate(['aluno', student.nickname.toLowerCase()]);
  }

  async ngOnInit() {
    this.fillLorem()
    this.students = await this.dataService.getAll();
    this.students.sort((a: IUserData, b: IUserData) => a.name.localeCompare(b.name));
  }

}
