import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjectData } from '../interfaces/IProjectData';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public projects: IProjectData[] = []
  public viewProject: IProjectData;

  public initialized: boolean = false;

  constructor(private http: HttpClient) {
    this.initialize();
  }

  async initialize() {
    this.setProjects(await this.getAllFromJSON())
  }

  async getAllFromJSON(): Promise<any> {
    return await this.http
      .get<any>('../../../assets/projects.json')
      .toPromise()
      .then((res: any) => res.data)
      .then((data: any) => {
        return data;
      });
  }

  // PARAM SEARCH UTIL
  async getProjectDataFromParam(key: string, value: string): Promise<IProjectData | void> {
    const cachedData = await this.getProjects();
    let cachedDataFromParam;
    const promises: any = cachedData.map(async (parsedData: any) => {
      const parsedDataKey = parsedData[key];
      if (parsedDataKey && parsedDataKey.toLowerCase() === value.toLowerCase()) {
        cachedDataFromParam = parsedData;
        return parsedData;
      }
    })
    await Promise.all(promises);
    return cachedDataFromParam;
  }

  // GETTERS AND SETTERS
  setProjects(projects: IProjectData[]): void {
    this.initialized = true;
    this.projects = projects;
  }

  async getProjects(): Promise<any> {
    if (!this.initialized) {
      await this.initialize();
    }
    return this.projects;
  }

  removeProjects(): void {
    this.projects = null;
  }

  // VIEW GETTERS AND SETTERS
  setViewProject(viewProject: IProjectData): void {
    this.viewProject = viewProject;
  }

  getViewProject(): IProjectData {
    return this.viewProject;
  }

  removeViewProject(): void {
    this.viewProject = null;
  }

}
