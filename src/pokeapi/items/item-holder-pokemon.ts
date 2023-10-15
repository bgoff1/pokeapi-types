import { ItemHolderPokemonVersionDetail } from "./item-holder-pokemon-version-detail";
import { NamedAPIResource } from "../common/named-api-resource";

export interface ItemHolderPokemon {
  /** The Pokémon that holds this item. */
  pokemon: NamedAPIResource;
  /** The details for the version that this item is held in by the Pokémon. */
  version_details: ItemHolderPokemonVersionDetail[];
}
