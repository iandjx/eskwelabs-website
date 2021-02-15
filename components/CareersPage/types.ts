import { ApolloError } from '@apollo/client';
import { Dispatch, SetStateAction } from 'react';
import { IImage } from '../shared/types';

export type WhyMentorSection = {
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

export type Applicant = {
  city: string;
  currentEmployer: string;
  email: string;
  fullName: string;
  linkedinProfile: string;
  phoneNumber: string;
  subjectInterest: string;
};

export type CareerApplicantData = {
  success: boolean;
};
export type AlertInput = {
  error: ApolloError | undefined;
  data: CareerApplicantData;
};

export type UseAlert = {
  children: JSX.Element;
  title: string;
  visible: boolean;
  kind: 'SUCCESS' | 'ERROR';
  closeFn: () => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
