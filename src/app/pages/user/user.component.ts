import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/interfaces/IUserData';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userData?: IUserData | null;

  constructor(private dataService: DataService, private router: Router) { }

  ngAfterContentChecked() {
    this.userData = this.dataService.getData();
    console.log(this.userData);
  }
}
