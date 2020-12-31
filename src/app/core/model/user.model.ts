interface EmailDetail {
  email: string,
  is_verified?: boolean,
  token: string
}
export interface User {
  name: string;
  email: string;
  email_detail?: EmailDetail
  password?: string;
  gender: string;
}
