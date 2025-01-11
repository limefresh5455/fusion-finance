export interface Person1 {
  gender: string;
  dob: string;
  smoker: string;
}

 
export interface FormData {
  name: string;
  lastName:string;
  email: string;
  phone: string;
  dob: string;
  sex: string;
  smoker: string;
  lifeCoverAmount: number | null;
  mortgageCoverAmount: number | null;
  lifeOnly: 'Y' | 'N';
  seriousIllness: 'Y' | 'N';
  sicAccelerated: 'Y' | 'N';
  sicAmount: number | null;
  term: number | null;
  typeOfCover:string;
  person1: Person1;
}
