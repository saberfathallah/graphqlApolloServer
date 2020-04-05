import { gql } from 'apollo-server';
import { merge } from 'lodash';
import { addCommentService, deleteCommentService, updateCommentService } from './services';
import Comments from './types/comment.type';

const commentsMutation = gql`
  extend type Mutation {
    addComment(commentInput: CommentInput): CommentResponse
    deleteComment(deleteCommentInput: DeleteCommentInput): deleteCommentResponse
    updateComment(updateCommentInput: UpdateCommentInput): CommentResponse
  }
`;

const resolvers = {
  Mutation: {
    addComment: (_, { commentInput }, { userId } ) => addCommentService(commentInput, userId),
    deleteComment: (_, { deleteCommentInput }, { userId } ) => deleteCommentService(deleteCommentInput, userId),
    updateComment: (_, { updateCommentInput }, { userId } ) => updateCommentService(updateCommentInput, userId),

  },
};

export default {
  typeDefs: [commentsMutation, ...Comments.typeDefs],
  resolvers: merge(resolvers),
};