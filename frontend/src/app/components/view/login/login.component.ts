import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
}
