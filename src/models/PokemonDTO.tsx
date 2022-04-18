export interface PokemonsDTO {
  activePokemon: {};
  pokemons: {}[];
}

export interface PokemonsFilterDTO {
  id: number;
  name: string;
  type: PokeType[];
}

export interface PokemonDTO {
  id: number;
  name: string;
  picture: string;
  type: PokeType[];
  colorType: string;
  weight: number;
  height: number;
  abilities: PokeSkills[];
  stats: PokeStats[];
  text: string;
}

export interface PokeType {
  slot: number;
  type: {
    name: number;
    url: string;
  };
}

export interface PokeSkills {
  slot: number;
  ability: {
    name: number;
    url: string;
  };
}

export interface PokeStats {
  base_stat: number;
  stat: {
    name: number;
  }
}