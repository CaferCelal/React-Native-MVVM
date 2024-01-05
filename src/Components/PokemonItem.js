import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PokemonItem = ({ pokemon }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('PokemonDetail', { pokemon });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: pokemon.image_url }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{pokemon.pokemon}</Text>
                    <Text style={styles.type}>{pokemon.type}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    type: {
        fontSize: 16,
        color: 'gray',
    },
});

export default PokemonItem;