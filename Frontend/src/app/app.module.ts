import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProdutosComponent } from './components/edit-produtos/edit-produtos.component';
import { FormsModule } from '@angular/forms';
import { EditCategoriasComponent } from './components/edit-categorias/edit-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    EditProdutosComponent,
    EditCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
