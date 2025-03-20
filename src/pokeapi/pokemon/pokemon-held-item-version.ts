import type { NamedAPIResource } from "../common/named-api-resource";

export type PokemonHeldItemVersion = {
  /** The version in which the item is held. */
  version: NamedAPIResource;
  /** How often the item is held. */
  rarity: number;
};
