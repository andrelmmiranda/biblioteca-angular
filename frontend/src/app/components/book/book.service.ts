import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Book } from './book.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService{

  url = 'http://localhost:3001/book'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string, isError: boolean = false): void{
    this.snackBar.open(message, 'fechar', {
      duration: 10000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: !isError ? ['msg-success'] : ['msg-error'],
    })
  }

  errorHandler(error: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  create(book: Book): Observable<Book>{
    return this.http.post<Book>(this.url, book)
  }

  read(): Observable<Book[]>{
    return this.http.get<Book[]>(this.url).pipe(
      map(object => object), catchError(error => this.errorHandler(error))
    );
  }

  readById(id: string): Observable<Book>{
    const url = `${this.url}/${id}`
    return this.http.get<Book>(url).pipe(
      map(object => object), catchError(error => this.errorHandler(error))
    );
  }

  update(book: Book): Observable<Book>{
    const url = `${this.url}/${book.id}`
    return this.http.put<Book>(url, book).pipe(
      map(object => object), catchError(error => this.errorHandler(error))
    );
  }

  delete(id: string): Observable<Book>{
    const url = `${this.url}/${id}`
    return this.http.delete<Book>(url).pipe(
      map(object => object), catchError(error => this.errorHandler(error))
    );
  }
}