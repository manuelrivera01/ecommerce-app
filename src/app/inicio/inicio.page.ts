import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosService } from '../productos.service';
import { ProdI } from '../prod.interface';

import { ProductosPage } from '../productos/productos.page';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  products: ProdI[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getTodos().subscribe(res => {
      console.log(res)
      this.products = res;

    });
   
  }
    
  

}
