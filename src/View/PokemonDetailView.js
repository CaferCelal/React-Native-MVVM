import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonDetailView = ({ route }) => {
    const { pokemon } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: pokemon.image_url }} style={styles.image} />
            <Text style={styles.name}>{pokemon.pokemon}</Text>
            <Text style={styles.type}>{pokemon.type}</Text>
            <Text style={styles.details}>Abilities: {pokemon.abilities.join(', ')}</Text>
            <Text style={styles.details}>Hitpoints: {pokemon.hitpoints}</Text>
            <Text style={styles.details}>Evolutions: {pokemon.evolutions.join(', ')}</Text>
            <Text style={styles.details}>Location: {pokemon.location}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    type: {
        fontSize: 20,
        color: 'gray',
        marginTop: 5,
    },
    details: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default PokemonDetailView;