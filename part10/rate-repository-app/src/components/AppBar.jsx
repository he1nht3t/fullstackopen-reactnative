import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import useAuthUser from './hooks/useAuthUser';
import useSignOut from './hooks/useSignOut';

import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.backgroundColors.appBar,
	},

	contentContainer: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
	subContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	heading: {
		fontSize: theme.fontSizes.heading,
		fontWeight: theme.fontWeights.bold,
		color: theme.colors.heading,
		alignContent: 'center',
		paddingVertical: 25,
		paddingHorizontal: 15,
	},
	button: {
		color: theme.colors.heading,
		padding: 10,
	},
});

const AppBar = () => {
	const { authUser } = useAuthUser();
	const signOut = useSignOut();

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.contentContainer} horizontal>
				<Link to='/'>
					<Text style={styles.heading}>Repositories</Text>
				</Link>

				{authUser ? (
					<View style={styles.subContainer}>
						<Link to='/create-review'>
							<Text style={styles.button}>Create a Review</Text>
						</Link>
						<Link to='/my-reviews'>
							<Text style={styles.button}>My Reviews</Text>
						</Link>
						<Pressable onPress={signOut}>
							<Text style={styles.button}>Sign Out</Text>
						</Pressable>
					</View>
				) : (
					<View style={styles.subContainer}>
						<Link to='/signup'>
							<Text style={styles.button}>Sign up</Text>
						</Link>
						<Link to='/signin'>
							<Text style={styles.button}>Sign in</Text>
						</Link>
					</View>
				)}
			</ScrollView>
		</View>
	);
};

export default AppBar;
