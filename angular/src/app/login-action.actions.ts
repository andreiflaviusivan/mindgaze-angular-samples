import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  AttemptLogin = '[LoginAction] AttemptLogin',
  LoginResult = '[LoginAction] LoginResult',
  ClearResult = '[LoginAction] ClearResult',
}

export class AttemptLogin implements Action {
  readonly type = LoginActionTypes.AttemptLogin;
  constructor(public username: string, public password: string) {
  }
}

export class LoginResult implements Action {
  readonly type = LoginActionTypes.LoginResult;
  constructor(public success: boolean) {
  }
}

export class ClearResult implements Action {
  readonly type = LoginActionTypes.ClearResult;
}

export type LoginActions = AttemptLogin | LoginResult | ClearResult;
