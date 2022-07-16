import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BookListGQL, BookListQuery, SingleBookGQL, SingleBookQuery } from 'src/graphql/graphql';

@Injectable({
  providedIn: 'root',
})
export class BookCodegenService {
  constructor(private bookListGQL: BookListGQL, private singleBookGQL: SingleBookGQL) {}

  getAll(): Observable<BookListQuery['books']> {
    return this.bookListGQL.watch().valueChanges.pipe(map((result) => result.data.books));
  }

  getSingleBook(isbn: string): Observable<SingleBookQuery['book']> {
    return this.singleBookGQL.watch({ isbn }).valueChanges.pipe(map((result) => result.data.book));
  }
}
