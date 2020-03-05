import { gql } from 'apollo-server';
import { merge } from 'lodash';
import { getAllUsers } from './services';
import Users from './types/user.type';

const users = gql`
  extend type Query {
    users: UserSchema
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      const users = await getAllUsers();
      return users;
    },
  },
};

export default {
  typeDefs: [users, ...Users.typeDefs],
  resolvers: merge(resolvers),
};
