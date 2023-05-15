import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Daily Manage',
      description: 'Sistema de Gerenciamento de Formulários Dinâmicos.'
    },
    {
      title: 'Skuld',
      description: 'Sistema de Cronogramas.'
    },
  ]
}
