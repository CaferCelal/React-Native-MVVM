import PokemonModel from '../Model/PokemonModel';

class PokemonGeneralViewModel {
    static processPokemonData(data) {
        return data.map((item) => new PokemonModel(
            item.id,
            item.pokemon,
            item.type,
            item.abilities,
            item.hitpoints,
            item.evolutions,
            item.location,
            item.image_url
        ));
    }
}

export default PokemonGeneralViewModel;