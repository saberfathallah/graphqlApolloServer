import { gql } from 'apollo-server';

const Comments = gql`
  type Comment {
    id: ID
    description: String
    userId: User
    postId: String
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
