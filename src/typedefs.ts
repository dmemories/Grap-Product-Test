import { gql } from "apollo-server";

export const typeDefs = gql`
    type book {
        id: String,
        name: String!,
        price: Int!
    }

    type Query {
        books:[book!]!
    }

    type Mutation {
        addBook(name: String!, price: Int!): book
    }
`;