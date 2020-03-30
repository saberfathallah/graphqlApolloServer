import { gql } from 'apollo-server';
import { merge } from 'lodash';
import { createUserService, loginService, deleteUserService } from './services';
import Users from './types/user.type';

const UserMutation = gql`
  extend type Mutation {
    createUser(userInput: UserInput): UserResponse
    login(loginInput: LoginInput): UserLoginResponse
    deleteUser(email: String): UserResponse
  }
`;

const resolvers = {
  Mutation: {
    createUser: (_,{ userInput } ) => createUserService(userInput),
    deleteUser: (_,{ email } ) => deleteUserService(email),
    login: (_,{ loginInput }, ctx ) => loginService(loginInput, ctx),
  },
};

export default {
  typeDefs: [UserMutation, ...Users.typeDefs],
  resolvers: merge(resolvers),
};
