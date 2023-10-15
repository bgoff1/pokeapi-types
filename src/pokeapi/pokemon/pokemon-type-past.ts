import type { NamedAPIResource } from "../common/named-api-resource";
import type { PokemonType } from "./pokemon-type";

export interface PokemonTypePast {
  /** The last generation in which the referenced pokémon had the listed types. */
  generation: NamedAPIResource;
  /** The types the referenced pokémon had up to and including the listed generation. */
  types: PokemonType[];
}
