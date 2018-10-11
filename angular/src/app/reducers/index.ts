import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { LoginActions, LoginActionTypes, LoginResult } from '../login-action.actions';

export interface LoginState {
  loginAttempted: boolean;
  loginSuccess: boolean;
}

export interface State {
  loginState: LoginState;
}

export const initialState: LoginState = {
  loginAttempted: false,
  loginSuccess: false,
}

export function reducer(state = initialState, action: LoginActions): LoginState {
  switch (action.type) {
    case LoginActionTypes.AttemptLogin:
      return state;
    case LoginActionTypes.LoginResult:
      const result = action as LoginResult;
      return {
          ...state,
          loginAttempted: true,
          loginSuccess: result.success
      }
    case LoginActionTypes.ClearResult:
      return {
          ...state,
          loginAttempted: false,
          loginSuccess: false,
      }
    default: {
        return state;
    }
  }
}

export const reducers: ActionReducerMap<State> = {
  loginState: reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectMainState = createFeatureSelector<State>('login');
export const selectLoginState = createSelector(selectMainState, (state: State) => state.loginState);
export const selectLoginAttemptedState = createSelector(selectLoginState, (state: LoginState) => state.loginAttempted);
export const selectLoginSuccessState = createSelector(selectLoginState, (state: LoginState) => state.loginSuccess);