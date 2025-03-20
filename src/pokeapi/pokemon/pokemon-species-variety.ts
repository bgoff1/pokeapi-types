import type { NamedAPIResource } from "../common/named-api-resource";

export type PokemonSpeciesVariety = {
  /** Whether this variety is the default variety. */
  is_default: boolean;
  /** The Pokémon variety. */
  pokemon: NamedAPIResource;
};
