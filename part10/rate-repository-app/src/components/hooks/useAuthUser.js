import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthUser = () => {
	const { data, error, loading } = useQuery(GET_AUTHORIZED_USER, {
		fetchPolicy: 'cache-and-network',
	});
	const authUser = data?.me;
	return { authUser, error, loading };
};

export default useAuthUser;
