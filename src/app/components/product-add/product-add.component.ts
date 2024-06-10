import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../intrerface/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  constructor(private productService: ProductService){

  }
  // @Output() onadd = new EventEmitter<IProduct>();
  
  onhandAdd(form:any){
    this.productService.addProduct(form.value).subscribe(()=>{
      console.log("Product added")
      this.reloadpage();
    })
    // this.onadd.emit(form.value);
    // console.log(form.value)
    
  }
  reloadpage(){
    window.location.reload();
  }
}
