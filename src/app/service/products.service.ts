import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../model/products";
 import { map } from "rxjs/operators";

@Injectable()
export class ProductService{
  
  constructor(private http:HttpClient){}

  //create product database
  createProduct(products: {pname: string, desc: string, price: string}){
    console.log(products);
    const headers = new HttpHeaders({'myHeader' : 'procademy'});
    this.http.post<{name: string}>('https://httpbyprocademy-default-rtdb.firebaseio.com/products.json', products, {headers: headers})
    .subscribe((res) =>{
      console.log(res);
    });

  }

  //fetch product database
  fetchProduct(){
    
    this.http.get<{[key:string]: Product}>('https://httpbyprocademy-default-rtdb.firebaseio.com/products.json').pipe(map((res) =>{
      const products = [];
    for(const key in res){
      if(res.hasOwnProperty(key)){
        products.push({...res[key], id:key})
      }
    }
    return products;
  }))
    
  }

  //deleteProduct from database
  deleteProduct(id:number){
    this.http.delete('https://httpbyprocademy-default-rtdb.firebaseio.com/products/'+id+'.json').subscribe();

  }

  //deleteallproduct from database

  deleteAllProducts(){
    this.http.delete('https://httpbyprocademy-default-rtdb.firebaseio.com/products.json').subscribe();

  }

}