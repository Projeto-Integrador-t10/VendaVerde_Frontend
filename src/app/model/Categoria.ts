import { Produto } from './Produto'

export class Categoria {
    public id: number
    public nome: string
    public ativo: boolean
    public img: string
    public produto: Produto[]
}