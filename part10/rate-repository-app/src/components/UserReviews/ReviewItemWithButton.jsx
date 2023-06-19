import { useNavigate } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';
import useAuthUser from '../hooks/useAuthUser';

import { View, StyleSheet, Button, Alert } from 'react-native';
import theme from '../../theme';
import ReviewItem from '../ReviewItem';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.backgroundColors.container,
		padding: 10,
	},
	buttonGroup: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingBottom: 10,
	},
	errorText: {
		color: theme.colors.error,
		textAlign: 'center',
	},
});

const ReviewItemWithButton = ({ review }) => {
	const navigate = useNavigate();
	const [deleteReview] = useDeleteReview();
	const { refetch } = useAuthUser(true);

	const handleViewRepository = () => {
		navigate(`/${review.repositoryId}`);
	};

	const handleDeleteReview = () => {
		Alert.alert(
			'Delete Review',
			'Are you sure you want to delete this review?',
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Delete',
					onPress: async () => {
						try {
							await deleteReview(review.id);
							refetch();
						} catch (error) {
							Alert.alert('Error', error.message, [
								{
									text: 'OK',
									style: 'cancel',
								},
							]);
						}
					},
				},
			]
		);
	};

	return (
		<View style={styles.container}>
			<ReviewItem review={review} />

			<View style={styles.buttonGroup}>
				<Button
					color={theme.colors.primary}
					title='View Repository'
					onPress={handleViewRepository}
				/>

				<Button
					color={theme.colors.error}
					title='Delete Review'
					onPress={handleDeleteReview}
				/>
			</View>
		</View>
	);
};

export default ReviewItemWithButton;
