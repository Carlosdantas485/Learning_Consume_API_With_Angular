import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './user.model';
import { URL_API } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  showDialog = false;

  constructor(private snackBar: MatSnackBar,private http: HttpClient) { }
  showMesage(msg: string):void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"
    })
  }
  ShowDialog():void{
    if(this.showDialog ==true){
      this.showDialog =false
    }else{
      this.showDialog =true
    }
  }

  listUsers():Observable<Users[]>{
    return this.http.get<Users[]>(`${URL_API}users`)
  }

  create(user: Users):Observable<Users>{
    return this.http.post<Users>(`${URL_API}users`, user)
  }


  readById(id: number):Observable<Users>{
    const URL = `${URL_API}users/${id}`
    return this.http.get<Users>(URL)
  }

  update(product: Users): Observable<Users>{
    const URL = `${URL_API}users/${product.id}`
    return this.http.put<Users>(URL, product )
  }

  delete(id:number):Observable<Users>{
    const URL = `${URL_API}users/${id}`;
    return this.http.delete<Users>(URL)
  }

}
