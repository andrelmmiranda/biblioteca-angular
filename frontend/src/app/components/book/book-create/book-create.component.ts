import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {
    title: '',
    author: ''
  }

  constructor(private bookService: BookService, private router: Router, private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Cadastro de Livros',
      icon: 'add_circle',
      routeUrl: '/livros/criar'
    }
  }

  ngOnInit(): void {}

  createBook(): void{
    const { title, author } = this.book;

    if(title === '' || author === '' || this.book === undefined){
      this.bookService.showMessage('O campos precisam ser preenchidos!', true);
      return;
    }

    this.bookService.create(this.book).subscribe(()=>{
      this.bookService.showMessage('Livro criado!');
    })
    this.router.navigate(['livros']);
  }

  cancel(): void{
    this.router.navigate(['livros']);
  }
}
