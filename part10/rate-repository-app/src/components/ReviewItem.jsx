import { Text, View, StyleSheet } from 'react-native';
import theme from '../theme';
import { format, parseISO } from 'date-fns';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		padding: 10,
		backgroundColor: theme.backgroundColors.container,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	ratingContainer: {
		width: 50,
		height: 50,
		borderWidth: 2,
		borderRadius: 50,
		borderColor: theme.colors.primary,
		justifyContent: 'center',
		marginRight: 5,
	},
	ratingText: {
		textAlign: 'center',
	},
	infoContainer: {
		flex: 1,
		paddingBottom: 15,
		marginHorizontal: 5,
	},
	nameText: {
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
		paddingVertical: 5,
	},
	dateText: {
		paddingBottom: 5,
		color: theme.colors.textSecondary,
		fontWeight: theme.fontWeights.normal,
	},
	reviewText: {
		textAlign: 'justify',
		paddingRight: 10,
		fontSize: theme.fontSizes.body,
		lineHeight: 24,
	},
});

const formatDate = (date) => {
	const ISOdate = parseISO(date);
	return format(ISOdate, 'dd.MM.yyyy');
};

const ReviewItem = ({ review }) => {
	return (
		<View style={styles.container}>
			<View style={styles.ratingContainer}>
				<Text style={styles.ratingText}>{review.rating}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.nameText}>{review.user.username}</Text>
				<Text style={styles.dateText}>{formatDate(review.createdAt)}</Text>
				<Text style={styles.reviewText}>{review.text}</Text>
			</View>
		</View>
	);
};

export default ReviewItem;
