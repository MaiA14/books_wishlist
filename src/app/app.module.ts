import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishListComponent } from './components/wish-list/wish-list/wish-list.component';
import { BookPreviewComponent } from './components/book-preview/book-preview/book-preview.component';
import { BookCaruselComponent } from './components/book-carusel/book-carusel/book-carusel.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    BookPreviewComponent,
    BookCaruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
