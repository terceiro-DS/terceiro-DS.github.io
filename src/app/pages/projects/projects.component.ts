import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProjectData } from 'src/app/interfaces/IProjectData';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: IProjectData[] = []

  constructor(private projectsService: ProjectsService, private route: Router) { }

  showInfoModal(project: IProjectData) {
    this.projectsService.setViewProject(project);
    this.route.navigate(['projeto', project.title.toLowerCase()]);
  }

  async ngOnInit() {
    this.projects = await this.projectsService.getProjects()
  }
}
