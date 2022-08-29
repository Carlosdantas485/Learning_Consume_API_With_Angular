import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor( 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      throw Error
    }
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMesage('Produto atualizado com sucesso !')
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

}