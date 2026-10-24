export interface Projects {
  id: number;
  shortTitle: string;
  title: string;
  image: string;
  location: string;
  client: string;
  area: string;
  description: string;
  highlights: string[];
}

export interface Project {
  title: string;
  heading: string;
  description: string;
  projects: Projects[];
}