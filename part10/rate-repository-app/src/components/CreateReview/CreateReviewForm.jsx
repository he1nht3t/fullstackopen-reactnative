import { Text, View, Pressable } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import useErrorContext from '../hooks/useErrorContext';
import styles from '../utils/formStyles';

const CreateReviewForm = ({ handleSubmit }) => {
	const { errorMessage } = useErrorContext();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Review Form</Text>
			<FormikTextInput name='ownerName' placeholder='Repository owner name' />
			<FormikTextInput name='repositoryName' placeholder='Repository name' />
			<FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
			<FormikTextInput name='text' placeholder='Review' multiline />

			{errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

			<Pressable onPress={handleSubmit} style={styles.button}>
				<Text style={styles.buttonText}>Create a review</Text>
			</Pressable>
		</View>
	);
};

export default CreateReviewForm;
