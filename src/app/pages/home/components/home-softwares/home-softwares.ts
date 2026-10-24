import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../shared/services/content.service';
import { Software, SoftwareSection } from '../../../../core/models/softwares.model';

// import { ContentService } from '../../../../core/services/content.service';
// import { Software } from '../../../../core/models/software.model';

@Component({
  selector: 'app-home-softwares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-softwares.html',
  styleUrl: './home-softwares.scss'
})
export class HomeSoftwares {

  private readonly content = inject(ContentService);

  @ViewChild('softwareTrack')
  softwareTrack!: ElementRef<HTMLDivElement>;

  softwares: Software[] = [];

  section!: SoftwareSection;

  constructor() {
    this.section = this.content.getSoftwareSection();
    this.softwares = this.section.softwares;
  }

  scrollLeft(): void {

    this.softwareTrack.nativeElement.scrollBy({
      left: -350,
      behavior: 'smooth'
    });

  }

  scrollRight(): void {

    this.softwareTrack.nativeElement.scrollBy({
      left: 350,
      behavior: 'smooth'
    });

  }

}