import { Injectable } from '@angular/core';
import { Pedido } from './carrito.interface';
import { ProdI } from './prod.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Firestore from 'firebase/firestore' 
import { doc, getDoc } from "firebase/firestore"
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  cart: ProdI[] = [];
  private pedido: Pedido;
  path = 'carrito';
 
  private carritoContador = new BehaviorSubject(0);

  constructor(private carritoService: CarritoService) { 
    this.loadCarrito()
  }

  loadCarrito() {
   
  }

  getCarrito() {
    return this.pedido;

  }

  addProducto(producto: ProdI) {

  }

  removeProducto(producto: ProdI) {

  }

  realizarPedido() {

  }

  clearCarrito() {

  }


 
}
