import { gql } from 'apollo-server';
import { merge } from 'lodash';
import { addCategoryService, deleteCategoryService } from './services';
import Categories from './types/category.type';

const CategoryMutation = gql`
  extend type Mutation {
    addCategory(categoryInput: CategoryInput): CategoryResponse
    deleteCategory(categoryId: ID): DeleteCategoryResponse
  }
`;

const resolvers = {
  Mutation: {
    addCategory: (_,{ categoryInput }, { userId } ) => addCategoryService(categoryInput, userId),
    deleteCategory: (_,{ categoryId }, { userId } ) => deleteCategoryService(categoryId, userId),
  },
};

export default {
  typeDefs: [CategoryMutation, ...Categories.typeDefs],
  resolvers: merge(resolvers),
};
