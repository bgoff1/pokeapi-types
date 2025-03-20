import type { NamedAPIResource } from "../common/named-api-resource";
import type { PokemonHeldItemVersion } from "./pokemon-held-item-version";

export type PokemonHeldItem = {
  /** The item the referenced Pokémon holds. */
  item: NamedAPIResource;
  /** The details of the different versions in which the item is held. */
  version_details: PokemonHeldItemVersion[];
};
