import { IImage } from '../shared/types';

export type WhatWeDoBox = {
  title: string;
  picture: IImage;
};

export type ValuesSection = {
  title: string;
  description: string;
  order: number;
  picture: IImage;
};
