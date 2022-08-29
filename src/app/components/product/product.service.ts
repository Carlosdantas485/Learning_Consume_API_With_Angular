import { Observable } from 'rxjs';
import { BASE_URL } from './../../../../../project-angular/src/environments/environment';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  BASE_URL= "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  //Quando for utilizar o SnackBas, importar no arquivo app.module.ts raiz
  showMesage(msg: string):void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"
    })
  }

  create(product: Product):Observable<Product>{
    return this.http.post<Product>(this.BASE_URL, product)
  }

  readProducts():Observable<Product[]>{

    return this.http.get<Product[]>(this.BASE_URL)
  }

  readById(id:string):Observable<Product>{
    const URL = `${this.BASE_URL}/${id}`
    return this.http.get<Product>(URL)
  }

  update(product: Product): Observable<Product>{
    const URL = `${this.BASE_URL}/${product.id}`
    return this.http.put<Product>(URL, product )
  }
}
