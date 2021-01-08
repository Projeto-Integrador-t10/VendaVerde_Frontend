import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-put-produtos',
  templateUrl: './put-produtos.component.html',
  styleUrls: ['./put-produtos.component.css']
})
export class PutProdutosComponent implements OnInit {
  idProd: number
  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idProd = this.route.snapshot.params["id"]
    this.findAllCategorias()
    this.findByIdProduto(this.idProd)
  }

  findByIdProduto(idProd: number) {
    this.produtoService.getByIdProdutos(idProd).subscribe((resp: any = Produto) => {
      this.produto = resp
    })

  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
      console.log("Lista de categorias" + JSON.stringify(this.listaCategorias))
    })
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log(this.listaProdutos)
    })
  }

  salvarProduto() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.router.navigate(['/cadastro-produto'])
      this.alert.showAlertSuccess("Produto atualizado com sucesso!")
      this.findAllProdutos()
    }, err => {
      if (err.status == 500) {
        this.alert.showAlertInfo("Preencha todo os campos corretamente!")
      }
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: any = Categoria) => {
      this.categoria = resp;
    })
  }
}