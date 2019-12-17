import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { buildSchema } from "type-graphql";

import 'reflect-metadata';


const main = async () => {
    const schema = await buildSchema({
        resolvers: [__dirname + "/**/*.resolver.ts"],
    })

    const apolloServer = new ApolloServer({ schema });

    const app = Express();
    apolloServer.applyMiddleware({ app });

    app.listen(8080, () => console.log("Listening on port 8080."))
}

main();
