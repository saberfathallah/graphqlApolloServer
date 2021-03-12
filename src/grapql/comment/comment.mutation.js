import { gql } from 'apollo-server';
import merge from 'lodash/merge';

import Comments from './types/comment.type';
import { remove, post, put } from '../../facade/api';

const commentsMutation = gql`
  extend type Mutation {
    addComment(commentInput: CommentInput): CommentResponse
    deleteComment(deleteCommentInput: DeleteCommentInput): deleteCommentResponse
    updateComment(updateCommentInput: UpdateCommentInput): CommentResponse
  }
`;
const urlComment = 'http://localhost:4001/comments';

const resolvers = {
  Mutation: {
    addComment: (_, { commentInput }, { userId }) =>
      post(`${urlComment}/${commentInput.postId}`, userId, commentInput),
    deleteComment: (
      _,
      { deleteCommentInput: { commentId, postId } },
      { userId }
    ) => remove(`${urlComment}/${commentId}`, userId, { postId }),
    updateComment: (_, { updateCommentInput }, { userId }) =>
      put(
        `${urlComment}/${updateCommentInput.commentId}`,
        userId,
        updateCommentInput
      ),
  },
};

export default {
  typeDefs: [commentsMutation, ...Comments.typeDefs],
  resolvers: merge(resolvers),
};
