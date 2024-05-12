import { ApolloServer } from '@apollo/server';
const { startServerAndCreateHandler } = require('@apollo/server/handlers/node');

const typeDefs = `#graphql
  type Profile {
    name: String
  }

  type Query {
    profiles: [Profile]
  }
`;

const profiles = [
    {
      name: 'kuu'
    },
    {
      name: 'alexandrovna'
    },
  ];

const resolvers = {
    Query: {
      profiles: () => profiles,
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
// });

const handler = startServerAndCreateHandler(apolloServer, {
    path: '/graphql',
});

module.exports = handler;

console.log(`🚀  Server ready at: ${url}`);