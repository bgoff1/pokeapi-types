import type { NamedAPIResource } from "../common/named-api-resource";

export interface PokemonSpeciesDexEntry {
  /** The index number within the Pokédex. */
  entry_number: number;
  /** The Pokédex the referenced Pokémon species can be found in. */
  pokedex: NamedAPIResource;
}
