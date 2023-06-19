import { FlatList, View, StyleSheet, Pressable } from 'react-native';

import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import RepositoryItem from '../RepositoryItem';
import ListHeaderComponent from './ListHeaderComponent';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const Index = () => {
	const [filter, setFilter] = useState(1);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchKeyword] = useDebounce(searchQuery, 1000);

	const { repositories, loading, error, fetchMore } = useRepositories(
		filter,
		searchKeyword
	);
	const navigate = useNavigate();

	const onChangeSearch = (query) => setSearchQuery(query);

	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			onEndReached={fetchMore}
			onEndReachedThreshold={0.5}
			renderItem={({ item }) => {
				return (
					<Pressable onPress={() => navigate(`/${item.id}`)}>
						<RepositoryItem repository={item} loading={loading} error={error} />
					</Pressable>
				);
			}}
			ListHeaderComponent={
				<ListHeaderComponent
					filter={filter}
					setFilter={setFilter}
					searchQuery={searchQuery}
					onChangeSearch={onChangeSearch}
				/>
			}
		/>
	);
};

export default Index;
