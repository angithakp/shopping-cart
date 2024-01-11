import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  cartCount: number = 0;

  BASEURL="https://fakestoreapi.com/products"

  constructor(private http:HttpClient) { }

  getallProducts(){
    return this.http.get(this.BASEURL)
  }

  
 


}
