import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,    
  ) { }

  logar(usuarioLogin: UsuarioLogin) : Observable<UsuarioLogin> {

    return this.http.post<UsuarioLogin>('http://localhost:9000/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:9000/usuarios/cadastrar', usuario)

  }
  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token != null){ok = true} return ok
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null){ok = true} return ok
  }
  
  footer(){
    let ok: boolean = true
    if(this.router.url == '/login' || this.router.url == '/cadastro'){ok = false}
    return ok
  }
}