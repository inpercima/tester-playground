import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LaunchesGQL, LaunchesQuery, MissionGQL, MissionQuery, TripsBookedGQL, TripsBookedSubscription } from 'src/graphql/graphql';

@Injectable({
  providedIn: 'root',
})
export class CodegenService {
  constructor(private launchesGQL: LaunchesGQL, private missionGQL: MissionGQL, private tripsBookedGQL: TripsBookedGQL) {}

  getLaunches(): Observable<LaunchesQuery['launches']> {
    return this.launchesGQL.watch().valueChanges.pipe(map((result) => result.data.launches));
  }

  getMission(launchId: string): Observable<MissionQuery['launch']> {
    return this.missionGQL.watch({ launchId }).valueChanges.pipe(map((result) => result.data.launch));
  }

  getTripsBooked(): Observable<TripsBookedSubscription['tripsBooked']> {
    return this.tripsBookedGQL.subscribe().pipe<any>(map((result) => result?.data?.tripsBooked));
  }
}
