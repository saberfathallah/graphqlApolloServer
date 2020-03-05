import { gql } from 'apollo-server';

const Users = gql`
  type UserSchema {
    error: String
    users: [User]
  }
  
  type User {
    email: String
    name: String
    password: String
  }
  
  input UserInput {
    email: String
    name: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }
  
  type UserResponse {
    user: User
    error: String
  }
  type UserLoginResponse {
    user: User
    token: String
  }
`;

export default {
  typeDefs: [Users],
};
