import { StyleSheet, Platform } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.backgroundColors.container,
		padding: 20,
	},
	title: {
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
		textAlign: 'center',
		paddingVertical: 20,
		textTransform: 'uppercase',
		color:
			Platform.OS === 'android'
				? theme.colors.textSecondary
				: theme.colors.textPrimary,
	},
	button: {
		backgroundColor: theme.colors.primary,
		paddingVertical: 15,
		marginTop: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	buttonText: {
		color: theme.colors.heading,
		textTransform: 'uppercase',
	},
	error: {
		color: theme.colors.error,
		textAlign: 'center',
		fontSize: theme.fontSizes.subheading,
	},
});

export default styles;
