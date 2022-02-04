import { Injectable } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookSimpleService {
  constructor(private apollo: Apollo) { }

  getAll(): Observable<any> {
    const query = gql`
      query BookList {
        books {
          isbn
          title
          authors {
            name
          }
        }
      }
    `;
    return this.apollo.watchQuery<any>({ query }).valueChanges.pipe(map((result) => result.data.books));
  }

  getSingleBook(isbn: string): Observable<any> {
    const query = gql`
      query BookSingle($isbn: ID!) {
        book(isbn: $isbn) {
          title
        }
      }
    `;
    return this.apollo.watchQuery<any>({ query, variables: { isbn } }).valueChanges.pipe(map((result) => result.data.book));
  }
}
