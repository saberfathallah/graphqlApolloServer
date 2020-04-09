import { gql } from 'apollo-server';
import { merge } from 'lodash';
import { addPostService } from './services';
import Posts from './types/post.type';

const postsMutation = gql`
  extend type Mutation {
    addPost(postInput: PostInput): PostResponse
  }
`;

const resolvers = {
  Mutation: {
    addPost: (_, { postInput }, { userId }) =>
      addPostService(postInput, userId),
  },
};

export default {
  typeDefs: [postsMutation, ...Posts.typeDefs],
  resolvers: merge(resolvers),
};
