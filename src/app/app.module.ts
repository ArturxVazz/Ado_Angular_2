import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component'; // IMPORTAR
import { ProductsFormComponent } from './pages/products-form/products-form.component'; // IMPORTAR

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
