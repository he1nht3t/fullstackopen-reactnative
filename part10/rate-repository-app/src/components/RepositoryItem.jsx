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
		backgroundColor: theme.backgroundColors.container,
	},
	profileContainer: {
		display: 'flex',
		overflow: 'hidden',
		flexDirection: 'row',
		padding: 5,
		alignItems: 'center',
	},
	profileDetails: {
		display: 'flex',
		flexShrink: 1,
		padding: 10,
		flexWrap: 'wrap',
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
		fontWeight: 'bold',
		fontSize: theme.fontSizes.subheading,
		paddingBottom: 5,
	},
	language: {
		backgroundColor: theme.backgroundColors.primary,
		color: theme.colors.heading,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
		alignSelf: 'flex-start',
		marginTop: 5,
		overflow: 'hidden',
	},
	description: {
		paddingBottom: 5,
		overflowWrap: 'break-word',
		flexShrink: 1,
		width: '100%', // Add this line to set a fixed width
	},
	infoItem: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
	},
});

const RepositoryItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<View style={styles.profileContainer}>
				<View>
					<Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
				</View>

				<View style={styles.profileDetails}>
					<Text style={styles.name}>{item.fullName}</Text>
					<Text style={styles.description}>{item.description}</Text>
					<Text style={styles.language}>{item.language}</Text>
				</View>
			</View>

			<View style={styles.infoContainer}>
				<View style={styles.infoItem}>
					<Text>
						{item.stargazersCount && formatNumber(item.stargazersCount)}
					</Text>
					<Text>Stars</Text>
				</View>

				<View style={styles.infoItem}>
					<Text>{item.forksCount && formatNumber(item.forksCount)}</Text>
					<Text>Forks</Text>
				</View>

				<View style={styles.infoItem}>
					<Text>{item.reviewCount && formatNumber(item.reviewCount)}</Text>
					<Text>Reviews</Text>
				</View>

				<View style={styles.infoItem}>
					<Text>{item.ratingAverage && formatNumber(item.ratingAverage)}</Text>
					<Text>Rating</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;
