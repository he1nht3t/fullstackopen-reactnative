import Main from './src/components/Main';
import createApolloClient from './src/components/utils/apolloClient';
import AuthStorage from './src/components/utils/authStorage';
import AuthStorageContext from './src/components/contexts/AuthStorageContext';

import { ApolloProvider } from '@apollo/client';

import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
	return (
		<>
			<NativeRouter>
				<ApolloProvider client={apolloClient}>
					<AuthStorageContext.Provider value={authStorage}>
						<Main />
					</AuthStorageContext.Provider>
				</ApolloProvider>
			</NativeRouter>
			<StatusBar style='auto' />
		</>
	);
}
