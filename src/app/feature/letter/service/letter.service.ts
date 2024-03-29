import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class LetterService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = environment.apiUrl
  
  getProduct(){
    return this.httpClient.get(`${this.baseUrl}/product/all/65daa0e091f55b4d529734c5`);
  }

  getCategory(){
    return this.httpClient.get(`${this.baseUrl}/product/all-categories/65daa0e091f55b4d529734c5`);
  }
  
  getProductByCategory(category: string){
    return this.httpClient.get(`${this.baseUrl}/product/category/1/${category}`)
  }
}
