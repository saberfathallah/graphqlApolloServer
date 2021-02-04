import { gql } from 'apollo-server';
import merge from 'lodash/merge';
import Users from './types/user.type';
import { remove, post } from '../../facade/api';

const UserMutation = gql`
  extend type Mutation {
    createUser(userInput: UserInput): UserResponse
    login(loginInput: LoginInput): UserLoginResponse
    deleteUser(email: String): UserResponse
  }
`;
const usersUrl = 'http://localhost:4001/users';
const resolvers = {
  Mutation: {
    createUser: (_, { userInput }) => post(usersUrl, null, userInput),
    deleteUser: (_, { email }) => remove(usersUrl, null, { email }),
    login: (_, { loginInput }) => post(`${usersUrl}/login`, null, loginInput),
  },
};

export default {
  typeDefs: [UserMutation, ...Users.typeDefs],
  resolvers: merge(resolvers),
};
