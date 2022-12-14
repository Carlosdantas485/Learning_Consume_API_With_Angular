import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[] 

  
  @Input()
  returnRed = true


  displayedColumns = ['id','url', 'name', 'price', 'action']
  constructor(private productService: ProductService) { }

  ngOnInit():void {
    this.productService.readProducts().subscribe(products =>{
      this.products = products
      console.log(products)
    })
  }

}
