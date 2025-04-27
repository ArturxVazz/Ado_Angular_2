import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Models/product.models';



@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent {

  product: Product = {
    nome: '',
    preco: 0,
    descricao: ''
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
      nome: '',
      preco: 0,
      descricao: ''
    };
  }
}
