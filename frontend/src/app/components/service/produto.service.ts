import { Produto } from './../view/produto-data/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly API = 'http://localhost:3001/produtos';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Produto[]>(this.API).pipe();
    tap();
  }
}
