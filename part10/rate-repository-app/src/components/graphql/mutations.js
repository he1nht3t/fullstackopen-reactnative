import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
	mutation authenticate($credentials: AuthenticateInput!) {
		authenticate(credentials: $credentials) {
			accessToken
		}
	}
`;

export const AUTHORIZE_INPUT = gql`
	input AuthenticateInput {
		username: String!
		password: String!
	}
`;

export const CREATE_REVIEW = gql`
	mutation createReview($review: CreateReviewInput!) {
		createReview(review: $review) {
			repositoryId
		}
	}
`;

export const CREATE_REVIEW_INPUT = gql`
	input CreateReviewInput {
		repositoryName: String!
		ownerName: String!
		rating: Int!
		text: String
	}
`;

export const CREATE_USER = gql`
	mutation createUser($user: CreateUserInput!) {
		createUser(user: $user) {
			id
			username
		}
	}
`;

export const CREATE_USER_INPUT = gql`
	input CreateUserInput {
		username: String!
		password: String!
	}
`;

export const DELETE_REVIEW = gql`
	mutation deleteReview($deleteReviewId: ID!) {
		deleteReview(id: $deleteReviewId)
	}
`;
