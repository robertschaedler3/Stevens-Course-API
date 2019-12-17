import { Resolver, Query } from 'type-graphql';

@Resolver()
export class HelloWorldResolver {
    @Query(() => String)
    async hello() {
        return 'world';
    }
}
