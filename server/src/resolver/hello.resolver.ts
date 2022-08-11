import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {

    @Query(returns => String, {name: 'hello2'})
    hello() {
        return 'Hello, World'
    }
}
