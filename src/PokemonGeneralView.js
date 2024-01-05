import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PokemonAPIService from './PokemonAPIService';
import PokemonGeneralViewModel from './PokemonGeneralViewModel';
import PokemonItem from './PokemonItem';

const PokemonGeneralView = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await PokemonAPIService.getPokemonData();
                const processedData = PokemonGeneralViewModel.processPokemonData(data);
                setPokemonData(processedData);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const filteredData = pokemonData.filter(
        (pokemon) =>
            pokemon.pokemon.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pokemon.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({ item }) => <PokemonItem pokemon={item} />;

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search Pokemon..."
                onChangeText={(text) => setSearchQuery(text)}
            />
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
});

export default PokemonGeneralView;