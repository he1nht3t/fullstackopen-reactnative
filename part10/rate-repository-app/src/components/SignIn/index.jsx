import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import useErrorContext from '../hooks/useErrorContext';

import SignInForm from './SignInForm';

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required').min(3).max(15),
	password: yup.string().required('Password is required').min(5).max(30),
});

const initialValues = {
	username: '',
	password: '',
};

const Index = () => {
	const [signIn] = useSignIn();
	const { setErrorMessage } = useErrorContext();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;
		try {
			await signIn({ username, password });
			navigate('/');
		} catch (e) {
			console.log(e);
			setErrorMessage(e.message);
		}
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}>
			{({ handleSubmit }) => <SignInForm handleSubmit={handleSubmit} />}
		</Formik>
	);
};

export default Index;
