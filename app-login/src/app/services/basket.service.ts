import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()

export class BasketService{

  //gerekli değişkenlerin tanımlanması
  public basketItemList:any=[];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public currentProduct!:any;

constructor(private http:HttpClient, private router:Router){}

//ürün listesini çekme
getProducts(){
  return this.productList.asObservable();
}

// ürünlerin sepete ekenmesi
addtoBasket(product : any){
  this.basketItemList.push(product);
  this.productList.next(this.basketItemList);
  this.getTotalPrice();
  console.log(this.basketItemList)
}

// sepetteki ürünlerin toplam fiyatının hesaplanması
getTotalPrice() : number{
  let countTotal = 0;
  this.basketItemList.map((a:any)=>{
    countTotal += a.total;
  })
  return countTotal;
}

// sepetten ürün silinmesi
removeBasketItem(product: any){
  this.basketItemList.map((a:any, index:any)=>{
    if(product.id=== a.id){
      this.basketItemList.splice(index,1);
    }
  })
  this.productList.next(this.basketItemList);
}

//sepetten tüm ürünlerin silinmesi
removeAllBasket(){
  this.basketItemList = []
  this.productList.next(this.basketItemList);
}

//satın alma ve json dosyasına post işşlemi
buyBasket(){
  console.log(this.basketItemList);
  const headers = { 'content-type': 'application/json'}
  const body=JSON.stringify(this.basketItemList);
  this.http.post<any>("http://localhost:3000/soldProducts",body,{'headers':headers})
    .subscribe(res=>{
      alert('Shopping successfull!');
      this.router.navigate(['main']);
    })

}

}
