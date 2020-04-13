import { gql } from 'apollo-server';
import { merge } from 'lodash';
import { addLikeService, dislikeService } from './services';
import Likes from './types/like.type';

const likesMutation = gql`
  extend type Mutation {
    addLike(postId: ID): likeResponse
    dislike(postId: ID): likeResponse
  }
`;

const resolvers = {
  Mutation: {
    addLike: (_, { postId }, { userId }) => addLikeService(postId, userId),
    dislike: (_, { postId }, { userId }) => dislikeService(postId, userId),
  },
};

export default {
  typeDefs: [likesMutation, ...Likes.typeDefs],
  resolvers: merge(resolvers),
};
