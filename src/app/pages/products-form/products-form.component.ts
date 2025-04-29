import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../models/product.models';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  imports: [FormsModule],
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent {

  product: Product = {
    name: '',
    price: 0,
    description: '',
    quantity:0,
    category:''
  };

  constructor(private productService: ProductService) { }

  addProduct() {
    this.productService.addProduct(this.product).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
      this.clearForm();
    });
  }

  clearForm() {
    this.product = {
      name: '',
      price: 0,
      description: '',
      quantity:0,
      category:''
    };
  }
}
