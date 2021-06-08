import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';
import { BehaviorSubject, Observable,of } from 'rxjs';
import 'rxjs/add/operator/do';
import {tap} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
  };

  public loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus())


  constructor(private http: HttpClient) {
   }

  checkLoginStatus():boolean{
    return false;
  }

  get isLoggedIn(){
    return this.loginStatus.asObservable();
  }


}
