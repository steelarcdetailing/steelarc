import { Component } from '@angular/core';

import { HomeHero } from './components/home-hero/home-hero';
import { HomeAboutPreview } from './components/home-about-preview/home-about-preview';
import { HomeServicesPreview } from './components/home-services-preview/home-services-preview';
import { HomeProjectsPreview } from './components/home-projects-preview/home-projects-preview';
import { HomeCta } from './components/home-cta/home-cta';
import { HomeSoftwares } from './components/home-softwares/home-softwares';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHero,
    HomeServicesPreview,
    HomeProjectsPreview,
    HomeSoftwares,
    HomeAboutPreview,
    HomeCta
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}