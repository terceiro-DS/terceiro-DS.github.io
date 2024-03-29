import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProjectData } from 'src/app/interfaces/IProjectData';
import { IUserData } from 'src/app/interfaces/IUserData';
import { IsdevPipe } from 'src/app/pipes/isdev.pipe';
import { DataService } from 'src/app/services/data.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: []
})
export class UserComponent implements OnInit {

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
  tccData: any;
  imageLoaded: boolean = false;
  device: string = 'Other';

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router, private projectsService: ProjectsService, public isdev: IsdevPipe) { }

  getDevice() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      return 'Mobile';
    }
    return 'Other'
  }

  async tryGetTccData() {
    if (!this.userData) {
      return;
    }
    this.tccData = await this.projectsService.getProjectFromId(this.userData.tccId);
    console.log(this.tccData);
  }

  loadImage() {
    this.imageLoaded = true;
  }

  checkIfIsDev(nickname: string, key: string): boolean {
    return this.isdev.transform(nickname, key);
  }

  async getUserDataFromParam(nickname: string): Promise<IUserData | void> {
    this.userData = await this.dataService.getDataFromParam('nickname', nickname)
    await this.tryGetTccData();
  }

  async loadUser() {
    const cachedUserData = this.dataService.getViewData();
    if (cachedUserData) {
      this.userData = cachedUserData;
      await this.tryGetTccData();
    } else {
      const nickname = this.route.snapshot.paramMap.get('nickname');
      if (nickname) {
        this.getUserDataFromParam(nickname);
      }
    }
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  showInfoModal(project: IProjectData) {
    this.projectsService.setViewProject(project);
    this.router.navigate(['projeto', project.title.toLowerCase()]);
  }

  goToUrl(url: string) {
    window.location.href = url;
  }

  ngOnInit() {
    this.device = this.getDevice();
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.loadUser();
    });
  }

}
