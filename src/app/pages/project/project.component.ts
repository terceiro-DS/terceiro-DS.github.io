import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProjectData } from 'src/app/interfaces/IProjectData';
import { IUserData } from 'src/app/interfaces/IUserData';
import { DataService } from 'src/app/services/data.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  projectData: any;
  projectCreators: any;

  constructor(private projectsService: ProjectsService, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  async getProjectDataFromParam(title: string): Promise<IProjectData | void> {
    this.projectData = await this.projectsService.getProjectDataFromParam('title', title)
    await this.tryGetCreatorsData();
  }

  async tryGetCreatorsData() {
    if (!this.projectData) {
      return;
    }
    this.projectCreators = await this.dataService.getCreatorsFromId(this.projectData.id);
    this.projectCreators.forEach((data: IUserData) => {
      data.loaded = false;
    });
  }

  loadSpecificUserImage(data: IUserData) {
    data.loaded = true;
  }

  async loadUser() {
    const cachedProjectData = this.projectsService.getViewProject();
    if (cachedProjectData) {
      this.projectData = cachedProjectData;
      await this.tryGetCreatorsData();
    } else {
      const title = this.route.snapshot.paramMap.get('title');
      if (title) {
        this.getProjectDataFromParam(title);
      } else {
        console.error('Title is invalid.')
      }
    }
  }

  showInfoModal(user: IUserData) {
    this.dataService.setViewData(user);
    this.router.navigate(['aluno', user.nickname.toLowerCase()]);
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.loadUser();
    });
  }
}
