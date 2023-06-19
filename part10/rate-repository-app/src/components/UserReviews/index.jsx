import useAuthUser from '../hooks/useAuthUser';

import { Text, View, FlatList, StyleSheet } from 'react-native';
import theme from '../../theme';
import ReviewItemWithButton from './ReviewItemWithButton';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},

	loadingContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		paddingBottom: 100,
	},
	loadingText: {
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.subheading,
	},
});

const Index = () => {
	const { authUser, error, loading } = useAuthUser(true);
	const reviews = authUser?.reviews?.edges?.map((edge) => edge.node);

	const ItemSeparator = () => <View style={styles.separator} />;

	if (loading)
		return (
			<View style={styles.loadingContainer}>
				<Text style={styles.loadingText}>Loading...</Text>
			</View>
		);

	if (error) return <Text>Error: {error?.message}</Text>;

	return (
		<FlatList
			data={reviews}
			renderItem={({ item }) => <ReviewItemWithButton review={item} />}
			ItemSeparatorComponent={ItemSeparator}
			keyExtractor={({ id }) => id}
		/>
	);
};

export default Index;
