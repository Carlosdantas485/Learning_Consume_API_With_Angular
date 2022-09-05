import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './user.model';
import { URL_API } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listUsers():Observable<Users[]>{
    return this.http.get<Users[]>(`${URL_API}users`)
  }
}
