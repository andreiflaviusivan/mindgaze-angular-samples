import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user: string, password: string): Observable<boolean> {
    if (user == 'test' && password == 'test') {
      return of(true)
    } else {
      return of(false)
    }
  }
}
