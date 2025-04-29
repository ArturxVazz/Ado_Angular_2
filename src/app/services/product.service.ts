import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
import { Product } from '../pages/Models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products'; // URL to web api (replace with your actual API endpoint)
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  // For demo purposes if no backend is available
  private mockProducts: Product[] = [
    { id: 1, name: 'Laptop', description: 'Powerful laptop for developers', price: 1299.99, quantity: 15, category: 'Electronics', imageUrl: 'https://placeholder.com/laptop.jpg', dateAdded: new Date() },
    { id: 2, name: 'Smartphone', description: 'Latest smartphone model', price: 899.99, quantity: 25, category: 'Electronics', imageUrl: 'https://placeholder.com/phone.jpg', dateAdded: new Date() },
    { id: 3, name: 'Coffee Maker', description: 'Professional coffee machine', price: 199.99, quantity: 10, category: 'Home Appliances', imageUrl: 'https://placeholder.com/coffee.jpg', dateAdded: new Date() }
  ];
  private lastId = 3;

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<Product[]> {
    // For a real API:
    // return this.http.get<Product[]>(this.productsUrl)
    //   .pipe(
    //     tap(products => this.productsSubject.next(products)),
    //     catchError(this.handleError<Product[]>('getProducts', []))
    //   );

    // For mock implementation:
    return of(this.mockProducts);
  }

  // Get product by id
  getProduct(id: number): Observable<Product> {
    // For a real API:
    // return this.http.get<Product>(`${this.productsUrl}/${id}`)
    //   .pipe(
    //     catchError(this.handleError<Product>(`getProduct id=${id}`))
    //   );

    // For mock implementation:
    const product = this.mockProducts.find(p => p.id === id);
    return of(product as Product);
  }

  // Add a new product
  addProduct(product: Product): Observable<Product> {
    // For a real API:
    // return this.http.post<Product>(this.productsUrl, product)
    //   .pipe(
    //     tap((newProduct: Product) => {
    //       const currentProducts = this.productsSubject.value;
    //       this.productsSubject.next([...currentProducts, newProduct]);
    //     }),
    //     catchError(this.handleError<Product>('addProduct'))
    //   );

    // For mock implementation:
    const newProduct = { ...product, id: ++this.lastId, dateAdded: new Date() };
    this.mockProducts.push(newProduct);
    this.productsSubject.next([...this.mockProducts]);
    return of(newProduct);
  }

  // Update an existing product
  updateProduct(product: Product): Observable<Product> {
    // For a real API:
    // return this.http.put<Product>(`${this.productsUrl}/${product.id}`, product)
    //   .pipe(
    //     tap(() => {
    //       const currentProducts = this.productsSubject.value;
    //       const index = currentProducts.findIndex(p => p.id === product.id);
    //       if (index !== -1) {
    //         currentProducts[index] = product;
    //         this.productsSubject.next([...currentProducts]);
    //       }
    //     }),
    //     catchError(this.handleError<Product>('updateProduct'))
    //   );

    // For mock implementation:
    const index = this.mockProducts.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.mockProducts[index] = { ...product };
      this.productsSubject.next([...this.mockProducts]);
    }
    return of(product);
  }

  // Delete a product
  deleteProduct(id: number): Observable<void> {
    // For a real API:
    // return this.http.delete<void>(`${this.productsUrl}/${id}`)
    //   .pipe(
    //     tap(() => {
    //       const currentProducts = this.productsSubject.value;
    //       this.productsSubject.next(currentProducts.filter(p => p.id !== id));
    //     }),
    //     catchError(this.handleError<void>('deleteProduct'))
    //   );

    // For mock implementation:
    this.mockProducts = this.mockProducts.filter(p => p.id !== id);
    this.productsSubject.next([...this.mockProducts]);
    return of(undefined);
  }

  // Error handling method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}