import { gql } from 'apollo-server';
import merge from 'lodash/merge';

import Likes from './types/like.type';
import { remove, post } from '../../facade/api';

const likesMutation = gql`
  extend type Mutation {
    addLike(postId: ID): likeResponse
    dislike(postId: ID): likeResponse
  }
`;
const likeUrl = 'http://localhost:4001/likes/';
const resolvers = {
  Mutation: {
    addLike: (_, { postId }, { userId }) =>
      post(`${likeUrl}${postId}`, userId, { postId }),
    dislike: (_, { postId }, { userId }) =>
      remove(`${likeUrl}${postId}`, userId, { postId }),
  },
};

export default {
  typeDefs: [likesMutation, ...Likes.typeDefs],
  resolvers: merge(resolvers),
};
