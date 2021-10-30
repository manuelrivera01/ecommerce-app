import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProdI } from './prod.interface';


import * as firebase from 'firebase/app'
import 'firebase/firestore'



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  listaProductos:AngularFirestoreCollection<ProdI>;
  productos: Observable<ProdI[]>

  constructor(private afs: AngularFirestore) {

  
    this.listaProductos = this.afs.collection('productos');
    this.productos = this.listaProductos.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    
  }

  

  getTodos(){
    return this.productos;
  }

  
}
