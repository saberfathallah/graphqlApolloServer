import express from 'express';
import dotenv from 'dotenv';
import { merge } from 'lodash';
import { ApolloServer, gql } from 'apollo-server-express';

import features from './grapql';
import verifyToken from './utils/jwt';

dotenv.config();
const PORT = process.env.APPLICATION_PORT;

const baseTypeDef = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty2: String
  }
`;

const baseResolvers = {
  Query: {
    _empty: () => '_empty',
  },
  Mutation: {
    _empty2: () => '_empty',
  },
};

const server = new ApolloServer({ 
  typeDefs: [baseTypeDef, ...features.typeDefs],
  resolvers: merge(baseResolvers, features.resolvers),
  context: async ({ req }) => {
    const userId = verifyToken(req.headers.authorization);
    return {
      userId,
    };
  },
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`Now browse to http://localhost:${PORT}` + server.graphqlPath)
);