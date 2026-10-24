export interface ContactInfo {
  title: string;
  description: string;
  phone: string;
  email: string;
  location: string;
  workingHours: string;
  linkedIn: string;
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface Contact {
  title: string;
  heading: string;
  description: string;
  contactInfo: ContactInfo;
}