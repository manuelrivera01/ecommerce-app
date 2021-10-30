import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AngularFireAuth } from "@angular/fire/compat/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: '',
    password: ''
  }

  constructor(private router: Router, public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login() {
   const usuario = await this.ngFireAuth.signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
    console.log(usuario)

    if (usuario.user.email) {
      this.router.navigate(['/inicio'])
    } else {
      alert('login failed')
    }
  }

  

}
