import { gql } from 'apollo-server';
import { merge } from 'lodash';
import { getAllCategoriesServices } from './services';
import Categories from './types/category.type';

const categoryQueries = gql`
  extend type Query {
    getAllCategoriesQuery: Categories
  }
`;

const resolvers = {
  Query: {
    getAllCategoriesQuery: async () => {
      const categories = await getAllCategoriesServices();
      return categories;
    },
  },
};

export default {
  typeDefs: [categoryQueries, ...Categories.typeDefs],
  resolvers: merge(resolvers),
};
