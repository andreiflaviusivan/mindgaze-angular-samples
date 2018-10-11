import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLoginAttemptedState, selectLoginSuccessState } from '../reducers';
import { AttemptLogin, ClearResult } from '../login-action.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginAttempted: Observable<boolean>;
  loginSuccess: Observable<boolean>;

  // username: string = '';
  // password: string = '';

  constructor(public store: Store<any>) { 
    this.loginAttempted = store.select(selectLoginAttemptedState)
    this.loginSuccess = store.select(selectLoginSuccessState)
  }

  ngOnInit() {
  }

  loginClick(username, password) {
    this.store.dispatch(new AttemptLogin(username, password));
  }

  loginClear() {
    this.store.dispatch(new ClearResult());
  }
}
