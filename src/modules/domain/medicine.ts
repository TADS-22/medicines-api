import { IDoctor } from "./doctor";
import { DosageType } from "./dosage";

export interface IMedicine {
  _id?: string;
  name: string;
  dosage: number;
  dosageType: DosageType;
  doctor: IDoctor | string;
  interval: number;
  user: string;
}
