import AuthStorageContext from '../contexts/AuthStorageContext';
import { useContext } from 'react';

const useAuthStorage = () => {
	const authStorage = useContext(AuthStorageContext);

	if (!authStorage) {
		throw new Error(
			'useAuthStorage must be used within an AuthStorageProvider'
		);
	}

	return authStorage;
};

export default useAuthStorage;
