export interface HeroSlides {

    title: string;

    subtitle: string;

    description: string;

    image: string;

    buttonText: string;

    buttonId: string;
}

export interface Hero {
  slides: HeroSlides[];
}