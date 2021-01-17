import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SharedService {
  //readonly APIUrl = "https://localhost:44369/api";
  readonly APIUrl = '/api';
  //readonly APIUrl = 'https://passmanappservice.azurewebsites.net/api';
  constructor(private http:HttpClient) { }

  getDataList(){
    return this.http.get(this.APIUrl+'/passworddata');
  }

  addData(val:any){
      return this.http.post(this.APIUrl+'/PasswordData',val);
  }

  updateData(val:any){
    return this.http.put(this.APIUrl+'/PasswordData',val);
  }

  deleteData(val:any){
    return this.http.delete(this.APIUrl+'/PasswordData/'+ val);
  }

  getLoginDataList(){
    return this.http.get(this.APIUrl+'/login');
  }

  addLoginData(val:any){
      return this.http.post(this.APIUrl+'/Login',val);
  }

  updateLoginData(val:any){
    return this.http.put(this.APIUrl+'/Login',val);
  }

  deleteLoginData(val:any){
    return this.http.delete(this.APIUrl+'/Login/'+ val);
  }

}
