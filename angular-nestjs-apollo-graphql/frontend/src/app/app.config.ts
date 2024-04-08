import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { GraphQLModule } from './module/graphql.module';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), importProvidersFrom(GraphQLModule)],
};
