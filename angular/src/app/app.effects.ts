import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LoginActions, LoginActionTypes, AttemptLogin, LoginResult } from './login-action.actions';
import { catchError, exhaustMap, map, tap, } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class AppEffects {

  constructor(private actions: Actions, private loginService: LoginService) {}

  @Effect()
    login = this.actions.ofType<AttemptLogin>(LoginActionTypes.AttemptLogin)
        .pipe(
            exhaustMap(auth => 
                this.loginService.login(auth.username, auth.password)
                    .pipe(
                        map(success => new LoginResult(success))
                    )
                )
        )
}
