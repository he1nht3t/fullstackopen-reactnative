import { View, Text, Pressable } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import useErrorContext from '../hooks/useErrorContext';
import styles from '../utils/formStyles';

const SignInForm = ({ handleSubmit }) => {
	const { errorMessage } = useErrorContext();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign in</Text>
			<FormikTextInput name='username' placeholder='Username' />
			<FormikTextInput name='password' placeholder='Password' secureTextEntry />

			{errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

			<Pressable style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Submit</Text>
			</Pressable>
		</View>
	);
};

export default SignInForm;
