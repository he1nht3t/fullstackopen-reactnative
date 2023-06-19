import Main from './src/components/Main';
import createApolloClient from './src/components/utils/apolloClient';
import AuthStorage from './src/components/utils/authStorage';
import AuthStorageContext from './src/components/contexts/AuthStorageContext';
import { ErrorProvider } from './src/components/contexts/ErrorContext';

import { ApolloProvider } from '@apollo/client';

import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
	return (
		<>
			<NativeRouter>
				<ErrorProvider>
					<ApolloProvider client={apolloClient}>
						<AuthStorageContext.Provider value={authStorage}>
							<Main />
						</AuthStorageContext.Provider>
					</ApolloProvider>
				</ErrorProvider>
			</NativeRouter>
			<StatusBar style='auto' />
		</>
	);
}
