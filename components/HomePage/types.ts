import { IImage } from '../shared/types';

export type PathCourseItem = {
  title: string;
  description: string;
  image: IImage;
  order: number;
  buttonText: string;
  buttonURL: string;
};

export type Pathway = {
  order: number;
  title: string;
  description: string;
  image: IImage;
  path_course_items: PathCourseItem[];
};

export enum Icon {
  Chalkboard = 'chalkboard',
  Star = 'star',
  Cash = 'cash',
}

export type HowWeWorkBox = {
  title: string;
  description: string;
  icon: Icon;
  order: number;
};

export type Testimonial = {
  picture: IImage;
  name: string;
  quote: string;
  order: number;
};
