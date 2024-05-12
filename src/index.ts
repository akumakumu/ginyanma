import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
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

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);