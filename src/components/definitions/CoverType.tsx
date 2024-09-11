import { Company } from './Company';
export interface CoverType {
  Desc: string;
  CriticalWarnings: string[];
  Company: Company[];
}
