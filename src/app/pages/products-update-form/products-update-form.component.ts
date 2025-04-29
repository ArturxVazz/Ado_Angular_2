import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-form-update',
  templateUrl: './products-form-update.component.html',
})
export class ProductsFormUpdateComponent implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProduct(+id).subscribe((data) => {
        this.product = data;
      });
    }
  }

  onUpdate() {
    this.productService.updateProduct(this.product).subscribe(() => {
      alert('Produto atualizado com sucesso!');
      this.router.navigate(['/produtos']);
    });
  }

  goToProductList() {
    this.router.navigate(['/produtos']);
  } 

  startEdit(product: any) {
    this.router.navigate(['/update', product.id]);
  }
    } 