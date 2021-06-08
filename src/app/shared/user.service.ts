import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Observable,of } from 'rxjs';
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

  // val!:any;
  isLoggedIn  = false;

  constructor(private http: HttpClient) { }

}
