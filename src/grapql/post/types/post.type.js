import { gql } from 'apollo-server';

const Posts = gql`
  type Posts {
    error: String
    posts: [Post]
  }
  
  type Post {
    id: ID
    description: String
    categoryId: ID
    userId: User
    comments: [Comment]
  }
  
  input PostInput {
    description: String
    categoryId: ID
  }

  type PostResponse {
    post: Post
    error: String
  }

  type PostsResponse {
    posts: [Post]
    error: String
  }
`;

export default {
  typeDefs: [Posts],
};
