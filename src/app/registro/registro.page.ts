import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    email: '',
    password: ''
  }

  constructor(private router: Router, public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async registro() {
    const usuario = await this.ngFireAuth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.password)
     console.log(usuario)
 
     if (usuario.user.email) {
      alert('Usuario creado con éxito')
      this.router.navigate(['/inicio'])
     } else {
       alert('Ocurrió un error al crear el usuario')
     }
   }

}
