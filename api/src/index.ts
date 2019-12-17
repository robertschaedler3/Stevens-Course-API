import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { Resolver, Query, buildSchema } from "type-graphql";

import 'reflect-metadata';

@Resolver()
class HelloWorldResolver {
    @Query(() => String)
    async hello() {
        return 'hello robert';
    }
}

const main = async () => {
    const schema = await buildSchema({
        resolvers: [HelloWorldResolver]
    })

    const apolloServer = new ApolloServer({ schema });
    
    const app = Express();
    apolloServer.applyMiddleware({ app });

    app.listen(8080, () => console.log("Listening on port 4000."))
}

main();
