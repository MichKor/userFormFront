import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserInterface} from '../models/user.interface';
import {environment} from '../../../environments/environment';

enum ENDPOINTS {
  USERS = 'users',
  USER = 'user'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserInterface> {
    return this.http.get<UserInterface>(environment.localhost.url + ENDPOINTS.USERS);
  }

  getUser(id: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(environment.localhost.url + ENDPOINTS.USER + '/' + id);
  }

  create(json: any): Observable<UserInterface> {
    return this.http.post<UserInterface>(environment.localhost.url + ENDPOINTS.USER, json);
  }

  update(id: string, json: any): Observable<UserInterface> {
    return this.http.put<UserInterface>(environment.localhost.url + ENDPOINTS.USER + '/' + id, json);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(environment.localhost.url + ENDPOINTS.USER + '/' + id);
  }
}
