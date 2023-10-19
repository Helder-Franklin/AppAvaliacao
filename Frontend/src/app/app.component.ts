import { Component } from '@angular/core';
import { Produtos } from './models/produtos';
import { Categorias } from './models/categorias';
import { AppAvaliacaoService } from './services/app-avaliacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppAvaliacao.UI';
  produtos: Produtos[] = [];
  categorias: Categorias[] = [];
  produtoToEdit?: Produtos;
  categoriaToEdit?: Categorias;

  constructor(private appAvaliacaoService: AppAvaliacaoService) {}

  ngOnInit() : void {
    this.appAvaliacaoService
      .getProdutos()
      .subscribe((result: Produtos[]) => (this.produtos = result)); 

    this.appAvaliacaoService
      .getCategorias()
      .subscribe((result: Categorias[]) => (this.categorias = result));  
  }

  initNovoProduto() {
    this.produtoToEdit = new Produtos();
  }
  
  editProduto(produto: Produtos) {
    this.produtoToEdit = produto;
  }
  
  initNovaCategoria() {
    this.categoriaToEdit = new Categorias();
  }

  editCategoria(categoria: Categorias) {
    this.categoriaToEdit = categoria;
  }  
}
