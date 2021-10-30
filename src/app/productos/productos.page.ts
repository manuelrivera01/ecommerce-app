import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  listaProductos:AngularFirestoreCollection;
  

  constructor(private afs: AngularFirestore) {
  
    this.listaProductos = this.afs.collection('productos');
  }

  ngOnInit() {

  }

  listarProductos() {
    return this.listaProductos.valueChanges({ idField: 'id' });
  }

}
