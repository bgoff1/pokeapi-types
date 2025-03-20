import type { NamedAPIResource } from "../common/named-api-resource";

export type PokemonSpeciesDexEntry = {
  /** The index number within the Pokédex. */
  entry_number: number;
  /** The Pokédex the referenced Pokémon species can be found in. */
  pokedex: NamedAPIResource;
};
