import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-books-crud',
  templateUrl: './books-crud.component.html',
  styleUrls: ['./books-crud.component.css']
})
export class BooksCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService){
    headerService.headerData = {
      title: 'Estante de Livros',
      icon: 'library_books',
      routeUrl: '/livros'
    }
   }

  ngOnInit(): void {
  }

  navigateToBookCreate(){
    this.router.navigate(['/livros/criar'])
  }
}