import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
	const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
		variables: { id, first: 2 },
	});

	const repository = data?.repository;

	const handleFetchMore = () => {
		const canFetchMore =
			!loading && data?.repository.reviews.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.repository.reviews.pageInfo.endCursor,
				first: 2,
			},
		});
	};

	return { repository, loading, error, fetchMore: handleFetchMore };
};

export default useRepository;
