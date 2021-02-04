import { gql } from 'apollo-server';
import merge from 'lodash/merge';
import Posts from './types/post.type';
import { get } from '../../facade/api';

const postsQueries = gql`
  extend type Query {
    getPostsByUserId: PostsResponse
    getPostsByCategoryId(categoryId: ID): PostsResponse
    getAllPosts(from: Int, limit: Int): Posts
    search(query: String): PostsResponse
  }
`;

const postsUrl = 'http://localhost:4001/posts';

const resolvers = {
  Query: {
    getPostsByUserId: async (_, $, { userId }) => get(postsUrl, userId),
    getPostsByCategoryId: async (_, { categoryId }, { userId }) =>
      get(`${postsUrl}/categories/${categoryId}`, userId),
    getAllPosts: async (_, { from, limit }, { userId }) =>
      get(`${postsUrl}/all/${from}/${limit}`, userId),
    search: async (_, { query }, { userId }) =>
      get(`${postsUrl}/${query}`, userId),
  },
};

export default {
  typeDefs: [postsQueries, ...Posts.typeDefs],
  resolvers: merge(resolvers),
};
