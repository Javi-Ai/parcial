import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>('https://fakestoreapi.com/products');
  }
}
