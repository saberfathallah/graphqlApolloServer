import { merge } from 'lodash';
import userMutation from './user/user.mutation';
import userQuery from './user/user.query';

export default {
  typeDefs: [
    ...userMutation.typeDefs,
    ...userQuery.typeDefs,
  ],
  resolvers: merge(
    userMutation.resolvers,
    userQuery.resolvers,
  ),
};
