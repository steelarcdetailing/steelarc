import {
  Injectable,
  inject,
  signal
} from '@angular/core';

import {
  DOCUMENT,
  isPlatformBrowser
} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private readonly document = inject(DOCUMENT);

  readonly isScrolled = signal(false);

  readonly activeSection = signal('home');

  private readonly headerOffset = 90;

  updateScrollState(): void {

    this.isScrolled.set(window.scrollY > 40);

    this.updateActiveSection();

  }

  scrollTo(id: string): void {

    const element = this.document.getElementById(id);

    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      this.headerOffset;

    window.scrollTo({

      top,

      behavior: 'smooth'

    });

  }

  private updateActiveSection(): void {

    const ids = [
      'home',
      'about',
      'services',
      'projects',
      'contact'
    ];

    const scroll = window.scrollY + 150;

    for (const id of ids) {

      const section = this.document.getElementById(id);

      if (!section) continue;

      const top = section.offsetTop;

      const bottom = top + section.offsetHeight;

      if (scroll >= top && scroll < bottom) {

        this.activeSection.set(id);

        break;

      }

    }

  }

}