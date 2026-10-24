import {
  Component,
  HostListener,
  inject,
  signal
} from '@angular/core';

import {
  CommonModule,
  DOCUMENT,
  isPlatformBrowser
} from '@angular/common';

interface MenuItem {
  label: string;
  target: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  private readonly document = inject(DOCUMENT);

  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);

  readonly menus: MenuItem[] = [
    { label: 'Home', target: 'home' },
    { label: 'About Us', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact Us', target: 'contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {


    this.isScrolled.set(window.scrollY > 20);

  }

  toggleMenu(): void {

    this.isMenuOpen.update(value => !value);


    this.document.body.style.overflow =
      this.isMenuOpen() ? 'hidden' : '';

  }

  closeMenu(): void {

    this.isMenuOpen.set(false);


    this.document.body.style.overflow = '';

  }

  scrollTo(id: string): void {

    this.closeMenu();


    const section = this.document.getElementById(id);

    if (!section) {
      return;
    }

    const offset = 85;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });

  }

}