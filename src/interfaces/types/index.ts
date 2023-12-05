import { ReactElement, ReactNode } from "react";

export type BenefitType = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
};

export type ClassType = {
  id: number;
  name: string;
  description?: string;
  image: string;
};
