import { Component,  OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnDestroy {

  isLogin=true;

  // imageUrl='https://picsum.photos/800/600';


  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginUp();
  }
  // exit(){
  //   this.router.navigate(['login']);
  //   localStorage.clear();
  // }

  ngOnDestroy(): void {
    // localStorage.clear();
  }

  //Kullanıcı giriş yapıp yapmadığı kontrol ve sayfa yönlendirmesi
  loginUp(){
    const log=localStorage.getItem('login');
    if(log=='true'){
      this.isLogin=true;
    }else{
      alert("Please login or signup!");
      this.isLogin=false;
      this.router.navigate(['login']);
    }

  }


}
