import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from 'src/app/services/book.service.js'
import { BookModel } from 'src/app/services/models/BookModel.js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, OnDestroy {

  books: BookModel[];
  subscriber: Subscription;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.subscriber = this.bookService.wishList$.subscribe(books => {
      this.books = books
    })
  }

  calcTotalPriceOfWishlist(books): number {
    let totalPrice = 0;
    for (let i = 0; i < books.length; i++) {
      totalPrice += +books[i].price;
    }
    return +totalPrice.toFixed(2);
  }

  removeBookFromWishList(event) {
    this.bookService.toggleWishList(null, event.target.value)
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
