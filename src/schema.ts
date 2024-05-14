export const typeDefs = `#graphql
  type Profile {
    name: String
  }

  type Query {
    profiles: [Profile]
  }
`;