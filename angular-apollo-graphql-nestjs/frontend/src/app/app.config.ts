import { ApplicationConfig } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { graphqlProvider } from './graphql.provider';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), graphqlProvider],
};
