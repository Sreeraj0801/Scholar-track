import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domain, Qualification } from 'src/app/config/config.interface';
import { environmet } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _http:HttpClient) { }

  addDomain(value:{}){
    return this._http.post<Domain>(`${environmet.baseUrl}/domain`,value)
  }

  addQualificaton(value:{}) {
    return this._http.post<Qualification>(`${environmet.baseUrl}/qualification`,value)
  }
}
