export interface Services {
  id: number;
  shortTitle: string;
  title: string;
  image: string;
  description: string;
  points: string[];
}

export interface Service {
  title: string;
  heading: string;
  description: string;
  services: Services[];
}