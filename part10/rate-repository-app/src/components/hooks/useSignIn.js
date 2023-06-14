import { useMutation, useApolloClient } from '@apollo/client';
import useAuthStorage from './useAuthStorage';

import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
	const [mutate, result] = useMutation(AUTHORIZE);
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	const signIn = async ({ username, password }) => {
		const { data } = await mutate({
			variables: { credentials: { username, password } },
		});

		await authStorage.setAccessToken(data.authenticate.accessToken);

		apolloClient.resetStore();

		return data;
	};

	return [signIn, result];
};

export default useSignIn;
