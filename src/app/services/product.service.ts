import { Injectable } from '@angular/core';
import { IProduct } from '../intrerface/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) { } 

  getAll():Observable<IProduct[]> {
    // console.log(this.http.get<IProduct[]>(`http://localhost:3000/products`))
    return this.http.get<IProduct[]>(`http://localhost:3000/products`)
  }
  addProduct(product:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(`http://localhost:3000/products`,product)
  }
  remoteProduct(id:number):Observable<IProduct | {}>{
    return this.http.delete<IProduct | {}>(`http://localhost:3000/products/${id}`)
  }
}
