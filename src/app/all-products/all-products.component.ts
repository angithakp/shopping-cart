import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts:any=[]
  
  

  constructor(private api:ApiService, private cartService:CartService){}

  ngOnInit(): void {

    this.getAllProduct()
     
    
  }

  getAllProduct=async()=>{
    (await this.api.getallProducts()).subscribe({
      next:(res:any)=>{
        this.allProducts=res
        console.log(this.allProducts);
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  addtocart(product:any){
    this.cartService.addtoCart(product);

  }

  


  

  

}
