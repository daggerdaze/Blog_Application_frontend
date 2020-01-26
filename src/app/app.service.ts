import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  isLoggedIn(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }
  checkLogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }
  AdminLog(){
    const admin = sessionStorage.getItem('Admin');
    return JSON.parse(admin);
  }
  IsAdmin(bool:boolean){
    sessionStorage.setItem('Admin',String(bool));
    return bool;
  }
  getUsers() {
    const token = sessionStorage.getItem('token');
    // const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8800/Users/getUsers';
    return this.httpClient.get(url);
  }
}
