import { gql } from 'apollo-server';

const Posts = gql`
  type Posts {
    error: String
    posts: [Post]
    totalPosts: Int
  }

  type Post {
    id: ID
    description: String
    categoryId: String
    userId: User
    comments: [Comment]
    likes: [ID]
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
