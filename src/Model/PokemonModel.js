export default class PokemonModel {
    constructor(id, pokemon, type, abilities, hitpoints, evolutions, location, image_url) {
        this.id = id;
        this.pokemon = pokemon;
        this.type = type;
        this.abilities = abilities;
        this.hitpoints = hitpoints;
        this.evolutions = evolutions;
        this.location = location;
        this.image_url = image_url;
    }
}