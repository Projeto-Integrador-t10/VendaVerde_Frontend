import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  faPlusCircle = faPlusCircle

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(

    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    public auth: AuthService

  ) { }

  ngOnInit() {

    window.scroll(0, 0)

 
    this.findAllCategorias()
    this.findAllProdutos()

  }

  
  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
      /* console.log("Lista de categorias" + JSON.stringify(this.listaCategorias)) */
    })
  }

    findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      /* console.log(this.listaProdutos) */
    })
  }

}
