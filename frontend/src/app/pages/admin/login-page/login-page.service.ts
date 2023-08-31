import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPageComponent } from './login-page.component';
import { adminAuthResponse, adminLogin } from 'src/app/config/config.interface';
import { environmet } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private _http:HttpClient) { }

  adminLogin(details:adminLogin){
    return this._http.post<adminAuthResponse>(`${environmet.baseUrl}/admin/login`,details);
  }
}
