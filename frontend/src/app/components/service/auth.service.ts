import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../view/login/usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private usuarioAtenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'sac@farmafamily.com' && usuario.senha === '123456') {
      this.usuarioAtenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/produtos']);
    } else {
      this.usuarioAtenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAtenticado() {
    return this.usuarioAtenticado;
  }
}
