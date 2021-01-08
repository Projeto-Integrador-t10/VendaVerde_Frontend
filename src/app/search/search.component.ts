import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  esconder: boolean = true
  nome:string
  

  produto: Produto = new Produto()
  listaProdutos: Produto[]
 

  constructor(

    private produtoService: ProdutoService   

  ) { }

  ngOnInit(){
  }
  
  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log(this.listaProdutos)
    })
  }

  findAllByName(){
    if(this.nome == ""){
      alert("Preencha a barra antes de pesquisar!")
    } else{
      this.produtoService.getByNameProduto(this.nome).subscribe((resp: Produto[])=>{
        this.listaProdutos = resp
        if(this.listaProdutos.length > 5){
                  this.esconder = false
        }else{
          this.esconder = true
        }
       
      })
    }
  }

  
}