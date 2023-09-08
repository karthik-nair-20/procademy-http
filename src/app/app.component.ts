import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from './model/products';
import { ProductService } from './service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'procademyHttps';
  allProducts: Product[] = [];
  isFetching:boolean = false;

  constructor(private http: HttpClient, private productService: ProductService){}


  ngOnInit(): void {
      this.fetchProduct();
  }

  onProductsFetch()
  {
    this.fetchProduct();
  }
//post
  onProductCreate(products: {pname: string, desc: string, price: string}){
    // console.log(products);
    // const headers = new HttpHeaders({'myHeader' : 'procademy'});
    // this.http.post<{name: string}>('https://httpbyprocademy-default-rtdb.firebaseio.com/products.json', products, {headers: headers})
    // .subscribe((res) =>{
    //   console.log(res);
    // });

    this.productService.createProduct(products);

  }

  //get

  private fetchProduct(){
    // this.isFetching = true;
    // this.http.get<{[key:string]: Product}>('https://httpbyprocademy-default-rtdb.firebaseio.com/products.json').pipe(map((res) =>{
    //   const products = [];
    // for(const key in res){
    //   if(res.hasOwnProperty(key)){
    //     products.push({...res[key], id:key})
    //   }
    // }
    // return products;
    // }))
    // .subscribe( (products) =>{
    // console.log(products);
    // this.allProducts = products;
    // this.isFetching = false;
    // });

    // this.isFetching = true;
    // this.productService.fetchProduct().subscribe((products) =>{
    // this.allProducts = products;
    //   this.isFetching = false;
    // });
  }

//delete
  onDeleteProduct(id:number){
    // this.http.delete('https://httpbyprocademy-default-rtdb.firebaseio.com/products/'+id+'.json').subscribe();
    this.productService.deleteProduct(id);
  }

  onClearProduct(){
    // this.http.delete('https://httpbyprocademy-default-rtdb.firebaseio.com/products.json').subscribe();
    this.productService.deleteAllProducts();
  }
}
