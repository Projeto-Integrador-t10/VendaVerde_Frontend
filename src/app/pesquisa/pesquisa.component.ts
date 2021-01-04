import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  nome: string
  produto: Produto = new Produto()
  listaProdutos: Produto[]

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.nome = this.route.snapshot.params["nome"]
    this.findByName()
    
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log(this.listaProdutos)
    })
  }


  findByName() {
    if (this.nome == "") {
      alert("Preencha a barra antes de pesquisar!")
    } else {
      this.produtoService.getByNameProduto(this.nome).subscribe((resp: Produto[]) => {
        this.listaProdutos = resp

      })
    }
  }
}
