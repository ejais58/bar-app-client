import { Component, OnDestroy, OnInit } from '@angular/core';
import { LetterService } from '../../service/letter.service';
import { Product } from '../../models/product.interface';
import { Subscription } from 'rxjs';
import { Category } from '../../models/category.interface';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit, OnDestroy {
  loadProduct: Subscription;
  loadCategory: Subscription;

  constructor(private readonly letterService: LetterService) {
    this.loadProduct = new Subscription();
    this.loadCategory = new Subscription();
   }
  

  productsByCategory: { category: string, products: any[] }[] = [];
  products: Product[] = [];
  categories: Category[] = [];
  ngOnInit(): void {
    this.allProducts();
    this.allCategories();
  }

  allProducts() {
    this.loadProduct = this.letterService.getProduct().subscribe((result: any) => {
      const products = result.data;
      products.forEach((product: Product) => {
        const categoryName = product.id_category.ctg_name;
        const existingCategory = this.productsByCategory.find(item => item.category === categoryName);
        if (existingCategory) {
          existingCategory.products.push(product);
        } else {
          this.productsByCategory.push({ category: categoryName, products: [product] });
        }
      });
    });
  }

  allProductByCategory(category: string){
    this.loadProduct = this.letterService.getProductByCategory(category).subscribe((result: any) =>{
      this.products = result.data;
    })
  }

  allCategories(){
    this.loadCategory = this.letterService.getCategory().subscribe((result: any) =>{
      this.categories = result.data;
    })
  }

  ngOnDestroy(): void {
    if(this.loadProduct){
      this.loadProduct.unsubscribe();
    }
    if(this.loadCategory){
      this.loadCategory.unsubscribe();
    }
  }

  
  
}
