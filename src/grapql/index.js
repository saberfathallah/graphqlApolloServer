import { merge } from 'lodash';
import userMutation from './user/user.mutation';
import userQuery from './user/user.query';
import categoryMutation from './category/category.mutation';
import categoryQuery from './category/category.query';
import postMutation from './post/post.mutation';
import postQuery from './post/post.query';
import commentMutation from './comment/comment.mutation';

export default {
  typeDefs: [
    ...userMutation.typeDefs,
    ...userQuery.typeDefs,
    ...categoryMutation.typeDefs,
    ...categoryQuery.typeDefs,
    ...postMutation.typeDefs,
    ...postQuery.typeDefs,
    ...commentMutation.typeDefs,
  ],
  resolvers: merge(
    userMutation.resolvers,
    userQuery.resolvers,
    categoryMutation.resolvers,
    categoryQuery.resolvers,
    postMutation.resolvers,
    postQuery.resolvers,
    commentMutation.resolvers,
  ),
};
