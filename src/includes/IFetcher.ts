export interface IHeader {
  "Content-Type": string;
  TOKEN: string;
  [propName: string]: any;
}

export interface IRequestOptions {
  method?: string;
  headers?: IHeader;
  body?: any;
}

export interface IMessage {
  msg: {};
  status: number;
}

export interface ILoginForm {
  id: string;
  psw: string;
  captcha: string;
  wait_number: string;
}

export interface IRegisterForm {
  name: string;
  psw: string;
  captcha: string;
  wait_number: string;
}
