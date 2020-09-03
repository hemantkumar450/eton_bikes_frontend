export class User {
  id: string;
  name: string;
  password: string;
  email: string;
  gender: string;
  phone_number: string;
  dob: string;
  login_type: 'email';
  token: string;
  is_profile_updated: boolean;
  is_active: boolean;
  otp_expires: string;
}

export class UserKyc {
  workType: string = 'salaried';
  workName: string;
  personalEmail: string;
  workEmail: string;
  ctc: number;
  panNumber: string;
  phone_numer: string;
  hasAcceptedTerms: boolean;
  bankName?: string;
  bankPasword?: string;
}

export class BankDetail {
  code: string;
  displayName: string;
}

export class ProfileStatus {
  kyc: boolean;
  mobile: boolean;
  experion: boolean;
  email: boolean;
  bank_statement: boolean;
  token_amount: boolean;
  security_amount: boolean;
  all_document: boolean;
  contact_support: boolean;
}

export class ScoreCard {
  score: number;
  totalAccounts: number;
  activeAccounts: number;
  closedAccounts: number;
}

export class UploadDocument {
  pan: boolean = false;
  // adhar: boolean = false;
  driving_licence: boolean = false;
  bank_statement: boolean = false;
  form_16: boolean = false;
  salary_slip: false = false;
  itr: false = false;
}
