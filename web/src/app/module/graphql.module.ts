import { NgModule } from '@angular/core';

import { InMemoryCache, split } from '@apollo/client/core';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { createClient } from 'graphql-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    ApolloModule,
  ],
  // see: https://github.com/kamilkisiela/apollo-angular/issues/1801#issuecomment-1191376268
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        // http link
        const http = httpLink.create({
          uri: environment.api,
        });
        // websocket link:
        const wsUrl = environment.api.replace('http', 'ws');
        const ws = environment.wsType === 'graphql-ws' ?
          new GraphQLWsLink(createClient({ url: wsUrl })) :
          new WebSocketLink(new SubscriptionClient(wsUrl));

        // using the ability to split links, you can send data to each link
        // depending on what kind of operation is being sent
        const link = split(
          ({ query }) => {
            const call = getMainDefinition(query);
            console.log('GraphQL call > ', call);
            return (call.kind === 'OperationDefinition' && call.operation === 'subscription');
          },
          ws,
          http,
        );

        return { link, cache: new InMemoryCache() };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
