import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoDataComponent } from './components/view/produto-data/produto-data.component';
import { HomeComponent } from './components/view/home/home.component';
import { LoginComponent } from './components/view/login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { CadastroComponent } from './components/view/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'produtos',
    component: ProdutoDataComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
