import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  senha: string

  constructor(
    private authService: AuthService,
    private  router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    this.usuario.admin = false;
  }

  conferirSenha( event: any) {
    this.senha = event.target.value

  }

  toggleVisibility(e:any){
    this.usuario.admin = e.target.checked;
  }

  cadastrar() {
    if(this.senha === this.usuario.senha) {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) =>{
        this.usuario = resp 
        this.router.navigate(['/login'])
        this.alert.showAlertSuccess('Usuario cadastrado com sucesso!!')
      }, err => {        
        if (err.status == 400) {
          this.alert.showAlertDanger("usuario ja cadastrado")
        }
      })
    }else{
      this.alert.showAlertDanger('Sua senha não conferem')
    }  
  }
}