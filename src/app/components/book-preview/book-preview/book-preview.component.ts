import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../../../services/book.service.js';
import { BookModel } from 'src/app/services/models/BookModel.js';
@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {

  @Input() book: BookModel;
  @Output() onToggleInWishList = new EventEmitter<BookModel>()
  constructor(private bookService: BookService) { }

  get isInWishList(){ 
    return this.bookService.isBookInWishlist(this.book)
  }

  ngOnInit(): void {}
}
