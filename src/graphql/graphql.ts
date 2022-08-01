import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Launch = {
  __typename?: 'Launch';
  id: Scalars['ID'];
  isBooked: Scalars['Boolean'];
  mission?: Maybe<Mission>;
  rocket?: Maybe<Rocket>;
  site?: Maybe<Scalars['String']>;
};

/**
 * Simple wrapper around our list of launches that contains a cursor to the
 * last item in the list. Pass this cursor to the launches query to fetch results
 * after these.
 */
export type LaunchConnection = {
  __typename?: 'LaunchConnection';
  cursor: Scalars['String'];
  hasMore: Scalars['Boolean'];
  launches: Array<Maybe<Launch>>;
};

export type Mission = {
  __typename?: 'Mission';
  missionPatch?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type MissionMissionPatchArgs = {
  size?: InputMaybe<PatchSize>;
};

export type Mutation = {
  __typename?: 'Mutation';
  bookTrips: TripUpdateResponse;
  cancelTrip: TripUpdateResponse;
  login?: Maybe<User>;
};


export type MutationBookTripsArgs = {
  launchIds: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationCancelTripArgs = {
  launchId: Scalars['ID'];
};


export type MutationLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export enum PatchSize {
  Large = 'LARGE',
  Small = 'SMALL'
}

export type Query = {
  __typename?: 'Query';
  launch?: Maybe<Launch>;
  launches: LaunchConnection;
  me?: Maybe<User>;
  totalTripsBooked?: Maybe<Scalars['Int']>;
};


export type QueryLaunchArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  tripsBooked?: Maybe<Scalars['Int']>;
};

export type TripUpdateResponse = {
  __typename?: 'TripUpdateResponse';
  launches?: Maybe<Array<Maybe<Launch>>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  profileImage?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  trips: Array<Maybe<Launch>>;
};

export type LaunchesQueryVariables = Exact<{ [key: string]: never; }>;


export type LaunchesQuery = { __typename?: 'Query', launches: { __typename?: 'LaunchConnection', launches: Array<{ __typename?: 'Launch', mission?: { __typename?: 'Mission', name?: string | null } | null } | null> } };

export type MissionQueryVariables = Exact<{
  launchId: Scalars['ID'];
}>;


export type MissionQuery = { __typename?: 'Query', launch?: { __typename?: 'Launch', mission?: { __typename?: 'Mission', name?: string | null } | null } | null };

export type TripsBookedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TripsBookedSubscription = { __typename?: 'Subscription', tripsBooked?: number | null };

export const LaunchesDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class LaunchesGQL extends Apollo.Query<LaunchesQuery, LaunchesQueryVariables> {
    override document = LaunchesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MissionDocument = gql`
    query Mission($launchId: ID!) {
  launch(id: $launchId) {
    mission {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MissionGQL extends Apollo.Query<MissionQuery, MissionQueryVariables> {
    override document = MissionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TripsBookedDocument = gql`
    subscription tripsBooked {
  tripsBooked
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TripsBookedGQL extends Apollo.Subscription<TripsBookedSubscription, TripsBookedSubscriptionVariables> {
    override document = TripsBookedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }