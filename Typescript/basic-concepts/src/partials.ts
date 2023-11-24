interface PokeDex {
  id: number;
  pokemon: Pokemon;
}

interface Pokemon {
  name: string;
  level: number;
  type: string[];
  isLegendary: boolean;
}

type UpdatePokemon = Partial<Pokemon>;

function updatePokeDexInfo(id: number, info: UpdatePokemon): number {
  console.log(info);

  return 1;
}

updatePokeDexInfo(2, { level: 5 });
