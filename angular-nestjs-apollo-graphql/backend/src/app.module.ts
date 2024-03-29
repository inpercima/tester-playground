import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloResolver } from './resolver/hello.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService, HelloResolver],
})
export class AppModule {}
