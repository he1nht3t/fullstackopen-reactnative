import { gql } from '@apollo/client';
import {
	REPOSITORY_FIELDS,
	REVIEW_FIELDS,
	PAGE_INFO_FIELDS,
} from './fragments';

export const GET_REPOSITORIES = gql`
	query Repositories(
		$after: String
    $first: Int
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
	) {
		repositories(
			after: $after
      first: $first
			orderBy: $orderBy
			orderDirection: $orderDirection
			searchKeyword: $searchKeyword
		) {
			pageInfo {
				...PageInfoFields
			}
			edges {
				cursor
				node {
					...RepositoryFields
				}
			}
		}
	}
	${REPOSITORY_FIELDS},
  ${PAGE_INFO_FIELDS}
`;

export const AllRepositoriesOrderBy = {
	CREATED_AT: 'CREATED_AT',
	RATING_AVERAGE: 'RATING_AVERAGE',
};

export const OrderDirection = {
	ASC: 'ASC',
	DESC: 'DESC',
};

export const GET_REPOSITORY = gql`
	query getRepository($id: ID!, $after: String, $first: Int) {
		repository(id: $id) {
			...RepositoryFields
			url
			reviews ( first: $first, after: $after) {
				edges {
          cursor
					node {
						...ReviewFields
					}
				}
        pageInfo {
          ...PageInfoFields
        }
			}
		}
	}
	${REPOSITORY_FIELDS}, ${REVIEW_FIELDS}, ${PAGE_INFO_FIELDS}
`;

export const GET_AUTHORIZED_USER = gql`
	query getAuthorizedUser($includeReviews: Boolean = false) {
		me {
			id
			username
			reviews @include(if: $includeReviews) {
				edges {
					node {
						...ReviewFields
					}
				}
			}
		}
	}
	${REVIEW_FIELDS}
`;
