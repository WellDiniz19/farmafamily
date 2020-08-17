import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../service/produto.service';
import { Produto } from '../produto-data/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-data',
  templateUrl: './produto-data.component.html',
  styleUrls: ['./produto-data.component.css'],
})
export class ProdutoDataComponent implements OnInit {
  produtos: Produto[];
  selecionarProduto: Produto;
  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit() {
    this.produtoService.list().subscribe((dados) => (this.produtos = dados));
  }

  addProduto() {
    this.router.navigate(['/cadastro']);
  }
}
