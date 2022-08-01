import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MissionGQL, MissionQuery, MissionsGQL, MissionsQuery, Users, UsersGQL, UsersSubscription } from 'src/graphql/graphql';

@Injectable({
  providedIn: 'root',
})
export class CodegenService {
  constructor(private missionsGQL: MissionsGQL, private missionGQL: MissionGQL, private usersGQL: UsersGQL) {}

  getMissions(): Observable<MissionsQuery['missions']> {
    return this.missionsGQL.watch().valueChanges.pipe(map((result) => result.data.missions));
  }

  getMission(id: string): Observable<MissionQuery['mission']> {
    return this.missionGQL.watch({ id }).valueChanges.pipe(map((result) => result.data.mission));
  }

  getUsers(): Observable<UsersSubscription['users']> {
    return this.usersGQL.subscribe().pipe<any>(map((result) => result?.data?.users));
  }
}
