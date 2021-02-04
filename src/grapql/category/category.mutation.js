import { gql } from 'apollo-server';
import merge from 'lodash/merge';
import Categories from './types/category.type';
import { remove, post } from '../../facade/api';

const CategoryMutation = gql`
  extend type Mutation {
    addCategory(categoryInput: CategoryInput): CategoryResponse
    deleteCategory(categoryId: ID): DeleteCategoryResponse
  }
`;
const categoriesUrl = 'http://localhost:4001/categories';
const resolvers = {
  Mutation: {
    addCategory: (_, { categoryInput }, { userId }) =>
      post(categoriesUrl, userId, categoryInput),
    deleteCategory: (_, { categoryId }, { userId }) =>
      remove(`${categoriesUrl}/${categoryId}`, userId),
  },
};

export default {
  typeDefs: [CategoryMutation, ...Categories.typeDefs],
  resolvers: merge(resolvers),
};
