import { Injectable } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MissionSimpleService {
  constructor(private apollo: Apollo) { }

  getMissions(): Observable<any> {
    const query = gql`
      query missions {
        missions {
          name
        }
      }
    `;
    return this.apollo.watchQuery<any>({ query }).valueChanges.pipe(map((result) => result.data.missions));
  }

  getMission(id: string): Observable<any> {
    const query = gql`
    query mission($id: ID!) {
      mission(id: $id) {
        name
      }
    }
    `;
    return this.apollo.watchQuery<any>({ query, variables: { id } }).valueChanges.pipe(map((result) => result.data.mission));
  }
}