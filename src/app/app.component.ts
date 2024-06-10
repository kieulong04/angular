import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { IProduct } from './intrerface/product';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ProductAddComponent,
    ProductListComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  products!:IProduct[];
  constructor( private productService: ProductService){
     this.productService.getAll().subscribe(product => {
      // console.log(product)
      this.products = product
     })
  }

  remoteItem(id:number){
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if(confirm){
      this.productService.remoteProduct(id).subscribe(()=>{
        this.products = this.products.filter(product=> product.id!== id )
        alert("xoa thanh cong ")
      })
    }
  }

  onhandAdd(product:IProduct){
    this.products.push(product);
  }
}
