import type { ItemHolderPokemonVersionDetail } from "./item-holder-pokemon-version-detail";
import type { NamedAPIResource } from "../common/named-api-resource";

export type ItemHolderPokemon = {
  /** The Pokémon that holds this item. */
  pokemon: NamedAPIResource;
  /** The details for the version that this item is held in by the Pokémon. */
  version_details: ItemHolderPokemonVersionDetail[];
};
