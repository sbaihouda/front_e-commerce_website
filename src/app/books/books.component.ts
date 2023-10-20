import { Component } from '@angular/core';
import { books } from '../home';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
  export class BooksComponent {
    books : Observable<books> |undefined
    info :any
  constructor( private HomeService: HomeService){}

  ngOnInit() : void {
    this.showBookslist();
    this.HomeService.getBooks().subscribe((data: any) => {
      this.info = data; // Stockez les données dans la variable jsonData
    });
  }
  showBookslist(){
    this.books= this.HomeService.getBooks();
  }
}
