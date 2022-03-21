import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // gerekli değişkenlerin oluşturulması
  public product!:any;
  public posts!:any;
  public productId:any;
  constructor(private router:Router,private prd:ProductService,private basService:BasketService) { }

  //ürünlerin ve yorumların servisten çekilmesi
  ngOnInit(): void {
    this.productId=localStorage.getItem('productId');
    this.prd.getProducts()
    .subscribe(res=>{
      this.product=res.find((a:any)=>{
      return a.productId==this.productId
    });
    console.log(this.product);
    });

    this.prd.getPosts()
    .subscribe(res=>{
      this.posts = res;
       console.log(this.posts[0].porductId);
    });
 }

 gotoMain(){
  this.router.navigate(['main']);
 }

 exit(){
  this.router.navigate(['login']);
  localStorage.clear();
}
addToBasket(item:any){
  this.basService.addtoBasket(item);
}

}
