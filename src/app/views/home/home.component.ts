import { Product } from './../../components/product/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name!: string 
  canShow = false

  products!: Product[] 

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers():void{
    this.productService.readProducts().subscribe(products=>{
      this.products = products;
      console.log(this.products)
    })
  }

}
