import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { AppAvaliacaoService } from 'src/app/services/app-avaliacao.service';

@Component({
  selector: 'app-edit-produtos',
  templateUrl: './edit-produtos.component.html',
  styleUrls: ['./edit-produtos.component.css']
})
export class EditProdutosComponent implements OnInit{
  @Input() produto?: Produtos;
  @Output() produtosUpdated = new EventEmitter<Produtos[]>();

  constructor(private appAvaliacaoService: AppAvaliacaoService) { }

  ngOnInit(): void {    
  }
  
  updateProduto(produto: Produtos){
    this.appAvaliacaoService
      .updateProdutos(produto)
      .subscribe((produtos: Produtos[]) => this.produtosUpdated.emit(produtos));    
  }

  deleteProduto(produto: Produtos){
    this.appAvaliacaoService
      .deleteProdutos(produto)
      .subscribe((produtos: Produtos[]) => this.produtosUpdated.emit(produtos));    
  }

  createProduto(produto: Produtos){
    this.appAvaliacaoService
      .createProdutos(produto)
      .subscribe((produtos: Produtos[]) => this.produtosUpdated.emit(produtos));    
  }
}
