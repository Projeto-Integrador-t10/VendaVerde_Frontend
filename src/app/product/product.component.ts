import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  produto:Produto = new Produto()

  prodId:number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private alert: AlertasService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0),
    this.prodId = this.route.snapshot.params["id"],
    this.findByIdProduto(this.prodId)
  }

  findByIdProduto(idProd: number) {
    this.produtoService.getByIdProdutos(idProd).subscribe((resp: any = Produto) => {
      this.produto = resp
    })
  }

  doar(){
    this.alert.showAlertInfo("Parabéns, produto doado com sucesso!")
    this.router.navigate(['/home']) 
  }
  
  compra(){
    this.alert.showAlertSuccess("Compra efetuada com sucesso!")
    this.router.navigate(['/home']) 
  } 

  carrinho(){
    this.alert.showAlertSuccess("Produto adicionado ao carrinho!")
    this.router.navigate(['/home']) 
  } 

}
