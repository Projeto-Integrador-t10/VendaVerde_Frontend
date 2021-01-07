import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  BASE_URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.BASE_URL}categoria`, this.token)
  }  

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.BASE_URL}categoria/${id}`, this.token)
  }
  postCategoria(categoria: Categoria) : Observable<Categoria>  {
    return this.http.post<Categoria>(`${this.BASE_URL}categoria`, categoria, this.token)
  }

  putCategoria(categoria: Categoria) : Observable<Categoria> {
    return this.http.put<Categoria>(`${this.BASE_URL}categoria`, categoria, this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete(`${this.BASE_URL}categoria/${id}`, this.token)


  }
}