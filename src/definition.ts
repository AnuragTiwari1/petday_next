export interface ISignupForm {
  fname: string;
  lname: string;
  email: string;
  mobile: string;
  password: string;
}

export interface MutationResponse {
  status: "success" | "error";
  message: string;
}
