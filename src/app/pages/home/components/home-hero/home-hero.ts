import {
  Component,
  OnInit,
  OnDestroy,
  inject
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';
import { HeroSlides } from '../../../../core/models/hero.model';
import { ContentService } from '../../../../shared/services/content.service';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss'
})
export class HomeHero implements OnInit, OnDestroy {

  private timer: number | null = null;

  currentIndex = 0;

  heroSlides: HeroSlides[] = [];

  private content = inject(ContentService);

  ngOnInit(): void {

    this.heroSlides = this.content.getHero().slides;

    this.timer = window.setInterval(() => {
      this.next();
    }, 5000);

  }

  ngOnDestroy(): void {

    if (this.timer !== null) {
      clearInterval(this.timer);
    }

  }

  next(): void {

    this.currentIndex =
      (this.currentIndex + 1) % this.heroSlides.length;

  }

  previous(): void {

    this.currentIndex =
      (this.currentIndex - 1 + this.heroSlides.length) %
      this.heroSlides.length;

  }

  goTo(index: number): void {

    this.currentIndex = index;

  }

  goToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

}