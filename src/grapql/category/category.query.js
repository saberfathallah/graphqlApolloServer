import { gql } from 'apollo-server';
import merge from 'lodash/merge';

import Categories from './types/category.type';
import { get } from '../../facade/api';

const categoryQueries = gql`
  extend type Query {
    getAllCategoriesQuery: Categories
  }
`;

const resolvers = {
  Query: {
    getAllCategoriesQuery: async (_, $, { userId }) =>
      get('http://localhost:4001/categories', userId),
  },
};

export default {
  typeDefs: [categoryQueries, ...Categories.typeDefs],
  resolvers: merge(resolvers),
};
