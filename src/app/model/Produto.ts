import { Categoria } from './Categoria'

export class Produto {
    public id: number
    public nome: string
    public imag1: string
    public imag2: string
    public imag3: string
    public preco: number
    public quantidade: number
    public estoque: boolean
    public doacao: string
    public descricao: string
    public categoria: Categoria 
    

}