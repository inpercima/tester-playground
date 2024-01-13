import { Injectable } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SimpleService {
  constructor(private apollo: Apollo) { }

  getLaunches(): Observable<any> {
    const query = gql`
      query Launches {
        launches {
          launches {
            mission {
              name
            }
          }
        }
      }
    `;
    return this.apollo.watchQuery<any>({ query }).valueChanges.pipe(map((result) => result.data.launches));
  }

  getMission(launchId: string): Observable<any> {
    const query = gql`
      query Mission($launchId: ID!) {
        launch(id: $launchId) {
          mission {
            name
          }
        }
      }
    `;
    return this.apollo.watchQuery<any>({ query, variables: { launchId } }).valueChanges.pipe(map((result) => result.data.launch));
  }

  getTripsBooked(): Observable<any> {
    const query = gql`
      subscription TripsBooked {
        tripsBooked
      }
    `;
    return this.apollo.subscribe<any>({ query }).pipe(map(result => result?.data?.tripsBooked));
  }
}
