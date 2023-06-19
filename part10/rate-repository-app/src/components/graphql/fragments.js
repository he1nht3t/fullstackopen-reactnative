import { gql } from 'graphql-tag';

export const REPOSITORY_FIELDS = gql`
	fragment RepositoryFields on Repository {
		id
		fullName
		description
		language
		forksCount
		stargazersCount
		ratingAverage
		reviewCount
		ownerAvatarUrl
	}
`;

export const REVIEW_FIELDS = gql`
	fragment ReviewFields on Review {
		id
		text
		rating
		createdAt
		repositoryId
		user {
			id
			username
		}
	}
`;

export const PAGE_INFO_FIELDS = gql`
	fragment PageInfoFields on PageInfo {
		hasNextPage
		hasPreviousPage
		endCursor
		startCursor
	}
`;
