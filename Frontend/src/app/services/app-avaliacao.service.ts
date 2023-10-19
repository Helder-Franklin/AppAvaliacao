import { Injectable } from '@angular/core';
import { Produtos } from '../models/produtos';
import { Categorias } from '../models/categorias';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AppAvaliacaoService {
  private url = "https://localhost:7153/api";

  constructor(private http: HttpClient) {}

  public getProdutos(): Observable<Produtos[]> {    
    return this.http.get<Produtos[]>(`${this.url}/Produtos`);
  }

  public updateProdutos(produto: Produtos): Observable<Produtos[]> {    
    return this.http.put<Produtos[]>(
      `${this.url}/Produtos`, 
      produto
    );
  }

  public createProdutos(produto: Produtos): Observable<Produtos[]> {    
    return this.http.post<Produtos[]>(
      `${this.url}/Produtos`, 
      produto
    );
  }

  public deleteProdutos(produto: Produtos): Observable<Produtos[]> {    
    return this.http.delete<Produtos[]>(
      `${this.url}/Produtos/${produto.id}`
    );
  }

  public getCategorias(): Observable<Categorias[]> {    
    return this.http.get<Categorias[]>(`${this.url}/Categorias`);
  }
  
  public updateCategorias(categoria: Categorias): Observable<Categorias[]> {    
    return this.http.put<Categorias[]>(
      `${this.url}/Categorias`, 
      categoria
    );
  }

  public createCategorias(categoria: Categorias): Observable<Categorias[]> {    
    return this.http.post<Categorias[]>(
      `${this.url}/Categorias`, 
      categoria
    );
  }

  public deleteCategorias(categoria: Categorias): Observable<Categorias[]> {    
    return this.http.delete<Categorias[]>(
      `${this.url}/Categorias/${categoria.id}`
    );
  }
}
