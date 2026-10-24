import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../shared/services/content.service';
import { Project, Projects } from '../../../../core/models/project.model';


@Component({
  selector: 'app-home-projects-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-projects-preview.html',
  styleUrl: './home-projects-preview.scss'
})
export class HomeProjectsPreview implements OnInit {

  private content = inject(ContentService);

  selectedProject = 0;

  data!: Project;

  projects: Projects[] = [];

  
  ngOnInit(): void {
    this.data = this.content.getProject();
    this.projects = this.data?.projects;
  }


  select(index: number): void {

    this.selectedProject = index;

  }

}