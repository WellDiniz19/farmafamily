import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FocusTrapModule } from 'primeng/focustrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RippleModule } from 'primeng/ripple';
import { HeaderComponent } from './components/template/header/header.component';
import { LoginComponent } from './components/view/login/login.component';
import { HomeComponent } from './components/view/home/home.component';
import { CadastroComponent } from './components/view/cadastro/cadastro.component';
import { ProdutoDataComponent } from './components/view/produto-data/produto-data.component';
import { ProdutosComponent } from './components/view/produtos/produtos.component';
import { AuthService } from './components/service/auth.service';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    ProdutoDataComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    TableModule,
    CardModule,
    FocusTrapModule,
    FormsModule,
    HttpClientModule,
    RippleModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
