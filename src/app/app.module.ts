import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroProdutoCategoriaComponent } from './cadastro-produto-categoria/cadastro-produto-categoria.component';
import { SearchComponent } from './search/search.component';
import { PutProdutosComponent } from './put-produtos/put-produtos.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteProdutosComponent } from './delete-produtos/delete-produtos.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { ProductComponent } from './product/product.component';
import { AlertasComponent } from './alertas/alertas.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    LoginComponent,
    CadastroComponent,
    CadastroProdutoCategoriaComponent,
    SearchComponent,
    PutProdutosComponent,
    PutCategoriaComponent,
    DeleteProdutosComponent,
    DeleteCategoriaComponent,
    ProductComponent,
    AlertasComponent,
    PesquisaComponent,
    PesquisaCategoriaComponent,
    ListaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,    
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }