import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserData } from 'src/app/interfaces/IUserData';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  default: any = {
    name: 'Carregando...',
    nickname: 'Carregando...',
    img: null,
    quote: 'Carregando...',
    descricao: 'Carregando...',
    github: 'Carregando...',
    instagram: 'Carregando...',
    linkedin: 'Carregando...',
    tccId: 'Carregando...'
  };
  userData: any = this.default;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  async getUserDataFromParam(nickname: string): Promise<IUserData | void> {
    console.log('attempting to get from nickname: ' + nickname);
    return await this.dataService.runGetAll().then(async () => {
      this.userData = await this.dataService.getDataFromParam('nickname', nickname)
    });
  }

  checkFromUserNameIfNotExists() {
    const nickname = this.route.snapshot.paramMap.get('nickname');
    if (nickname) {
      this.getUserDataFromParam(nickname);
    }
  }

  loadUser() {
    let userData = this.dataService.getData();
    this.userData = userData;
    this.checkFromUserNameIfNotExists()
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.loadUser();
    });
  }

}
