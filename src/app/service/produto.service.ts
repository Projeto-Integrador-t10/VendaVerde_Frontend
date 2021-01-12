import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllProdutos(): Observable<Produto[]>{

    return this.http.get<Produto[]>('https://oivendaverde.herokuapp.com/produtos')
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`https://oivendaverde.herokuapp.com/produtos/${id}`)
  }

  getByIdProdutos(id: number) : Observable<Produto>{
    return this.http.get<Produto>(`https://oivendaverde.herokuapp.com/produtos/${id}`)
  }
  getByNameProduto(nome: string): Observable<Produto[]> { 
    return this.http.get<Produto[]>(`https://oivendaverde.herokuapp.com/produtos/nome/${nome}`)
  }

  postProduto(produto: Produto) : Observable<Produto[]> {
    return this.http.post<Produto[]>('https://oivendaverde.herokuapp.com/produtos', produto, this.token)
  }

  putProduto(produto: Produto) : Observable<Produto>{
    return this.http.put<Produto>('https://oivendaverde.herokuapp.com/produtos', produto ,this.token)
  }

  deleteProduto(id: number) {
    return this.http.delete(`https://oivendaverde.herokuapp.com/produtos/${id}`, this.token)

  }
}