import { gql } from 'apollo-server';

const Likes = gql`
  type likeResponse {
    postId: ID
    userId: ID
    error: String
  }
`;

export default {
  typeDefs: [Likes],
};
