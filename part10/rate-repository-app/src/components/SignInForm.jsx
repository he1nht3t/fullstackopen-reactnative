import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

import FormikTextInput from './FormikInputText';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.backgroundColors.container,
		padding: 20,
	},
	title: {
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
		textAlign: 'center',
		paddingBottom: 15,
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
});

const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign in</Text>
			<FormikTextInput name='username' placeholder='Username' />
			<FormikTextInput name='password' placeholder='Password' secureTextEntry />
			<Pressable style={styles.button} onPress={onSubmit}>
				<Text style={styles.buttonText}>Submit</Text>
			</Pressable>
		</View>
	);
};

export default SignInForm;
