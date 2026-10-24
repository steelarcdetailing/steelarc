import { Injectable } from '@angular/core';

import content from '../../../../public/data/content.json';

import { Content } from '../../core/models/content.model';
import { Hero } from '../../core/models/hero.model';
import { About } from '../../core/models/about.model';
import { Service } from '../../core/models/service.model';
import { Project } from '../../core/models/project.model';
import { Contact } from '../../core/models/contact.model';
import { FooterContent } from '../../core/models/footer.model';
import { SoftwareSection } from '../../core/models/softwares.model';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private readonly data: Content = content;

  getHero(): Hero {
    return this.data.hero;
  }

  getAbout(): About {
    return this.data.about;
  }

  getService(): Service {
    return this.data.service;
  }

  getProject(): Project {
    return this.data.project;
  }

  getContact(): Contact {
    return this.data.contact;
  }

  getFooter(): FooterContent {
    return this.data.footer;
  }

  getSoftwareSection(): SoftwareSection{
    return this.data.softwareSection;
  }

}