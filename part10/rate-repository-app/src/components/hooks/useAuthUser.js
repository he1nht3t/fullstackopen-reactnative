import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthUser = (includeReviews) => {
	includeReviews = includeReviews ? true : false;

	const { data, error, loading, refetch } = useQuery(GET_AUTHORIZED_USER, {
		fetchPolicy: 'cache-and-network',
		variables: { includeReviews },
	});
	const authUser = data?.me;
	return { authUser, error, loading, refetch };
};

export default useAuthUser;
