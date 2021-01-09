import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import {UsuarioLogin} from '../model/UsuarioLogin'
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  faHome = faHome

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  usuario: Usuario = new Usuario()

  constructor(
    private authService: AuthService,
    public router: Router, 
    private alert: AlertasService
    
  ) { }

  ngOnInit() {  
  }
  
  entrar(){
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=> {
      this.usuarioLogin = resp
      localStorage.setItem('token', this.usuarioLogin.token)
      environment.admin = this.usuarioLogin.admin
      this.router.navigate(['/home'])      
    }, err =>{
      if(err.status == 500){
        this.alert.showAlertDanger("Usuário/Senha não confere!!")
      } 
    })   
  }
  
}