import { NamedAPIResource } from "../common/named-api-resource";

export interface ItemHolderPokemonVersionDetail {
  /** How often this Pokémon holds this item in this version. */
  rarity: number;
  /** The version that this item is held in by the Pokémon. */
  version: NamedAPIResource;
}
