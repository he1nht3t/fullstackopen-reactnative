import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.backgroundColors.appBar,
	},
	contentContainer: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	heading: {
		fontSize: theme.fontSizes.heading,
		fontWeight: theme.fontWeights.bold,
		color: theme.colors.heading,
		alignContent: 'center',
		padding: 25,
	},
	signIn: {
		color: theme.colors.heading,
		padding: 25,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.contentContainer} horizontal>
				<Link to='/'>
					<Text style={styles.heading}>Repositories</Text>
				</Link>
				<Link to='/signin'>
					<Text style={styles.signIn}>Sign in</Text>
				</Link>
			</ScrollView>
		</View>
	);
};

export default AppBar;
