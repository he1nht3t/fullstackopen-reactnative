import { View, Pressable, Text } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import styles from '../utils/formStyles';
import useErrorContext from '../hooks/useErrorContext';

const SignUpForm = ({ handleSubmit }) => {
	const { errorMessage } = useErrorContext();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign Up</Text>
			<FormikTextInput name='username' placeholder='Username' />
			<FormikTextInput name='password' placeholder='Password' secureTextEntry />
			<FormikTextInput
				name='passwordConfirmation'
				placeholder='Confirm your password'
				secureTextEntry
			/>

			{errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

			<Pressable style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Submit</Text>
			</Pressable>
		</View>
	);
};

export default SignUpForm;
