import { gql } from 'apollo-server';
import { merge } from 'lodash';
import { getPostsByUserIdService, getPostsByCategoryIdService } from './services';
import Posts from './types/post.type';

const postsQueries = gql`
  extend type Query {
    getPostsByUserId: PostsResponse
    getPostsByCategoryId(categoryId: ID): PostsResponse
  }
`;

const resolvers = {
  Query: {
    getPostsByUserId: async (_, $, { userId } ) => {
      const posts = await getPostsByUserIdService(userId);
      return posts;
    },
    getPostsByCategoryId: async (_, { categoryId }, { userId } ) => {
      const posts = await getPostsByCategoryIdService(categoryId, userId);
      return posts;
    },
  },
};

export default {
  typeDefs: [postsQueries, ...Posts.typeDefs],
  resolvers: merge(resolvers),
};
