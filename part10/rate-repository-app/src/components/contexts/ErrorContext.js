import { createContext, useState } from 'react';

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
	const [error, setError] = useState(null);

	const setErrorMessage = (message) => {
		setError(message);
		setTimeout(() => {
			setError(null);
		}, 10000);
	};

	const value = {
		errorMessage: error,
		setErrorMessage,
	};

	return (
		<ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
	);
};

export default ErrorContext;
