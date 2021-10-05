import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  book: Book = {
    title: '',
    author: '',
  };

  constructor(
    private bookService: BookService,
    private router: Router, 
    private route: ActivatedRoute,
    private headerService: HeaderService){
      headerService.headerData = {
        title: 'Edição de Livros',
        icon: 'edit',
        routeUrl: '/livros/criar'
      }
    }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.bookService.readById(id!).subscribe(book =>{
      this.book = book;
    })
  }

  updateBook(): void{
    const { title, author } = this.book;

    if(title === '' || author === '' || this.book === undefined){
      this.bookService.showMessage('O campos devem estar preenchidos!', true);
      return;
    }

    this.bookService.update(this.book).subscribe(()=>{
      this.bookService.showMessage('Livro atualizado!');
      this.router.navigate(['/livros']);
    })
  }

  cancel(): void{
    this.router.navigate(['/livros']);
  }

}
