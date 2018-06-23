import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthServService {

  constructor(public http:HttpClient) { }

  sendemail(data)
  {
    return this.http.post("https://mybackendapp.herokuapp.com/sendmail",data)
  }
}
