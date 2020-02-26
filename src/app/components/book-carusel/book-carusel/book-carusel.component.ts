import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service.js'

@Component({
  selector: 'app-book-carusel',
  templateUrl: './book-carusel.component.html',
  styleUrls: ['./book-carusel.component.scss']
})
export class BookCaruselComponent implements OnInit {

  book$;
  constructor(private bookService:BookService) { }

  onToggleInWishList(book){
    this.bookService.toggleWishList(book);
  }

  onGetNextBook(diff){
    this.bookService.getNextBook(diff);
  }

  ngOnInit() {
    this.book$ = this.bookService.currentBook$;
  }

}
