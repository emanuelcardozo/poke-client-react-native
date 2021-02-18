const API_URL = "https://pokeapi.co/api/v2";
const ITEMS_PER_PAGE = 5;

const PokemonService = {
  getPokemons: page => {
    const req = new Request(`${ API_URL }/pokemon?offset=${(page-1)* ITEMS_PER_PAGE }&limit=${ITEMS_PER_PAGE}`);
    return fetch(req)
      .then(res => {
        return res.json()
      })
  },
  getPokemon: async id => {
    const reqPokemon = new Request(`${ API_URL }/pokemon/${id}`);
    const reqCharacteristic = new Request(`${ API_URL }/characteristic/${id}`);

    const pokemon = await fetch(reqPokemon)
      .then(res => {
        return res.json()
      })

    const characteristic = await fetch(reqCharacteristic)
      .then(res => {
        return res.json()
      }).catch( e => {
        console.log(e);

        return null
      })

    return { ...pokemon, characteristic }
  }
}

export default PokemonService;