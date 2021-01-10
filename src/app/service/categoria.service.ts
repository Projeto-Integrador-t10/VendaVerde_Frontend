import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllCategorias(): Observable<Categoria[]> {

    return this.http.get<Categoria[]>('https://oivendaverde.herokuapp.com/categoria')
  }  

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`https://oivendaverde.herokuapp.com/categoria/${id}`)
  }
  postCategoria(categoria: Categoria) : Observable<Categoria>  {
    return this.http.post<Categoria>('https://oivendaverde.herokuapp.com/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria) : Observable<Categoria> {
    return this.http.put<Categoria>('https://oivendaverde.herokuapp.com/categoria', categoria, this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete(`https://oivendaverde.herokuapp.com/categoria/${id}`, this.token)

  }
}