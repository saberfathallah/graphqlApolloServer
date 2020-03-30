import { gql } from 'apollo-server';
import { merge } from 'lodash';
import { addCommentService } from './services';
import Comments from './types/comment.type';

const commentsMutation = gql`
  extend type Mutation {
    addComment(commentInput: CommentInput): CommentResponse
  }
`;

const resolvers = {
  Mutation: {
    addComment: (_,{ commentInput }, { userId } ) => addCommentService(commentInput, userId),
  },
};

export default {
  typeDefs: [commentsMutation, ...Comments.typeDefs],
  resolvers: merge(resolvers),
};