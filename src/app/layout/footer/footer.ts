import { Component, DOCUMENT, inject, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ContentService } from '../../shared/services/content.service';
import { FooterContact, FooterContent, FooterQuickLink } from '../../core/models/footer.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {

  private content = inject(ContentService);

  data!: FooterContent;

  readonly year = new Date().getFullYear();

  private readonly document = inject(DOCUMENT);
  quickLinks: FooterQuickLink[] = [];
  contact!: FooterContact;

  ngOnInit(): void {
    this.data = this.content.getFooter();
    this.quickLinks = this.data?.quickLinks;
    this.contact = this.data?.contact;
  }

  scrollTo(id: string): void {

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