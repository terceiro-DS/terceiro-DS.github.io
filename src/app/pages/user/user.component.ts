import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { IUserData } from 'src/app/interfaces/IUserData';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userData?: IUserData | void;
  calls: number = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  async getUserDataFromParam(nickname: string): Promise<IUserData | void> {
    console.log('attempting to get from nickname: ' + nickname);
    return await this.dataService.runGetAll().then(async () => {
      this.userData = await this.dataService.getDataFromParam('nickname', nickname)
      console.log(this.userData);
    });
  }

  ngAfterContentChecked() {
    this.userData = this.dataService.getData();
    if (this.userData && (this.userData.constructor != Array)) return
    const nickname = this.route.snapshot.paramMap.get('nickname');
    if (!nickname) return
    this.calls += 1;
    if (this.calls >= 2) return
    this.getUserDataFromParam(nickname).then((data: any) => {
      if (data) {
        this.userData = data;
        console.log('succesfully get user from route param.')
      }
    });
  }

}
