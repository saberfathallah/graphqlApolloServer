import { gql } from 'apollo-server';
import { merge } from 'lodash';
import { getAllUsers, getUserDetailsService } from './services';
import Users from './types/user.type';

const users = gql`
  extend type Query {
    users: UserSchema
    getUserDetails: UserResponse
  }
`;

const resolvers = {
  Query: {
    users: async () => getAllUsers(),
    getUserDetails: async (_, $, { userId }) => getUserDetailsService(userId),
  },
};

export default {
  typeDefs: [users, ...Users.typeDefs],
  resolvers: merge(resolvers),
};
