import { gql } from 'apollo-server';
import merge from 'lodash/merge';

import Posts from './types/post.type';
import { post } from '../../facade/api';

const postsMutation = gql`
  extend type Mutation {
    addPost(postInput: PostInput): PostResponse
  }
`;

const resolvers = {
  Mutation: {
    addPost: (_, { postInput }, { userId }) =>
      post('http://localhost:4001/posts', userId, postInput),
  },
};

export default {
  typeDefs: [postsMutation, ...Posts.typeDefs],
  resolvers: merge(resolvers),
};
