import { BasketService } from './../../services/basket.service';
import { ProductService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Gerekli değişkenlerin oluşturulması
  public products:any=[];
  public countTotal !: number;
  public productList : any ;
  public searchCategory : any;
  searchKey:string ="";
  isProduct=true;
  public searchTerm !: string;
  public currentItem:any;
  constructor(private prd:ProductService,private basService:BasketService,private router:Router) { }

  // sayfa yğklenirken ürünlerin servis yardımıyla çekilmesi
  // ve kategoriye göre filtreleme
  ngOnInit(): void {
    this.prd.getProducts()
    .subscribe(res=>{
      this.productList = res;
      this.searchCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="clothes"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      // console.log(this.productList)
    });

    // search barı le arama işlemi gerekli servisin çağrılması
    this.basService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
    //mainde ne gösterilecek ürünler mi sepet mi?
    this.isProduct=true;

    //sepetteki ürünlerin toplam tutarı yine sepet servisi yardımıyla
    this.basService.getProducts().subscribe(x=>{
      this.products=x;
      this.countTotal = this.basService.getTotalPrice();
    });
  }

  // sepet ve ürünler arası geçiş
  onClickBasket(){
    this.isProduct=false;
  }

  onClickAll(){
    this.isProduct=true;
  }

  // sepete ürün ekleme
  addToBasket(item:any){
    this.basService.addtoBasket(item);
  }

  // sepetten ürün silme
  removeItem(item: any){
    this.basService.removeBasketItem(item);
  }
  // sepeti boşaltma
  emptyBasket(){
    this.basService.removeAllBasket();
  }
  // ürün arama
  searchProduct(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.basService.search.next(this.searchTerm);
  }

  //ürünleri kategorik olarak listeleme
  search(category:string){
    this.searchCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  // çıkış işlemi

  exit(){
    this.router.navigate(['login']);
    localStorage.clear();
  }

  //servis yardımı ile satın alınan ürünlerin json dosyasına post edilmesi
  buyBasket(){
    this.basService.buyBasket();
    this.emptyBasket();
    this.isProduct=true;
  }

  //ürün sayfasına routing
  titleClick(item:any){
    this.currentItem=item;
    localStorage.setItem('productId',this.currentItem.productId);
    this.router.navigate(['product']);
  }



}
