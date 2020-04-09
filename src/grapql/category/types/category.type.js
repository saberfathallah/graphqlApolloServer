import { gql } from 'apollo-server';

const Categories = gql`
  type Categories {
    error: String
    categories: [Category]
  }

  type Category {
    id: ID
    name: String
    level: Int
    parentId: ID
    children: [Category]
  }

  input CategoryInput {
    name: String
    level: Int
    parentId: ID
  }

  type CategoryResponse {
    category: Category
    error: String
  }

  type DeleteCategoryResponse {
    categoryId: ID
    error: String
  }
`;

export default {
  typeDefs: [Categories],
};
