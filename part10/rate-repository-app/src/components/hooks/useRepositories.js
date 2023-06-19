import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (filter, searchKeyword) => {
	const orderBy = filter === 1 ? 'CREATED_AT' : 'RATING_AVERAGE';
	const orderDirection = filter === 1 || filter === 2 ? 'DESC' : 'ASC';

	const { data, error, loading, refetch, fetchMore, ...result } = useQuery(
		GET_REPOSITORIES,
		{
			fetchPolicy: 'cache-and-network',
			variables: { first: 4, orderBy, orderDirection, searchKeyword },
		}
	);
	const repositories = data?.repositories;

	const handleFetchMore = () => {
		const canFetchMore = !loading && data && repositories.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				first: 4,
				after: repositories.pageInfo.endCursor,
				orderBy,
				orderDirection,
				searchKeyword,
			},
		});
	};

	return {
		repositories,
		loading,
		fetchMore: handleFetchMore,
		refetch,
		error,
		...result,
	};
};

export default useRepositories;
