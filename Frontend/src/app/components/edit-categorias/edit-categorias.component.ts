import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { AppAvaliacaoService } from 'src/app/services/app-avaliacao.service';

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.css']
})
export class EditCategoriasComponent {
  @Input() categoria?: Categorias;
  @Output() categoriaUpdated = new EventEmitter<Categorias[]>();

  constructor(private appAvaliacaoService: AppAvaliacaoService) { }

  ngOnInit(): void {    
  }  

  updateCategorias(categoria: Categorias){
    this.appAvaliacaoService
      .updateCategorias(categoria)
      .subscribe((categoria: Categorias[]) => this.categoriaUpdated.emit(categoria));
  }

  deleteCategorias(categoria: Categorias){
    this.appAvaliacaoService
      .deleteCategorias(categoria)
      .subscribe((categoria: Categorias[]) => this.categoriaUpdated.emit(categoria));    
  }

  createCategorias(categoria: Categorias){
    this.appAvaliacaoService
      .createCategorias(categoria)
      .subscribe((categorias: Categorias[]) => this.categoriaUpdated.emit(categorias));    
  }  
}
