import { gql } from 'apollo-server';
import merge from 'lodash/merge';
import { get } from '../../facade/api';

import Users from './types/user.type';

const users = gql`
  extend type Query {
    users: UserSchema
    getUserDetails: UserResponse
  }
`;
const usersUrl = 'http://localhost:4001/users';

const resolvers = {
  Query: {
    users: async () => get(usersUrl),
    getUserDetails: async (_, $, { userId }) =>
      get(`${usersUrl}/details`, userId),
  },
};

export default {
  typeDefs: [users, ...Users.typeDefs],
  resolvers: merge(resolvers),
};
