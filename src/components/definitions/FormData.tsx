export interface FormData {
  name: string;
  email: string;
  phone: string;
  dob: string;
  sex: string;
  smoker: string;
  lifeCoverAmount: number | null;
  lifeOnly: 'Y' | 'N';
  seriousIllness: 'Y' | 'N';
  sicAccelerated: 'Y' | 'N';
  sicAmount: number | null;
  term: number | null;
  typeOfCover:string;
}
