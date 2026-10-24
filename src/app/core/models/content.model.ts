import { Hero } from './hero.model';
import { About } from './about.model';
import { Service } from './service.model';
import { Project } from './project.model';
import { Contact } from './contact.model';
import { SoftwareSection } from './softwares.model';
import { FooterContent } from './footer.model';

export interface Content {
  hero: Hero;
  about: About;
  service: Service;
  project: Project;
  softwareSection: SoftwareSection
  contact: Contact;
  footer: FooterContent;
}