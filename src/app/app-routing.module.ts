import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroProdutoCategoriaComponent } from './cadastro-produto-categoria/cadastro-produto-categoria.component';
import { PutProdutosComponent } from './put-produtos/put-produtos.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteProdutosComponent } from './delete-produtos/delete-produtos.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { ProductComponent } from './product/product.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastro-produto', component: CadastroProdutoCategoriaComponent},
  {path: 'editar-produto/:id', component: PutProdutosComponent},
  {path: 'editar-categoria/:id', component: PutCategoriaComponent},
  {path: 'delete-produto/:id', component: DeleteProdutosComponent},
  {path: 'delete-categoria/:id', component: DeleteCategoriaComponent},
  {path: 'prod/:id', component: ProductComponent},
  {path: 'pesquisa/:nome', component: PesquisaComponent},
  {path: 'categoria/:id', component: PesquisaCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }