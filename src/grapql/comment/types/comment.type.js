import { gql } from 'apollo-server';

const Comments = gql`
  type Comment {
    id: ID
    description: String
  }
  
  input CommentInput {
    description: String
    categoryId: ID
    postId: ID
  }

  type CommentResponse {
    comment: Comment
    error: String
  }
`;

export default {
  typeDefs: [Comments],
};
