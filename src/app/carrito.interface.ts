import { ProdI } from './prod.interface';

export interface Pedido {
    uid:string;
    total: number
    fecha: Date;
    productos: ProductoPedido [];
}

 interface ProductoPedido {
    producto: ProdI;
    cantidad: number;
}