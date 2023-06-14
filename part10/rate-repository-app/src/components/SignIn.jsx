import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required').min(3).max(15),
	password: yup.string().required('Password is required').min(5).max(30),
});

const initialValues = {
	username: '',
	password: '',
};

const onSubmit = (values) => {
	console.log(values);
};

const SignIn = () => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;
