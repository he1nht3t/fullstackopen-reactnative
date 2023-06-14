import { View, StyleSheet } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

import theme from '../theme';
import constants from 'expo-constants';

const styles = StyleSheet.create({
	backgroundColor: theme.backgroundColors.mainContainer,
	paddingTop: constants.statusBarHeight + 5,
	flexGrow: 1,
	flexShrink: 1,
});

const Main = () => {
	return (
		<View style={styles}>
			<AppBar />
			<Routes>
				<Route path='/' element={<RepositoryList />} exact />
				<Route path='/signin' element={<SignIn />} exact />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</View>
	);
};

export default Main;
