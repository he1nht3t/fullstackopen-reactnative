import ErrorContext from '../contexts/ErrorContext';
import { useContext } from 'react';

const useErrorContext = () => {
	const value = useContext(ErrorContext);

	if (value === undefined) {
		throw new Error('useErrorContext must be used within a ErrorProvider');
	}

	return value;
};

export default useErrorContext;
