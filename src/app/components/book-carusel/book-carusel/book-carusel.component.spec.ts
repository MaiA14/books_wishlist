import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCaruselComponent } from './book-carusel.component';

describe('BookCaruselComponent', () => {
  let component: BookCaruselComponent;
  let fixture: ComponentFixture<BookCaruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCaruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
