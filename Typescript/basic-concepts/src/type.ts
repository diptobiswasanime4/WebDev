type PokemonType = {
  name: string;
  level: number;
  type: string;
};

function pokemonInfo(pokemon: PokemonType) {
  console.log(
    `${pokemon.name} has level ${pokemon.level}, is ${pokemon.type} type Pokemon.`
  );
}

pokemonInfo({
  name: "Pikachu",
  level: 5,
  type: "Electric",
});
