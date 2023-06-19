import { Formik } from 'formik';
import * as yup from 'yup';

import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import useErrorContext from '../hooks/useErrorContext';
import { useNavigate } from 'react-router-native';

import SignUpForm from './SignUpForm';

const initialValues = {
	username: '',
	password: '',
	passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required').min(5).max(30),
	password: yup.string().required('Password is required').min(5).max(50),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Password confirmation is required'),
});

const Index = () => {
	const [signUp] = useSignUp();
	const [signIn] = useSignIn();
	const { setErrorMessage } = useErrorContext();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;
		try {
			await signUp({ username, password });
			await signIn({ username, password });
			navigate('/');
		} catch (error) {
			setErrorMessage(error.message);
		}
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{({ handleSubmit }) => <SignUpForm handleSubmit={handleSubmit} />}
		</Formik>
	);
};

export default Index;
