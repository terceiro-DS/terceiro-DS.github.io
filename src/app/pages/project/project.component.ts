import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProjectData } from 'src/app/interfaces/IProjectData';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  projectData: any;

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) { }

  async getProjectDataFromParam(title: string): Promise<IProjectData | void> {
    this.projectData = await this.projectsService.getProjectDataFromParam('title', title)
  }

  async loadUser() {
    const cachedProjectData = this.projectsService.getViewProject();
    if (cachedProjectData) {
      this.projectData = cachedProjectData;
    } else {
      const title = this.route.snapshot.paramMap.get('title');
      if (title) {
        this.getProjectDataFromParam(title);
      } else {
        console.error('Title is invalid.')
      }
    }
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.loadUser();
    });
  }
}
