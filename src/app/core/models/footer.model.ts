export interface FooterQuickLink {
  displayName: string;
  link: string;
}

export interface FooterContact {
  location: string;
  email: string;
  phone: string;
  workingHours: string;
}

export interface FooterContent {
  description: string;
  linkedIn: string;
  facebook: string;
  instagram: string;
  twitter: string;
  quickLinks: FooterQuickLink[];
  contact: FooterContact;
}