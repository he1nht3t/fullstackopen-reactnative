import { Formik } from 'formik';
import * as yup from 'yup';

import useCreateReview from '../hooks/useCreateReview';
import useErrorContext from '../hooks/useErrorContext';
import { useNavigate } from 'react-router-native';

import CreateReviewForm from './CreateReviewForm';

const initialValues = {
	ownerName: '',
	repositoryName: '',
	rating: '',
	text: '',
};

const validationSchema = yup.object().shape({
	ownerName: yup.string().required('Repository owner name is required'),
	repositoryName: yup.string().required('Repository name is required'),
	rating: yup.number().min(0).max(100).required('Rating is required'),
	text: yup.string(),
});

const Index = () => {
	const [createReview] = useCreateReview();
	const { setErrorMessage } = useErrorContext();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { ownerName, repositoryName, rating, text } = values;

		try {
			const data = await createReview({
				ownerName,
				repositoryName,
				rating,
				text,
			});

			const repositoryId = data.createReview.repositoryId;
			navigate(`/${repositoryId}`);
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
			{({ handleSubmit }) => <CreateReviewForm handleSubmit={handleSubmit} />}
		</Formik>
	);
};

export default Index;
