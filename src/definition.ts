export interface ISignupForm {
  fname: string;
  lname: string;
  email: string;
  mobile: string;
  password: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface MutationResponse {
  status: "success" | "error";
  message: string;
  metadata?: object;
}

export interface ISessionPayload{
  sub: string;
  email: string;
  image: string;
}
