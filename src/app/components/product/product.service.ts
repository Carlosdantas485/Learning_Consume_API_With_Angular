import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private snackBar: MatSnackBar ) { }

  //Quando for utilizar o SnackBas, importar no arquivo app.module.ts raiz
  showMesage(msg: string):void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"
    })
  }
}
