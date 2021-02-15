import { IImage } from '../shared/types';

export type WhyPartnerSection = {
  title: string;
  description: string;
  order: number;
  image: IImage;
};

export type HiringProcessStepSection = {
  step: number;
  title: string;
  description: string;
};

export type BusinessContact = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  company: string;
  companySize: string;
  jobTitle: string;
  numberOfLearners: number;
  needs: string;
};
