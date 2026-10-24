export interface Software {
  name: string;
  logo: string;
}
export interface SoftwareSection {
  title: string;
  heading:string;
  description: string;
  buttonText: string;
  softwares: Software[];
}