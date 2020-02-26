import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookModel } from '../services/models/BookModel';
import BOOKS from '../services/data/books.js';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  _books: BookModel[] = BOOKS;
  private _currentBook$ = new BehaviorSubject<BookModel>(this._books[0])
  public currentBook$ = this._currentBook$.asObservable();

  private _wishList$ = new BehaviorSubject<BookModel[]>([])
  public wishList$ = this._wishList$.asObservable();

  private currIndex = 0;

  getNextBook(diff: number) {
    this.currIndex = this.currIndex + diff;
    this.currIndex = (this.currIndex + this._books.length) % this._books.length;
    this._currentBook$.next(this._books[this.currIndex]);
  }

  isBookInWishlist(currentBook: BookModel) {
    return this._wishList$.getValue().some(curr => curr.title === currentBook.title);
  }

  toggleWishList(book, title = null) {
    if (book && this.isBookInWishlist(book)) {
      this._wishList$.next(this._wishList$.getValue().filter(curr => {
        return curr.title !== book.title;
      }))
    } else if (title) {
      this._wishList$.next(this._wishList$.getValue().filter(curr => {
        return curr.title !== title;
      }))
    } else {
      this._wishList$.next([...this._wishList$.getValue(), book])
    }
  }

}
