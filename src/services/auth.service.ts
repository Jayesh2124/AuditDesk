import { Injectable } from '@angular/core';
import { Environment } from '../env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private endpoint = Environment;

  login(Email: string, password: string) : Observable<any> {
    debugger;
    const url = `${this.endpoint.Endpoint}`;
    const body = {
      Email,
      password
    };
    return this.http.post(url, body);
  }
}
