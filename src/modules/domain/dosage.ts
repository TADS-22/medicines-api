import { IMedicine } from "./medicine";

export interface IDosage {
  _id?: string;
  medicine: IMedicine | string;
  date: Date;
}

export enum DosageType {
  PILLS = 1,
  ML = 2,
  AMPOLE = 3,
}