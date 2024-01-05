
class PokemonAPIService {
    static async getPokemonData() {
        try {
            const response = await fetch('https://dummyapi.online/api/pokemon');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default PokemonAPIService;