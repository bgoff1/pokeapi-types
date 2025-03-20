import type { NamedAPIResource } from "../common/named-api-resource";

export type PokemonEntry = {
  /** The index of this Pokémon species entry within the Pokédex. */
  entry_number: number;
  /** The Pokémon species being encountered. */
  pokemon_species: NamedAPIResource;
};
