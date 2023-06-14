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
