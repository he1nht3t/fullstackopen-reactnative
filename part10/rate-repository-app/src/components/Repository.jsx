import { Text, View, Pressable, StyleSheet, FlatList } from 'react-native';
import * as Linking from 'expo-linking';

import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

import theme from '../theme';

import { useParams } from 'react-router-native';
import useRepository from './hooks/useRepository';

//STYLES
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
	repositoryContainer: {
		backgroundColor: theme.backgroundColors.container,
		height: 270,
		paddingBottom: 10,
		marginBottom: 10,
	},
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.backgroundColors.primary,
		paddingVertical: 10,
		marginHorizontal: 10,
		borderRadius: 5,
	},
	button: {
		color: theme.colors.heading,
	},
});

//COMPONENTS SEPARATOR
const ItemSeparator = () => <View style={styles.separator} />;

const Index = () => {
	const { id } = useParams();
	const { repository, loading, error, fetchMore } = useRepository(id);

	const reviews = repository?.reviews?.edges?.map((edge) => edge.node);

	const handleOpenGitHub = () => {
		Linking.openURL(repository.url);
	};

	if (loading)
		return (
			<View style={styles.loadingContainer}>
				<Text style={styles.loadingText}>Loading...</Text>
			</View>
		);

	if (error) return <Text>Error: {error.message}</Text>;

	return (
		<FlatList
			data={reviews}
			onEndReached={fetchMore}
			onEndReachedThreshold={0.5}
			renderItem={({ item }) => <ReviewItem review={item} />}
			ItemSeparatorComponent={ItemSeparator}
			keyExtractor={({ id }) => id}
			ListHeaderComponent={() => (
				<View style={styles.repositoryContainer}>
					<RepositoryItem
						repository={repository}
						loading={loading}
						error={error}
					/>
					<Pressable style={styles.buttonContainer} onPress={handleOpenGitHub}>
						<Text style={styles.button}>Open in GitHub</Text>
					</Pressable>
				</View>
			)}
		/>
	);
};

export default Index;
