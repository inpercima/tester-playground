import type { CodegenConfig } from '@graphql-codegen/cli'
import { environment } from '../environments/environment'
 
const config: CodegenConfig = {
  schema: environment.api,
  documents: './src/**/*.graphql',
  generates: {
    './src/graphql/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
      config: {
        apolloAngularVersion: 3,
        addExplicitOverride: true
      },
    }
  }
}
export default config
