import type { NamedAPIResource } from "../common/named-api-resource";

export interface PokemonType {
  /** The order the Pokémon's types are listed in. */
  slot: number;
  /** The type the referenced Pokémon has. */
  type: NamedAPIResource;
}
