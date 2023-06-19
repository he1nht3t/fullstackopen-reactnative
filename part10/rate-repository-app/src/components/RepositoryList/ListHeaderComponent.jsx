import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
	picker: {
		height: 50,
		justifyContent: 'center',
		overflow: 'hidden',
	},
});

const ListHeaderComponent = ({
	filter,
	setFilter,
	searchQuery,
	onChangeSearch,
}) => {
	return (
		<View style={styles.container}>
			<Searchbar
				placeholder='Search'
				onChangeText={onChangeSearch}
				value={searchQuery}
			/>
			<View style={styles.picker}>
				<Picker
					selectedValue={filter}
					onValueChange={(itemValue) => setFilter(itemValue)}>
					<Picker.Item label='Latest repositories' value={1} />
					<Picker.Item label='Highest rated repositories' value={2} />
					<Picker.Item label='Lowest rated repositories' value={3} />
				</Picker>
			</View>
		</View>
	);
};

export default ListHeaderComponent;
