import { Platform } from 'react-native';

const theme = {
	colors: {
		textPrimary: '#24292e',
		textSecondary: '#586069',
		primary: '#0366d6',
		heading: '#ffffff',
		error: '#d73a4a',
	},
	backgroundColors: {
		primary: '#0366d6',
		appBar: '#24292e',
		mainContainer: '#e1e4e8',
		container: '#ffffff',
	},
	fontSizes: {
		body: 16,
		heading: 22,
		subheading: 18,
	},
	fonts: Platform.select({
		android: 'Roboto',
		ios: 'Arial',
		default: 'System',
	}),
	fontWeights: {
		normal: '400',
		bold: '700',
	},
};

export default theme;
