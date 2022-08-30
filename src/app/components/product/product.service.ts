import { Observable } from 'rxjs';

import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { URL_API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

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
    return this.http.post<Product>(`${URL_API}products`, product)
  }

  readProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${URL_API}products`)
  }

  readById(id: number):Observable<Product>{
    const URL = `${URL_API}products/${id}`
    return this.http.get<Product>(URL)
  }

  update(product: Product): Observable<Product>{
    const URL = `${URL_API}products/${product.id}`
    return this.http.put<Product>(URL, product )
  }

  delete(id:number):Observable<Product>{
    const URL = `${URL_API}products/${id}`;
    return this.http.delete<Product>(URL)
  }
}
