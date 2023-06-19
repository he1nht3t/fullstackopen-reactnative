import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../theme';

const formatNumber = (number) => {
	if (number > 1000) {
		const formattedNumber = (number / 1000).toFixed(1);
		return `${formattedNumber}k`;
	}

	return number;
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		padding: 10,
		backgroundColor: theme.backgroundColors.container,
	},
	profileContainer: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	profileDetails: {
		display: 'flex',
		flex: 1,
	},
	infoContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 15,
	},
	avatar: {
		width: 60,
		height: 60,
		marginHorizontal: 15,
		borderRadius: 5,
	},
	name: {
		paddingVertical: 5,
		fontWeight: theme.fontWeights.bold,
		fontSize: theme.fontSizes.subheading,
	},
	language: {
		backgroundColor: theme.backgroundColors.primary,
		color: theme.colors.heading,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
		overflow: 'hidden',
		alignSelf: 'flex-start',
		marginTop: 5,
	},
	description: {
		paddingVertical: 5,
		fontWeight: theme.fontWeights.normal,
	},
	infoItem: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
	},
});

const RepositoryItem = ({ repository }) => {
	return (
		<View style={styles.container}>
			<View style={styles.profileContainer}>
				<View>
					<Image
						style={styles.avatar}
						source={{ uri: repository.ownerAvatarUrl }}
					/>
				</View>

				<View style={styles.profileDetails}>
					<Text style={styles.name}>{repository.fullName}</Text>
					<Text style={styles.description}>{repository.description}</Text>
					<Text style={styles.language}>{repository.language}</Text>
				</View>
			</View>

			<View style={styles.infoContainer}>
				<View style={styles.infoItem}>
					<Text>
						{repository.stargazersCount &&
							formatNumber(repository.stargazersCount)}
					</Text>
					<Text>Stars</Text>
				</View>

				<View style={styles.infoItem}>
					<Text>
						{repository.forksCount && formatNumber(repository.forksCount)}
					</Text>
					<Text>Forks</Text>
				</View>

				<View style={styles.infoItem}>
					<Text>
						{repository.reviewCount && formatNumber(repository.reviewCount)}
					</Text>
					<Text>Reviews</Text>
				</View>

				<View style={styles.infoItem}>
					<Text>
						{repository.ratingAverage && formatNumber(repository.ratingAverage)}
					</Text>
					<Text>Rating</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;
