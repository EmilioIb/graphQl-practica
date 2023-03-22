import { gql } from "@apollo/client";

export const query = gql` Query {
    students {
      name
      lastName
      age
      gender
      score
    }
  }
`;
