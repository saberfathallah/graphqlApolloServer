import { merge } from 'lodash';
import userMutation from './user/user.mutation';
import userQuery from './user/user.query';
import categoryMutation from './category/category.mutation';
import categoryQuery from './category/category.query';

export default {
  typeDefs: [
    ...userMutation.typeDefs,
    ...userQuery.typeDefs,
    ...categoryMutation.typeDefs,
    ...categoryQuery.typeDefs,
  ],
  resolvers: merge(
    userMutation.resolvers,
    userQuery.resolvers,
    categoryMutation.resolvers,
    categoryQuery.resolvers,
  ),
};
