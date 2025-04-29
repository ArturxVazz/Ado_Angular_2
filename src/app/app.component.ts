import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsFormComponent } from './pages/products-form/products-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TechStorm';
}
