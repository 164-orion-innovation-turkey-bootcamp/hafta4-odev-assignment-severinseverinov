import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable()
export class ProductService{
  constructor(private http:HttpClient){

  }

  //ürünlerin jsondan get edilmesi
  getProducts(){
    return this.http.get<any>("http://localhost:3000/products")
    .pipe(map((prd:any)=>{
      return prd;
    }))
  }
//ürün yorumlarının get edilmesi
  getPosts(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((post:any)=>{
      return post;
    }))
  }
}
