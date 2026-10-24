import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About, AboutFeature } from '../../../../core/models/about.model';
import { ContentService } from '../../../../shared/services/content.service';

@Component({
  selector: 'app-home-about-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-about-preview.html',
  styleUrl: './home-about-preview.scss'
})
export class HomeAboutPreview implements OnInit {

  private content = inject(ContentService);
  data!: About;
  features!: AboutFeature[];

  ngOnInit(): void {
    this.data = this.content.getAbout();
    this.features = this.data?.features;
  }

}