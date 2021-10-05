import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import { BooksCrudComponent } from './views/books-crud/books-crud.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "livros",
    component: BooksCrudComponent
  },
  {
    path: "livros/criar",
    component: BookCreateComponent
  },
  {
    path: "livros/editar/:id",
    component: BookUpdateComponent
  },
  {
    path: "livros/deletar/:id",
    component: BookDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
