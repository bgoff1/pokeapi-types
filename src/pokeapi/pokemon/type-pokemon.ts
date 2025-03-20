import type { NamedAPIResource } from "../common/named-api-resource";

export type TypePokemon = {
  /** The order the Pokémon's types are listed in. */
  slot: number;
  /** The Pokémon that has the referenced type. */
  pokemon: NamedAPIResource;
};
